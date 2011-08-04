/*
 * Onload procedures
 *
 */

$(document).ready( function () {

	var rootMMD = {};
	var customAttributeData = [
	"Hint",
	"RegexFilter",
	"tag",
	"contextNode",
	"extends",
	"fieldParserKey",
	"hide",
	"alwaysShow",
	"style",
	"layer",
	"navigatesTo",
	"shadows",
	"label",
	"asNaturalId",
	"format",
	"required",
	"dontSerialize",
	"isFacet",
	"ignoreInTermVector",
	"as_composite_scalar",
	"field_parser"
	];

	var filledHtml = '<div id="customAttributeBox" callerId="" > <form id="customAttributeForm"> <table id="customAttributeTable" width="100%" class="ui-widget ui-widget-content"> <thead> <tr class="ui-widget-header "> <td></td> <th>Attribute</th> <th>Value</th> </tr> </thead> </table> </form> </div> <div class="mmdMessage"> </div> <div class="xpathEvaluator" title="MMD Creator" > <span id="mmdTree"> <b style="font-size: 13px">MMD Tags</b> <span style="position:absolute; right:10px; width:20%; height:auto;" > <input type="button" id="Generate_button" value="Generate" style="width: 100%" /> </span> <br/> <table width="100%" border="0" cellpadding="1" id="xpathFields"> <tr> <td>Name</td> <td> <input type="text" id="mmdName" size="20"/> </td> <td>Selector</td> <td> <input type="text" id="selectorURL" size="20"/> </td> </tr> </table> <table id="mmdTable" width="100%" class="ui-widget ui-widget-content"> <thead> <tr class="ui-widget-header "> <th>&nbsp;</th> <th>Name</th> <th>Xpath</th> <th>FieldType</th> <th>Comment</th> <th>Type</th> <th>&nbsp;</th> </tr> </thead> <tr id="bottomAddButton"> <td colspan="7" align="center"> <br> <input type="button" id="Add_node_button" value="+" style="width: 30%" class="modifiedCursor" /> </td> </tr> </table> </span> <br/> <br/> <table width="100%" border="0" cellpadding="1" id="xpathFields"> <tr> <td>Validate</td> <td> <input type="text" id="xpath" name="xpath" size="50"/> </td> <td valign="center"> <input type="button" value="Validate" id="val_button"/> </td> </tr> <tr> <td>Generated</td> <td> <input type="text" id="result" value="" size="50" style="display: block"/> <label> </label> </td> <td valign="center"> <input type="button" id="cancel_button" value="Cancel" /> </td> </tr> </table> </div>';

	//$('body').prepend(' <div id="outerBox">'+filledHtml+'</div>');
	$("#selectorURL").val($(location).attr('href'));

	function loadInUI(currentNode,parent) {
		
		//alert("\n\n\n\nCalled with parent :"+parent+"\n\n\n\n\n\n"+JSON.stringify(currentNode));
		var count = currentNode.length;

		for( var i = 0 ; i < count ; i++ ) {
			var content = null;
			var tagType ;
			var name , type ,xPath ,comment, customAtt;

			if(currentNode[i]["scalar"]!=undefined) {
				content = currentNode[i]["scalar"];
				tagType = "Scalar";
			} else if(currentNode[i]["collection"]!=undefined) {
				content = currentNode[i]["collection"];
				tagType = "Collection";
			} else if(currentNode[i]["composite"]!=undefined) {
				content = currentNode[i]["composite"];
				tagType = "Composite";
			} else {
				alert("Invalid Object - Unable to load in UI");
				return;
			}

			name = content["name"];
			type = content["type"]==undefined ? "" : content["type"];
			xPath = content["xpath"]==undefined ? "" : content["xpath"];
			comment = content["comment"]==undefined ? "" : content["comment"];
			customAtt = loadCustomAttributes(content);
			AddNode(name,parent,true,type,xPath,comment,tagType,customAtt);
			if(content["kids"]!=undefined) {
				loadInUI(content["kids"],name);
			}
		}

	}

	/// Extract customAttributes to load into UI
	function loadCustomAttributes(content) {
		var customAtt = "" ;
		var count = customAttributeData.length;

		for(var i=0; i<count; i++) {

			if(content[customAttributeData[i]]!=undefined) {
				customAtt=customAttributeData[i]+":"+content[customAttributeData[i]];
			}
		}

		return customAtt;
	}

	function BuildMMD(selectedElements) {

		/// Object for this recursive call
		var curMMD = new Array();

		var childOfValue = selectedElements.attr("childOf");
		var elementSize = selectedElements.size() ;

		for( var i = 0 ; i < elementSize ; i++ ) {

			var content = selectedElements.children().next();
			var tagType = content.next().next().html();
			var name = content.html();
			var type = content.next().next().next().next().html();
			var generatedXpath = content.next().html();
			var comment = content.next().next().next().html();

			if(tagType=="Scalar") {
				var myScalar = {};
				var myScalar_wrapper = {};
				myScalar["name"]=name;
				myScalar["xpath"]=generatedXpath ;
				myScalar["comment"]=comment ;
				myScalar["scalar_type"]= type;

				var pastCustomAttributes = 	selectedElements.attr("customAttrib");

				alert("value of sclar pastattribs::"+pastCustomAttributes +"::");
				if(pastCustomAttributes!="") {
					pastCustomAttributes = pastCustomAttributes.split(",");
					for(var ip=0; ip<pastCustomAttributes.length ;ip++) {
						var temp = pastCustomAttributes[ip].split(":");
						myScalar[temp[0]]=temp[1];
						alert("lopping 1");
					}
				}

				myScalar_wrapper["scalar"]=myScalar;
				curMMD.push(myScalar_wrapper);
			} else if(tagType=="Collection") {
				var collection_field_wrapper = {};
				var collection_field = {};
				collection_field["name"]=name;
				collection_field["xpath"]=generatedXpath ;
				collection_field["comment"]=comment ;
				collection_field["type"]= type;

				var pastCustomAttributes = 	selectedElements.attr("customAttrib");

alert("value of collection pastattribs::"+pastCustomAttributes +"::");
				if( pastCustomAttributes!="") {
					pastCustomAttributes = pastCustomAttributes.split(",");
					for(var ig=0; ig<pastCustomAttributes.length ;ig++) {
						var temp = pastCustomAttributes[ig].split(":");
						collection_field[temp[0]]=temp[1];
							alert("lopping 2");
					}
				}
				collection_field["kids"] = new Array();

				if(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton") {

					var caller = 	"<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
					selectedElements = selectedElements.next();

					while(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton") {
						caller = caller + "<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
						selectedElements= selectedElements.next();
					}
					collection_field["kids"] = BuildMMD($(caller));
				}
				collection_field_wrapper["collection"]=collection_field;
				curMMD.push(collection_field_wrapper);
			} else if(tagType=="Composite") {
				var composite_field_wrapper = {};
				var composite_field = {};
				composite_field["name"]=name;
				composite_field["xpath"]=generatedXpath ;
				composite_field["comment"]=comment ;
				composite_field["type"]= type;

				var pastCustomAttributes = 	selectedElements.attr("customAttrib");

alert("value of composite pastattribs::"+pastCustomAttributes +"::");
				if(pastCustomAttributes!="") {
					pastCustomAttributes = pastCustomAttributes.split(",");
					for(var ig=0; ig<pastCustomAttributes.length ;ig++) {
						var temp = pastCustomAttributes[ig].split(":");
						composite_field[temp[0]]=temp[1];
							alert("lopping 3");
					}
				}

				composite_field["kids"] = new Array();

				if(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton") {

					var caller = 	"<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
					selectedElements = selectedElements.next();

					while(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton") {

						caller = caller + "<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
						selectedElements= selectedElements.next();
					}
					composite_field["kids"] = BuildMMD($(caller));
				}
				composite_field_wrapper["composite"] = composite_field;
				curMMD.push(composite_field_wrapper);
			}
			selectedElements= selectedElements.next();
		}

		return curMMD;
	}

	function   AddNode(name,parent,useData,type,xPath,comment,tagType,customAtt) {

		var d = new Date();

		var AddID = "Add_node_button"+d.getTime();
		var delID = "deleteHandler"+d.getTime();
		var cusID  = "customHandler"+d.getTime();

		if(checkDuplicateNames(name )) {

			var newRow ;
			if(useData==true)
				newRow = $("<tr id=\""+name+"\" customAttrib=\""+customAtt+"\" childOf=\""+parent+"\" > <td > <span id=\""+delID+"\" class=\"crossImage\"> &nbsp;&nbsp;&nbsp; </span>&nbsp; <span id=\""+AddID+"\" class=\"addImage\">&nbsp;&nbsp;&nbsp; </span> </td> <td class=\"nameBasedEditor\">"+ name +"</td> <td class=\"textBasedEditor\">"+ xPath +"</td> <td class=\"fieldTagBasedEditor\">"+tagType+"</td> <td class=\"textBasedEditor\">"+comment+"</td> <td class=\"typeBasedEditor\">"+type+"</td> <td class=\"customAttribute\" id=\""+cusID+"\" > &nbsp;&nbsp;&nbsp;&nbsp;</td> </tr>");
			else
				newRow = $("<tr id=\""+name+"\" customAttrib =\"\" childOf=\""+parent+"\"   ><td > <span id=\""+delID+"\" class=\"crossImage\"> &nbsp;&nbsp;&nbsp;  </span>&nbsp;<span  id=\""+AddID+"\" class=\"addImage\">&nbsp;&nbsp;&nbsp;   </span> </td><td class=\"nameBasedEditor\">"+name +"</td><td class=\"textBasedEditor\">"+$("#result").val()+"</td><td class=\"fieldTagBasedEditor\">Scalar</td><td class=\"textBasedEditor\">MyComment</td><td class=\"typeBasedEditor\">String</td><td class=\"customAttribute\" id=\""+cusID+"\" > &nbsp;&nbsp;&nbsp;&nbsp;</td></tr>");

			$(".xpathEvaluator").dialog( "option", "minHeight",$(".xpathEvaluator").dialog( "option", "minHeight" )+18);

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

			var tempAdd = "#"+AddID;
			$(tempAdd).hide();

		}

		AddID = "#"+AddID;
		delID = "#" + delID;
		cusID = "#" + cusID;

		if(customAtt!=undefined && customAtt!="") {
			/// Changing the Custom Attributes icon so that user should know presence of attributes
			$(cusID).removeClass('customAttribute');
			$(cusID).addClass('customAttributeChanged');
		}

		if(tagType!=undefined && tagType!="Scalar")
		{
			/// since the loaded ui node is either collection or compositie we need to provide + button
			$(AddID).show();
		}

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
		// Custom Attribute options
		$(cusID).click( function () {

			/// customizing styles
			$( "#customAttributeBox" ).dialog( "open" );
			$( "#customAttributeBox" ).siblings('div.ui-dialog-titlebar').remove();
			$('#customAttributeBox').addClass('customBox');
			$( "#customAttributeBox" ).siblings('div').find('span.ui-button-text:first').parent().css("margin-left","50px");
			$( "#customAttributeBox" ).siblings('div').find('span.ui-button-text:first').removeClass('ui-button-text');
			$( "#customAttributeBox" ).siblings('div').find('span.ui-button-text:first').parent().css("margin-left","145px");
			$( "#customAttributeBox" ).siblings('div').find('span.ui-button-text:first').removeClass('ui-button-text');
			$(".ui-widget-overlay").css("opacity","0");

			var mutex = 1 ;

			$(document).mousemove( function (e) {
				if(mutex) {
					$("#customAttributeBox").dialog("option", {
						position: [e.pageX, e.pageY-5]
					});
					mutex=0;
				}
			});
			$( "#customAttributeBox" ).attr("callerId",$(this).parent().attr("id"));
			var pastCustomAttributes = 	$(this).parent().attr("customAttrib");
			if(pastCustomAttributes!="") {
				pastCustomAttributes = pastCustomAttributes.split(",");

				for(var i=0; i<pastCustomAttributes.length ;i++) {
					var temp = pastCustomAttributes[i].split(":");
					customAttributeUI(temp[0],temp[1]);
				}
			}
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
			var ind = 1;
			try {
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
				alert( 'Error: Document tree modified during iteration ' + e );
			}

		}
	});
	$('#Load_button').click( function() {

		/// When we will have a working aervice for repository we will make this path dynamic

		$.getJSON('http://localhost/mmd/load/mmd.js', function(data) {

			/// if we have a success clear UI and global object
			rootMMD = {} ;

			/// setting name in UI
			$("#mmdName").val(data["name"]);

			/// Restoring url in UI
			$("#selectorURL").val(data["selector"]["url_path_tree"]);

			loadInUI(data["kids"],"");

		});
	});
	$('#Generate_button').click( function() {

		var path = {};
		rootMMD["parser"] = "xpath";
		rootMMD["name"] = $("#mmdName").val();
		rootMMD["extends"] = "document";
		path["url_path_tree"] = $("#selectorURL").val();
		rootMMD["selector"] = path;

		rootMMD["kids"]=  BuildMMD($("#mmdTable tr[childOf]"));

		$(".mmdMessage").text( JSON.stringify(rootMMD));
		$(".mmdMessage").attr("title","JSON MMD");
		$( ".mmdMessage" ).dialog({
			modal: true,
			minWidth: 700,
			minHeight: 500,
			maxWidth: 700,
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
		minHeight: 240,
		minWidth: 550,
		dialogClass: 'main_formatting'
	});

	// to be chnaged
	function checkDuplicateNames(name) {

		if($("#mmdTable #"+name).size() >0) {
			alert("Name already used");
			return false;
		}
		return  true;

	}

	// Custom attribute ui row adder

	function customAttributeUI(attrName,attrValue) {

		var d = new Date();
		var crosstemp = "customCrossButton"+ d.getTime();
		var autoId = "auto"+ d.getTime();

		$( "#customAttributeTable" ).append('<tr class="customTemp" ><td > <span  class="crossImage" id="'+crosstemp+'" > &nbsp;&nbsp;&nbsp;  </span></td><td id="'+autoId+'" >'+attrName+'</td><td class="valueBasedEditor" >'+attrValue+'</td></tr>');

		crosstemp = "#" +crosstemp;
		autoId = "#" + autoId;
		// Custom attribute deletion
		$(crosstemp).click( function() {
			$(this).parent().parent().remove();
		});
		//Edition option
		$(autoId).dblclick( function() {

			var currentValue = $(this).text();
			var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"14\"/>";
			$(this).html(tempHTML);
			$('#tempHTML').focus();

			$('#tempHTML').autocomplete({
				source: customAttributeData,
				select: function(event, ui) {
					var newValue = $('#tempHTML').val();
					$('#tempHTML').parent().text(newValue);
					$('#tempHTML').remove();
				},
				minLength: 0,
			});

			$(".ui-autocomplete").css("font-size","12px");

			$('#tempHTML').focusout( function() {
				var newValue = $('#tempHTML').val();
				$('#tempHTML').parent().text(newValue);
				$('#tempHTML').remove();

			});
		}
		);

		$(".valueBasedEditor").dblclick( function() {

			var currentValue = $(this).text();
			var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"14\"/>";
			$(this).html(tempHTML);
			$('#tempHTML').focus();

			$('#tempHTML').focusout( function() {
				var newValue = $('#tempHTML').val();

				$('#tempHTML').parent().text(newValue);
				$('#tempHTML').remove();

			});
		}
		);
	}

	$( "#customAttributeBox" ).dialog({
		autoOpen: false,
		height: 400,
		minWidth: 300,
		maxWidth: 300,
		modal: true,
		draggable: false,
		resizable:true,
		buttons: [{
			html: "+",
			className: 'addNewCustomAttributeClass',
			click: function() {
				customAttributeUI("New Attribute","Its value");
			}
		},{
			text: "Ok",
			className: 'saveButtonClass',
			click: function() {

				var current = $("#customAttributeTable").find("tr.customTemp");
				var customAttribCount = current.size();
				var temp ="";

				while(customAttribCount) {
					if(temp!="") {
						temp = temp + "," ;
					}
					temp = temp  + current.children().next().html() + ":" + current.children().next().next().html();
					customAttribCount--;
					current = current.next();
				}
				var identifyCaller =  "#" + $("#customAttributeBox").attr("callerId");
				$(identifyCaller).attr("customAttrib",temp);

				//alert($(identifyCaller).children().last().html());

				if( temp != "" ) {
					$(identifyCaller).children().last().removeClass('customAttribute');
					$(identifyCaller).children().last().addClass('customAttributeChanged');

				} else {

					$(identifyCaller).children().last().addClass('customAttribute');
					$(identifyCaller).children().last().removeClass('customAttributeChanged');
				}

				$(this).dialog("close");

			}
		}
		],
		close: function() {
			$(".ui-widget-overlay").css("opacity","0.7");
			$(".customTemp").remove();
			// Close code here (incidentally, same as Cancel code)
		}
	});

});