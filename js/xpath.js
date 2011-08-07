/// Current XPath object
var xPath = {
    ignoreArguments : {
      'body' : 1,
      'html' : 1
    },
    ignoreTags : {
      //'tbody' : 1
    },
    //you can define attributes than will be used for clarify XPath element if ID or CLASS attributes are absent
    additionalAttributes : {
        'a' : ['title'],
        'img' : ['alt']
    },
    //for these element (if they has no ID, CLASS or any attributes from xPath.additionalAttributes) will be used their value for clarification
    useValue : {
    },
    maxValueLength : 50,
    validate: function (string, doc) {
        try {
            if (typeof(doc) == 'undefined') {
                doc = document;
            }
            
            xResult = doc.evaluate("count(" + string + ")", doc, null, XPathResult.NUMBER_TYPE,null);

            if (typeof(xResult.numberValue) != 'undefined') {
              countNodes = xResult.numberValue;
            } else {
              countNodes = xResult.getNumberValue();
            }

            return countNodes;
        } catch (err) {
            return -1;
        }
    },

    generate: function (node, doc) {
        if (typeof(doc) == 'undefined') {
            doc = document;
        }
        sXPath = '';
        parent_counts = node.parents('*').length;

        for (i = 0; i <= parent_counts; i++) {
            nodeTag = node.get(0).tagName.toLowerCase();
            if (xPath.ignoreTags[nodeTag] != 1) {
                nodeClass = node.attr('class');
                if (xPath.ignoreArguments[nodeTag] != 1 && node.attr('id') != '') {

                  // If id is uniqie we can used \\tag[id='id_value]\.... 
                  if (this.checkForUniqueId(node.attr('id')) == 1 && this.validate('id(\'' + node.attr('id') + '\')' + sXPath, doc) == 1) {
                     
                      // Next line was changed on 6th june for id('value') bug fix 
                      // sXPath = 'id(\'' + node.attr('id') + '\')' + sXPath;
                 	    sXPath = '//*[@id=\'' + node.attr('id') + '\']' + sXPath;
                 	     return sXPath;
                 	     
                  } else {
                      sXPath = '/' + nodeTag + "[@id='" + node.attr('id') + "']" + sXPath;
                  }
                } else if (xPath.ignoreArguments[nodeTag] != 1 &&  node.attr('class') != '') {
                  nodeIndex = '';
                  if (node.parent().children('.' + nodeClass).length > 1) {
                      nodeIndex = '[' + (node.prevAll('.' + nodeClass).length  + 1) + ']';
                  }
                  sXPath = '/' + nodeTag + "[@class='" + nodeClass + "']" + nodeIndex + sXPath;
                } else {
                  attr_value = '';
                  add_attr = '';
                  add_innerHTML = '';
                  add_attr_jquery = '';
                  add_innerHTML_jquery = '';
                  if (typeof(xPath.additionalAttributes[nodeTag]) != 'undefined' && typeof(xPath.additionalAttributes[nodeTag].length) != 'undefined' && xPath.additionalAttributes[nodeTag].length > 0) {
                      for (i in xPath.additionalAttributes[nodeTag]) {
                          attr_name = xPath.additionalAttributes[nodeTag][i];
                          if (attr_value = node.attr(attr_name)) {
                              add_attr = '[@' + attr_name + '="' + attr_value + '"]';
                              add_attr_jquery = '[' + attr_name + '*="' + attr_value + '"]';
                              break;
                          }
                      }
                  }

                  if (add_attr == '' && node.children().length == 0 && xPath.useValue[nodeTag] == 1 && node.html().length <= xPath.maxValueLength) {
                      add_innerHTML = '[.=\'' + node.html() + '\']';
                      add_innerHTML_jquery = ':contains(\'' + node.html() + '\')';
                  }
                  nodeIndex = '';

                  if (node.parent().children(nodeTag + add_attr_jquery + add_innerHTML_jquery).length > 1) {
                      nodeIndex = '[' + (node.prevAll(nodeTag + add_attr_jquery).length  + 1) + ']';
                  }

                  sXPath = '/' + nodeTag + add_attr + add_innerHTML + nodeIndex + sXPath;
                }

                if (this.validate('/' + sXPath, doc) == 1) {
                    return '/' + sXPath
                }

                if (this.validate(sXPath, doc) == 1) {
                    return (sXPath)
                }
            } else {
                //sXPath = + sXPath;
            }
            node = node.parent('*');
        }
        return (sXPath);
    },

    // Check whether if is unique or not
    checkForUniqueId: function(id) {
        iFound = 0;
        $('*').each(function () {
           // Count using JQuery selector
           if ($(this).attr('id') == id) {
               iFound++;
           }
        });
        return iFound;
    }
  
    
}



///<summary>
/// To convert id('id_value') to //*[@id='id_value']. status : not used
///</summary>
///<param name="str">String to be modified</param>
///<returns>Modified string</returns>	
 function xpathBugFix(str) {
		
		var strLength = str.length;
		
		if(strLength > 4 )	{
			if(str.substring(0,4) == "id(\'")	{
				
				var idValue = "";
				var i=4;
				while(i < strLength && str[i]!="\'")	{			
					idValue += str[i];
					i++;
				}
				
				str="//*[@id=\'"+idValue+"\']" + str.substring(i+2);
			}
		}
		
		return str;
	}

    ///<summary>
    /// To escape a given string
    ///</summary>
    ///<param name="str"> String to be escaped</param>
    ///<returns>Escaped string</returns>	
    function jqescape(str) { 
	    return str.replace(/[#;&,\.\+\*~':"!\^\$\[\]\(\)=>|\/\\]/g, '\\\\$&'); 
    }

