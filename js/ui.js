/*
 * Onload procedures
 *
 */

$(document).ready( function () {

	var rootList = {};
	//$('body').prepend('<div id="outerBox"><div class="mmdMessage"> </div> <div class="xpathEvaluator" title="MMD Creator" > <span id="xpathFields"> Enter XPath for validation here:&nbsp; <br/> <input type="text" id="xpath" name="xpath" size="50"/> <input type="button" value="Validate" id="val_button"/> <br/> Generated XPath <br/> <input type="text" id="result" value="" size="50"/> <label> </label> <br/> <input type="button" id="cancel_button" value="Cancel" /> </span> <br/><br/> <span id="mmdTree"> <b style="font-size: 13px">MMD Tags</b> <br/> <table id="mmdTable" width="100%" class="ui-widget ui-widget-content"> <thead> <tr class="ui-widget-header "> <th>&nbsp;</th> <th>Name</th> <th>Xpath</th> <th>FieldType</th> <th>Comment</th> <th>Type</th> <th>&nbsp;</th> </tr> </thead> <tr id="bottomAddButton"><td colspan="7" align="center"><br><input type="button" id="Add_node_button" value="+" style="width: 30%" /></td></tr> </table> </span> </div> </div>');

	function BuildMMD(selectedElements)
	{
		
		var childOfValue = selectedElements.attr("childOf");
		var elementSize = selectedElements.size() ;
		var ty=selectedElements;
		var gh="Hello dude \n\n\n";
		for(var g=0;g<elementSize;g++) 
		{
			gh= gh+ "\n\n"+ty.html();
			ty = ty.next();
		}
		//alert(gh);
		
		var temp = "";
		//alert(" called with size : "+elementSize + " childof: "+childOfValue);
		
		for( var i = 0 ; i < elementSize ; i++ )
		{
			
			var content = selectedElements.children().next();
			var tagType = content.next().next().html();
			var name = content.html();
			var type = content.next().next().next().next().html();
			var generatedXpath = content.next().html();
			var comment = content.next().next().next().html();
			
			if(tagType=="Scalar")
			{
				temp = temp + "<scalar name=\""+name+"\" xpath=\""+generatedXpath+"\" comment=\""+ comment+"\" scalar_type=\""+type+"\" />";
			
			}
			else if(tagType=="Collection")
			{
				
				temp = temp + "<collection name=\""+name+"\" xpath=\""+generatedXpath+"\" comment=\""+ comment+"\" collection_child_type=\""+type+"\" > <kids>";
			    if(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton")
			    {
			    	//alert(" inside if");
			    	
			    	var caller = 	"<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
			    	
			    	selectedElements = selectedElements.next();
			    	
			    	while(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton")
			    	{
			    		//alert(" inside while \n\n\n" + childOfValue + " id : "+selectedElements.attr("id")+"child "+selectedElements.attr("childOf") );
			        	
			        	caller = caller + "<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
			    	
			    		selectedElements= selectedElements.next();
			    	}
			    	//selectedElements = selectedElements.prev();
			    	
			    	temp = temp + BuildMMD($(caller));
			    }
			    temp = temp + "</kids></collection>"	
			}
			else if(tagType=="Composite") 
			{
				temp = temp + "<composite name=\""+name+"\" xpath=\""+generatedXpath+"\" comment=\""+ comment+"\" type=\""+type+"\" > <kids>";
			    if(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton")
			    {
			    	//alert(" inside if");
			    	
			    	var caller = 	"<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
			    	
			    	selectedElements = selectedElements.next();
			    	
			    	while(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton")
			    	{
			    		//alert(" inside while \n\n\n" + childOfValue + " id : "+selectedElements.attr("id")+"child "+selectedElements.attr("childOf") );
			        	
			        	caller = caller + "<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
			    	
			    		selectedElements= selectedElements.next();
			    	}
			    	//selectedElements = selectedElements.prev();
			    	
			    	temp = temp + BuildMMD($(caller));
			    }
			    temp = temp + "</kids></composite>"	
			}
			selectedElements= selectedElements.next();
		}

		//alert(temp);
		return temp;
	}
	
	function   AddNode(name,parent) {

		var d = new Date();

		var AddID = "Add_node_button"+d.getTime();
		var delID = "deleteHandler"+d.getTime();

		if(checkDuplicateNames(name )) {

			var newRow = $("<tr id=\""+name+"\" childOf=\""+parent+"\"   ><td > <span id=\""+delID+"\" class=\"crossImage\"> &nbsp;&nbsp;&nbsp;  </span>&nbsp;<span  id=\""+AddID+"\" class=\"addImage\">&nbsp;&nbsp;&nbsp;   </span> </td><td class=\"nameBasedEditor\">"+name +"</td><td class=\"textBasedEditor\">"+$("#result").val()+"</td><td class=\"fieldTagBasedEditor\">Scalar</td><td class=\"textBasedEditor\">MyComment</td><td class=\"typeBasedEditor\">String</td><td></td></tr>");

			if(parent=="") {
				$("#bottomAddButton").before(newRow);
				//$("#mmdTable").prepend(newRow);   to add in begining
			} else {
				var tempPath = "#"+parent;
				var cur = "#"+name;
				$(tempPath).after(newRow);

				var str= $(tempPath).children("td").first().css("padding-left");

				$(cur).children("td").first().css("padding-left",parseInt(str.substring(0, str.length - 2))+5);

			}

			//alert($("$mmdTable").html());
			// Hiding Add button in scalar
			var tempAdd = "#"+AddID;
			$(tempAdd).hide();

		}

		AddID = "#"+AddID;
		delID = "#" + delID;

		$(AddID).click( function() {
			AddNode("newChild",$(this).parent().next().text());
		});
		//Edition option
		$(".fieldTagBasedEditor").dblclick( function() {

			var tempHTML = "<select id=\"tempHTML\" ><option value=\"Scalar\" selected=\"selected\">Scalar</option><option value=\"Collection\">Collection</option><option value=\"Composite\">Composite</option></select>";
			$(this).html(tempHTML);
			$('#tempHTML').focus();

			$('#tempHTML').focusout( function() {

				var newValue = $('#tempHTML').val();

				if(newValue!="Scalar") {
					$('#tempHTML').parent().parent().find('span').last().show();
				} else {
					$('#tempHTML').parent().parent().find('span').last().hide();
				}
				$('#tempHTML').parent().text(newValue);
				$('#tempHTML').remove();

			});
		}
		);

		//Edition option
		$(".nameBasedEditor").dblclick( function() {

			var currentValue = $(this).text();
			var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"12\"/>";
			$(this).html(tempHTML);
			$('#tempHTML').focus();

			$('#tempHTML').focusout( function() {

				var newValue = $('#tempHTML').val();
				var oldValue = $('#tempHTML').parent().parent().attr("id");

				if(!checkDuplicateNames(newValue)) {
					newValue = oldValue;
				}
				var selectorValue = 'tr[childOf="'+oldValue+'"]';
				$(selectorValue).attr("childOf",newValue);
				$('#tempHTML').parent().parent().removeAttr('id');
				$('#tempHTML').parent().parent().attr("id",newValue);
				$('#tempHTML').parent().text(newValue);
				$('#tempHTML').remove();
			});
		}
		);

		//Edition option
		$(".textBasedEditor").dblclick( function() {

			var currentValue = $(this).text();
			var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"12\"/>";
			$(this).html(tempHTML);
			$('#tempHTML').focus();
			$('#tempHTML').focusout( function() {

				var newValue = $('#tempHTML').val();

				$('#tempHTML').parent().text(newValue);
				$('#tempHTML').remove();

			});
		}
		);

		//Edition option
		$(".typeBasedEditor").dblclick( function() {

			// order of columns should be preserved
			if($(this).prev().prev().text()!= "Scalar") {
				var currentValue = $(this).text();
				var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"12\"/>";
				$(this).html(tempHTML);
				$('#tempHTML').focus();
				$('#tempHTML').focusout( function() {
					var newValue = $('#tempHTML').val();
					$('#tempHTML').parent().text(newValue);
					$('#tempHTML').remove();

				});
			} else {
				var tempHTML = "<select id=\"tempHTML\" ><option value=\"String\" selected=\"selected\">String</option><option value=\"ParsedURL\">ParsedURL</option><option value=\"Int\">Int</option></select>";

				$(this).html(tempHTML);
				$('#tempHTML').focus();

				$('#tempHTML').focusout( function() {

					var newValue = $('#tempHTML').val();
					$('#tempHTML').parent().text(newValue);
					$('#tempHTML').remove();

				});
			}

		}
		);

		//Deletion option
		$(delID).click( function () {

			var r=confirm("Are you sure you want to delete Field Tag with name : "+	$(this).parent().next().text());
			if (r==true) {
				//$('td[childOf='+$(this).parent().parent().attr("id")+']').remove();

				var delTemp = $(this).parent().parent();
				var delref = delTemp;
				var marginReference = parseInt(delref.children("td").first().css("padding-left").substring(0, delref.children("td").first().css("padding-left").length - 2));

				if(delTemp.next().attr("id")!="bottomAddButton" && marginReference < parseInt(delTemp.next().children("td").first().css("padding-left").substring(0, delTemp.next().children("td").first().css("padding-left").length - 2))) {

					while(delTemp.next().attr("id")!="bottomAddButton" && marginReference < parseInt(delTemp.next().children("td").first().css("padding-left").substring(0, delTemp.next().children("td").first().css("padding-left").length - 2))) {

						delTemp = delTemp.next();
						delTemp.prev().remove();
					}
				}
				delTemp.remove();

			}
			// Tag deletion node to be created here
		});
	}



	$('#Add_node_button').click( function() {
		AddNode("newNode","");
	});
	$('#val_button').click( function () {

		var result = xPath.validate($('#xpath').val());

		if(result != 0 ) {

			alert(" Number of results "+result);
			var inputPath = document.getElementById("xpath").value;
			var iterator = document.evaluate(inputPath , document , null, XPathResult.ANY_TYPE,null);

			try {
				var ind=1;
				var resultValue="";
				var thisNode = iterator.iterateNext();
				while (thisNode) {
					resultValue += "-- Result : "+ ind + " -- <br/>" + thisNode.textContent +"<br/>" ;
					thisNode = iterator.iterateNext();
					ind++;
				}
				$(".mmdMessage").html(resultValue);
				$(".mmdMessage").attr("title","Validated Results");
				$( ".mmdMessage" ).dialog({
					modal: true,
					minWidth: 300,
					maxHeight: 500,
					maxWidth: 300,
					buttons: {
						Ok: function() {
							$( this ).dialog( "close" );
						}
					}
				});
			} catch (e) {
				dump( 'Error: Document tree modified during iteration ' + e );
			}

		}
	});
	
	
	$('#Generate_button').click( function() {
	
	var rootSelector= $("#mmdTable tr[childOf]");
	var temp = "<root><name>imdb_title</name>"	
	temp += "<comment>IMDB_metadata</comment>"
	temp += "<extends>document</extends>"
	temp += "<parser>xpath</parser>"
	temp += "<kids>";
	temp +=  BuildMMD(rootSelector);
	temp += "</kids></root>";	
	
	//rootList = xml2json.xml_to_object(temp);
	
	//alert(temp);
		//Debug testing
		alert($.xmlToJSON(temp));
		$(".mmdMessage").text( temp);
				$(".mmdMessage").attr("title","Validated Results");
				$( ".mmdMessage" ).dialog({
					modal: true,
					minWidth: 500,
					maxHeight: 500,
					maxWidth: 300,
					buttons: {
						Ok: function() {
							$( this ).dialog( "close" );
						}
					}
				});
				
				
	});
	
	
	$('#result').keyup( function() {
		xPathValidation();
		elementInspector.cleanUpElem();
	});
	
	
	
	$('#cancel_button').click( function() {
		elementInspector.cleanUpElem();
	});
	elementInspector.init(document);

	elementInspector.onselectstart = function(node) {
		$('#result').val(xPath.generate(node, document));
		xPathValidation();
	}
	elementInspector.oncancel = function(node) {

	}
	elementInspector.onchange = function(node) {

	}
	$( ".xpathEvaluator" ).dialog({
		minHeight: 100,
		minWidth: 550
	});

	// to be chnaged
	function checkDuplicateNames(name) {

		if($("#mmdTable #"+name).size() >0) {
			alert("Name already used");
			return false;
		}
		return  true;

	}

});