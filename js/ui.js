/*
 * Onload procedures
 *
 */



	
$(document).ready( function () {

	//$('body').prepend('<div id="outerBox"> <div id="creation-form" title="Create new node"> <p class="validateTips"> All form fields are required. </p> <form> <fieldset> <label for="name"> Name </label><br/> <input type="text" name="name" id="name" class="text ui-widget-content ui-corner-all" /> <label for="xpath"> Xpath </label><br/> <input type="text" name="xpath" id="xpath" value="" class="text ui-widget-content ui-corner-all" /> <label for="comment"> comment </label><br/> <input type="test" name="comment" id="comment" value="" class="text ui-widget-content ui-corner-all" /> <label for="type" id="toChange_type"> Type </label><br/> <span id="adjustable_type"> <input type="text" name="type" id="type" value="" class="text ui-widget-content ui-corner-all" /> </span> <br/> <label for="parent"> Parent </label><br/> <select name="parent" id="parent" class="text ui-widget-content ui-corner-all"> </select> </fieldset> </form> </div> <div id="type-form" title="Select Field type" > <form> <fieldset align="center"> <select name="field_type" id="field_type"> <option value="Scalar" selected="selected">Scalar</option> <option value="Collection">Collection</option> <option value="Composite">Composite</option> </select> </fieldset> </form> </div> <div class="mmdMessage"> </div> <div class="xpathEvaluator" title="MMD Creator"> <span id="xpathFields"> Enter XPath for validation here:&nbsp; <br/> <input type="text" id="xpath" name="xpath" size="50"/> <input type="button" value="Validate" id="val_button"/> <br/> Generated XPath <br/> <input type="text" id="result" value="" size="50"/> <label> </label> <br/> <input type="button" id="cancel_button" value="Cancel" /> </span> <br/> <span id="mmdTree"> <b style="font-size: 13px">MMD Tags</b> <br/> <table width="100%%" border="0" cellpadding="1" > <tr align="center"> <td> <input type="button" id="Add_node_button" value="Add" /> </td> <td> <input type="button" id="Delete_node_button" value="Delete" /> </td> <td> <input type="button" id="Edit_node_button" value="Edit" /> </td> <td> <input type="button" id="Generate_button" value="Generate" /> </td> </tr> </table> <br /> <table id="mmdTable" width="100%" class="ui-widget ui-widget-content"> <thead> <tr class="ui-widget-header "> <th>Name</th> <th>Type</th> <th>Hierarchy</th> </tr> </thead> </table> </span> </div> </div>');


 function   AddNode(name,parent) {
 		
		var d = new Date(); 		
		
		var AddID = "Add_node_button"+d.getTime();
		var delID = "deleteHandler"+d.getTime();
		

		if(checkDuplicateNames(name )) {
			
			
			var newRow = $("<tr id=\""+name+"\" childOf=\""+parent+"\"   ><td > <span id=\""+delID+"\" class=\"crossImage\"> &nbsp;&nbsp;&nbsp;  </span>&nbsp;<span  id=\""+AddID+"\" class=\"addImage\">&nbsp;&nbsp;&nbsp;   </span> </td><td class=\"nameBasedEditor\">"+name +"</td><td class=\"textBasedEditor\">"+$("#result").val()+"</td><td class=\"fieldTagBasedEditor\">Scalar</td><td class=\"textBasedEditor\">MyComment</td><td class=\"typeBasedEditor\">String</td><td></td></tr>");
			
			if(parent=="")
			{	
				$("#bottomAddButton").before(newRow);
				//$("#mmdTable").prepend(newRow);   to add in begining 
			}
			else
			{
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

		
		$(AddID).click(function() {
    		AddNode("newChild",$(this).parent().next().text());
		});
	
		//Edition option
		$(".fieldTagBasedEditor").dblclick( function() {

			var tempHTML = "<select id=\"tempHTML\" ><option value=\"Scalar\" selected=\"selected\">Scalar</option><option value=\"Collection\">Collection</option><option value=\"Composite\">Composite</option></select>";
			$(this).html(tempHTML);
			$('#tempHTML').focus();

			$('#tempHTML').focusout( function() {

				var newValue = $('#tempHTML').val();
				
				if(newValue!="Scalar")
				{
					$('#tempHTML').parent().parent().find('span').last().show();
				}
				else
				{
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
				
				if(delTemp.next().attr('id')!="bottomAddButton" && delref.children("td").first().css("padding-left") != delTemp.next().children("td").first().css("padding-left"))
				{
					while(delTemp.next().attr("id")!="bottomAddButton" && delref.children("td").first().css("padding-left") != delTemp.next().children("td").first().css("padding-left"))
					{
						delTemp = delTemp.next();
						delTemp.prev().remove();
					}
				}
				delTemp.remove();
				
			}
			// Tag deletion node to be created here
		});
	}


	rootList = new Array();

		$('#Add_node_button').click(function() {
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