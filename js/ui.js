/*
	In-browser Meta Metadata Authoring Tool
	Copyright (C) 2011 Gaurav Aggarwal (gaurav@logiclord.com) 

	This library is free software; you can redistribute it and/or
	modify it under the terms of the GNU Lesser General Public
	License as published by the Free Software Foundation; either
	version 2.1 of the License, or (at your option) any later version.

	This library is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
	Lesser General Public License for more details.

	You should have received a copy of the GNU Lesser General Public
	License along with this library; if not, write to the Free Software

*/

/*
 * Onload procedures
 */

$(document).ready(function () {
	
	$('body').prepend('<div id="activate"> </div>');

	
	$("#activate").click( function () {
		
		// hiding activate button
		$("#activate").hide();
		
		/// Global variable to hold url of respository service
		var repoServiceURL = 'http://localhost:82';
		
		/// Global variable to store parent mmd 
		var extendsFrom = 'document';
		
	    /// <summary>
	    /// Global JS object to maintain mmd. It can be directly used with JSON.stringify to get mmd in JSON format. 
		/// </summary>
	    var rootMMD = {};
	
	    /// <summary>
	    /// Global list of custom Attributes. This is used in multiple places including loading UI and Autosuggest in Custom Attribute window.
	    /// </summary>
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
	
		 /// <summary>
	    /// Global list of mmd in repository. Currently being used for autosuggest.
	    /// </summary>
		var repoMMDList = new Array();
		
		
        /// <summary>
	    /// Loads list of mmd in Global list variable repoMMDList
	    /// </summary>
		$.getJSON(repoServiceURL+'/?getMMDList', function(data) {
				try
				{
					if( data['meta_metadata_name_list_response']['mmd_name_list']['mmd_name_list'] != undefined )
					{
						repoMMDList = data['meta_metadata_name_list_response']['mmd_name_list']['mmd_name_list'];
					}
					else
					{
						alert("Error : Invalid response while fetching mmd list ");
					}
				}
				catch(e) {
					alert( 'Error: Fetching mmd list ' + e );
				}
				
		});
		
		
	    /// This statement adds all required HTML content in Page.
		$('body').prepend('<div id="outerBox"> <div id="customAttributeBox" callerId="" > <form id="customAttributeForm"> <table id="customAttributeTable" width="100%" class="ui-widget ui-widget-content"> <thead> <tr class="ui-widget-header "> <td></td> <th>Attribute</th> <th>Value</th> </tr> </thead> </table> </form> </div> <div class="mmdMessage"> </div> <div class="xpathEvaluator" title="MMD Creator" > <span id="mmdTree"> <b style="font-size: 13px">MMD Tags</b> <span style="position:absolute; right:10px; width:25%; height:auto;" > <input type="button" id="Generate_button" value="Generate" style="width: 80%; right:10px;" /> </span> <br/> <br/> <table width="100%" border="0" cellpadding="1" id="xpathFields"> <tr> <td>Name</td> <td> <input type="text" id="mmdName" size="20"/> </td> <td>Selector</td> <td> <input type="text" id="selectorURL" size="20"/> </td> </tr> </table> <table id="mmdTable" width="100%" class="ui-widget ui-widget-content"> <thead> <tr class="ui-widget-header "> <th>&nbsp;</th> <th>Name</th> <th>Xpath</th> <th>FieldType</th> <th>Comment</th> <th>Type</th> <th>&nbsp;</th> </tr> </thead> <tr id="bottomAddButton"> <td colspan="7" align="center"> <br> <input type="button" id="Add_node_button" value="+" style="width: 30%" class="modifiedCursor" /> </td> </tr> </table> </span> <table width="600px" border="0" cellpadding="1" id="xpathFields"> <tr > <td align="left" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" id="reset_button" value="Reset" /> &nbsp;&nbsp;&nbsp;&nbsp; <input type="button" id="cancel_button" value="Cancel" /> &nbsp;&nbsp;&nbsp;&nbsp; <input type="button" id="Load_button" value="Load" /> &nbsp;&nbsp;&nbsp;&nbsp; <input type="button" value="Test XPath" id="val_button" />&nbsp;&nbsp; </td> <td rowspan="2" align="center" valign="top" ><span style="font-weight:bold;">Preview</span><br/><span id="previewBox"></span> </td> </tr> <tr valign="top"> <td>XPath</td> <td> <input type="text" id="result" value="" size="50" style="display: block"/> <label> </label> </td> </tr> </table> </div> </div> ');
		
		
	    /// sets the value of URL selector to url of the current page.
	    // split is used to remove get params from url
		$("#selectorURL").val($(location).attr('href').split('?')[0]);
		
		// ASCII code for ESC key
		var KEYCODE_ESC = 27;
	
		/// <summary>
	    /// Override ESC key to trigger focusout for embedded editing fields
	    /// </summary>
		$(document).keydown(function(e) {
	
		    if (e.keyCode == 27) 
		    {
				$("#tempHTML").focusout();
		    }
		    
		});
		
		/// <summary>
	    /// Triggers when user tried to edit any field in a row. At present updates XPath ('#result') textbox
	    /// </summary>
	    /// <param name="currentRow">JQuery Object containing of that row </param>
		function  onRowSelect(currentRow)
		{
			// updating value of textbox containing XPath
			$("#result").val(currentRow.children().next().next().html());
		}
	
	
	    /// <summary>
	    /// This merthod is responsible for loading a given mmd from object to UI. Initially we pass 2 parameters 
	    /// </summary>
	    /// <param name="currentNode">Object containing Field Tags at a particular level</param>
	    /// <param name="parent">ID of parent and "" signifies that it has root as its parent e.g. loadInUI(data["kids"],"") </param>
	
		function loadInUI(currentNode, parent) {
	        
	        // number of Field Tags at current level
			var count = currentNode.length;
	
			for( var i = 0 ; i < count ; i++ ) {
	
	            // To store ith Field Tag object at current level
				var content = null;
				var tagType ;
				var name , type ,xPath ,comment, customAtt;
	
	            // Identify Type of Field Tag object 
				if(currentNode[i]["scalar"]!=undefined) 
	            {
					content = currentNode[i]["scalar"];
					tagType = "Scalar";
				} 
	            else if(currentNode[i]["collection"]!=undefined)
	            {
					content = currentNode[i]["collection"];
					tagType = "Collection";
				} 
	            else if(currentNode[i]["composite"]!=undefined) 
	            {
					content = currentNode[i]["composite"];
					tagType = "Composite";
				} 
	            else 
	            {
	            	//alert(JSON.stringify(currentNode[i]));
					alert("Invalid Object - Unable to load in UI");
					return;
				}
	
	            // Every one is identified by an ID which is set to Timestamp at which it is created.
	            // Getting current timestamp
				var currentID = new Date();
	
	            // Fill in all standard field attributes is they exists
				name = content["name"];
				xPath = content["xpath"]==undefined ? "" : content["xpath"];
				comment = content["comment"]==undefined ? "" : content["comment"];
	
				if(content["scalar_type"] != undefined)
				{
					type = content["scalar_type"];
				}
				else if(content["child_type"] != undefined)
				{
					type = content["child_type"];
				}
				else if(content["type"] != undefined)
				{
					type = content["type"];
				}
				else
				{
					type = "";
				}
				
	            // Check existance of custom attributes using global list object customAttributeData
				customAtt = loadCustomAttributes(content);
	
	            // Add node with all required field. true as 3rd parameter helps in identifying call type. 
				AddNode(name,parent,true,type,xPath,comment,tagType,customAtt,currentID);
	
	            // If ith Field Tag has kids then make a recursive call for all kids of ith Field tag.
				if(content["kids"]!=undefined)
	             {
					currentID = currentID.getTime();
	                // Calling recursively by incrementing level and ID for parent.			
	            	loadInUI(content["kids"],currentID);
				}
			}
	
		}
	
		
	    /// <summary>
	    /// Extract customAttributes to load into UI for passed object. It implicitly uses  global list object customAttributeData
	    /// </summary>
	    /// <param name="content">Object containing Field Tags at a particular level whose custom attributes are to be loaded</param>
	    /// <returns> A string containg custom Attributes in standard format i.e. Attribute1:Value1,Attribute2:Value2 </returns>
		function loadCustomAttributes(content) {
			var customAtt = " " ;
			var count = customAttributeData.length;
	
			for(var i=0; i<count; i++) {
	
				if(content[customAttributeData[i]]!=undefined) {
					customAtt =  customAtt.trim() + customAttributeData[i]+":"+content[customAttributeData[i]]+",";
				}
			}
	
			return customAtt.slice(0,-1) ;
		}
	
	
	
	
	    /// <summary>
	    /// This method maps UI to JS object. UI is identified by JQuery selector object. This is a recursive method.
	    /// </summary>
	    /// <param name="selectedElements">JQuery Object which needs to be converted to corresponding JS Object</param>
	    /// <returns>Created JS object</returns>
	
		function BuildMMD(selectedElements) {
	
			// Object for this recursive call
			var curMMD = new Array();
	
	        // Identify Parent for current set. Parent must be common.
			var childOfValue = selectedElements.attr("childOf");
	
	        // Number of elements at and below this level
			var elementSize = selectedElements.size() ;
	
			for( var i = 0 ; i < elementSize ; i++ ) 
	        {
	            // Fill in all required details.
	
				var content = selectedElements.children().next();
				var tagType = content.next().next().html();
				var name = content.html();
				var type = content.next().next().next().next().html();
				var generatedXpath = content.next().html();
				var comment = content.next().next().next().html();
	
	            // If Field Tag is Scalar
				if(tagType=="Scalar")
	             {
	                // Build scalar object 
					var myScalar = {};
					var myScalar_wrapper = {};
					myScalar["name"]=name;
					myScalar["xpath"]=generatedXpath ;
					myScalar["comment"]=comment ;
					myScalar["scalar_type"]= type;
	
					var pastCustomAttributes = 	selectedElements.attr("customAttrib");
	
					// Fill custom attributes using standard format. 
					if(pastCustomAttributes!=undefined && pastCustomAttributes!="") 
	                {
						pastCustomAttributes = pastCustomAttributes.split(",");
						for(var ip=0; ip<pastCustomAttributes.length ;ip++) 
	                    {
							var temp = pastCustomAttributes[ip].split(":");
							myScalar[temp[0]]=temp[1];
						}
					}
	
					myScalar_wrapper["scalar"]=myScalar;
	                
	                // Push it to mmd object of current level i.e. in curMMD
					curMMD.push(myScalar_wrapper);
				}
	            // If Field Tag is Collection
	             else if(tagType=="Collection") 
	             {
	                // Build collection object 
					var collection_field_wrapper = {};
					var collection_field = {};
					collection_field["name"]=name;
					collection_field["xpath"]=generatedXpath ;
					collection_field["comment"]=comment ;
					collection_field["child_type"]= type;
	
					var pastCustomAttributes = 	selectedElements.attr("customAttrib");
	
					if(pastCustomAttributes!=undefined && pastCustomAttributes!="")
	                {
						pastCustomAttributes = pastCustomAttributes.split(",");
						for(var ig=0; ig<pastCustomAttributes.length ;ig++)
	                     {
							var temp = pastCustomAttributes[ig].split(":");
							collection_field[temp[0]]=temp[1];
						}
					}
					collection_field["kids"] = new Array();
	
	                // Check if it has any kids or not
					if(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton") 
	                {
	                    // if kids found accumulate ui to create a JQuery Object 
						var caller = 	"<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
						selectedElements = selectedElements.next();
	
	                    // Loop till you don't reach child of value of current level or you reach bottom + button row 
						while(selectedElements.next().attr("childOf")!= undefined && selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton") 
	                    {
							caller = caller + "<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
							selectedElements= selectedElements.next();
	
						}
	                    // make recursive call for next level i.e. for all descendents  
						collection_field["kids"] = BuildMMD($(caller));
					}
	
					collection_field_wrapper["collection"]=collection_field;
	
	                // Push it to mmd object of current level i.e. in curMMD
					curMMD.push(collection_field_wrapper);
	
				} 
	            // If Field Tag is Composite
	            else if(tagType=="Composite")
	             {
	                // Build Composite object 
					var composite_field_wrapper = {};
					var composite_field = {};
					composite_field["name"]=name;
					composite_field["xpath"]=generatedXpath ;
					composite_field["comment"]=comment ;
					composite_field["type"]= type;
	
					var pastCustomAttributes = 	selectedElements.attr("customAttrib");
	
					if(pastCustomAttributes!=undefined && pastCustomAttributes!="")
	               {
						pastCustomAttributes = pastCustomAttributes.split(",");
						for(var ig=0; ig<pastCustomAttributes.length ;ig++) 
	                    {
							var temp = pastCustomAttributes[ig].split(":");
							composite_field[temp[0]]=temp[1];
						}
					}
	
					composite_field["kids"] = new Array();
	
	                 // Check if it has any kids or not
					if(selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton") 
	                {
	                    // if kids found accumulate ui to create a JQuery Object 
						var caller = 	"<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
						selectedElements = selectedElements.next();
	
	                    // Loop till you don't reach child of value of current level or you reach bottom + button row 
						while(selectedElements.next().attr("childOf")!= undefined && selectedElements.next().attr("childOf") != childOfValue && selectedElements.next().attr("id")!="bottomAddButton") 
	                    {
	
							caller = caller + "<tr id=\""+selectedElements.next().attr('id')+"\" childOf=\""+selectedElements.next().attr('childOf')+"\" >"+selectedElements.next().html()+"</tr>";
							selectedElements= selectedElements.next();
	
						}
	                    // make recursive call for next level i.e. for all descendents  
						composite_field["kids"] = BuildMMD($(caller));
					}
	
					composite_field_wrapper["composite"] = composite_field;
	
	                // Push it to mmd object of current level i.e. in curMMD
					curMMD.push(composite_field_wrapper);
	
				}
	            // Move on to next Field Tag at current level
				selectedElements= selectedElements.next();
			}
	
	        // return JS object
			return curMMD;
		}
	
	
	    /// <summary>
	    /// This method add Field Tags in UI. It is used by + button and load UI. It creates ui based on availability of data in UI and passed parameters.
	    /// </summary>
	    /// <param name="name"> Name of Field Tag (required)</param>
	    /// <param name="parent"> ID of parent </param>
	    /// <param name="useData"> true/false depending on all other parameters to its right have data or not</param>
	    /// <param name="type"> type of Field Tag e.g. collection type, etc </param>
	    /// <param name="xPath"> xPath of Field Tag</param>
	    /// <param name="tagType"> Scalar/Collection/Composite </param>
	    /// <param name="customAtt"> Custom attributes in standard format </param>
	    /// <param name="currentID"> ID of current Field Tag</param>
		function   AddNode(name,parent,useData,type,xPath,comment,tagType,customAtt,currentID) {
	
			var d = new Date();
	
	        // If currentID is passed override d
			if(useData==true) 
	        {
				d = currentID;
			}
	
	        // initialize button handlers with ID of Field Tag
			var AddID = "Add_node_button"+d.getTime();
			var delID = "deleteHandler"+d.getTime();
			var cusID  = "customHandler"+d.getTime();
			d = d.getTime();
	
	        // Check whether a Field Tag with passed name already exists under passed parent if yes then get a unique name
			name = checkDuplicateNames(name,parent);
	        
	            // to hold html of row in UI
				var newRow ;
				if(useData==true)
					newRow = $("<tr id=\""+d+"\" customAttrib=\""+customAtt+"\" childOf=\""+parent+"\" > <td > <span id=\""+delID+"\" class=\"crossImage\"> &nbsp;&nbsp;&nbsp; </span>&nbsp; <span id=\""+AddID+"\" class=\"addImage\">&nbsp;&nbsp;&nbsp; </span> </td> <td class=\"nameBasedEditor\">"+ name +"</td> <td class=\"textBasedEditor\">"+ xPath +"</td> <td class=\"fieldTagBasedEditor\">"+tagType+"</td> <td class=\"textBasedEditor\">"+comment+"</td> <td class=\"typeBasedEditor\">"+type+"</td> <td class=\"customAttribute\" id=\""+cusID+"\" > &nbsp;&nbsp;&nbsp;&nbsp;</td> </tr>");
				else
					newRow = $("<tr id=\""+d+"\" customAttrib =\"\" childOf=\""+parent+"\"   ><td > <span id=\""+delID+"\" class=\"crossImage\"> &nbsp;&nbsp;&nbsp;  </span>&nbsp;<span  id=\""+AddID+"\" class=\"addImage\">&nbsp;&nbsp;&nbsp;   </span> </td><td class=\"nameBasedEditor\">"+name +"</td><td class=\"textBasedEditor\">"+$("#result").val()+"</td><td class=\"fieldTagBasedEditor\">Scalar</td><td class=\"textBasedEditor\">MyComment</td><td class=\"typeBasedEditor\">String</td><td class=\"customAttribute\" id=\""+cusID+"\" > &nbsp;&nbsp;&nbsp;&nbsp;</td></tr>");
	
	            // increase the size of main dialogue box.
				$(".xpathEvaluator").dialog( "option", "minHeight",$(".xpathEvaluator").dialog( "option", "Height" )+10);
	
				if(parent=="") 
	            {
	                // add under root
					$("#bottomAddButton").before(newRow);
				} 
	            else 
	            {
	                // add under passed parent
					var tempPath = "#"+parent;
					var cur = "#"+d;
					$(tempPath).after(newRow);
	
	                // get left padding of parent
					var str= $(tempPath).children("td").first().css("padding-left");
	
	                // indent right by 5px more then parent 
					$(cur).children("td").first().css("padding-left",parseInt(str.substring(0, str.length - 2))+5);
	
				}
	
	            // By default added row is Scalar hence + button is hidden
				var tempAdd = "#"+AddID;
				$(tempAdd).hide();
	
			
	
	        // convert to JQury selector string
			AddID = "#"+AddID;
			delID = "#" + delID;
			cusID = "#" + cusID;
	
	        // Changing the Custom Attributes icon so that user should know presence of attributes
			if(customAtt!=undefined && customAtt!="")
	        {
	            $(cusID).removeClass('customAttribute');
				$(cusID).addClass('customAttributeChanged');
			}
	
	        // since the loaded ui node is either collection or compositie we need to provide + button
			if(tagType!=undefined && tagType!="Scalar") 
	        {
				$(AddID).show();
			}
	
	        /// <summary>
	        /// Click handler for + button (if enabled). Recursively call Add  node to add newChild under current Field Tag (Passed by id)
	        /// </summary>
			$(AddID).click( function() {
				
				//Trigger onRowSelect method
	            onRowSelect($(this).parent());
	            
				AddNode("newChild",$(this).parent().parent().attr("id"));
			});
	
	
			//Editing options
	
	
	        /// <summary>
	        /// Double click handler for editing type of Field Tag i.e. Scalar/Collection/Composite
	        /// </summary>
			$(".fieldTagBasedEditor").click( function() {	          
	                      	
				//Trigger onRowSelect method
	            onRowSelect($(this).parent());
	            
	            // handling multiple clicks
				if($('#tempHTML').size()>0)
				 return;
	            
	            // drop down for  Scalar/Collection/Composite
				var tempHTML = "<select id=\"tempHTML\" ><option value=\"Scalar\" selected=\"selected\">Scalar</option><option value=\"Collection\">Collection</option><option value=\"Composite\">Composite</option></select>";
				// embed a drop down in row.
	            $(this).html(tempHTML);
				$('#tempHTML').focus();

	            // Save on focus out
				$('#tempHTML').focusout( function() {
					var newValue = $('#tempHTML').val();
	
	                // depending on type enable or disable + button
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
			 });
	
			/// <summary>
	        /// Double click handler for editing name of Field Tag 
	        /// </summary>
			$(".nameBasedEditor").click( function() {
	
				//Trigger onRowSelect method
	            onRowSelect($(this).parent());
	            
				// handling multiple clicks
				if($('#tempHTML').size()>0)
				 return;
				
				var currentValue = $(this).text();
				var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"12\"/>";
	
	            //embed a textbox in row
				$(this).html(tempHTML);
				$('#tempHTML').focus();
	
	            // save on focus out
				$('#tempHTML').focusout( function() {
	
					var newValue = $('#tempHTML').val();
					var oldValue = $('#tempHTML').parent().parent().attr("id");
	
	                // Check whether new name of already exists under current parent if yes then get a unique name
					newValue = checkDuplicateNames(newValue,$('#tempHTML').parent().parent().attr("childOf"));
					
					// updating childs on the basis of name
					//var selectorValue = 'tr[childOf="'+oldValue+'"]';
					//$(selectorValue).attr("childOf",newValue);
					// updating id
					//$('#tempHTML').parent().parent().removeAttr('id');
					//$('#tempHTML').parent().parent().attr("id",newValue);
					
	                $('#tempHTML').parent().text(newValue);
					$('#tempHTML').remove();
				});
			}
			);
	
		    /// <summary>
	        /// A generic double click handler for editing text based attributes of Field Tag 
	        /// </summary>
			$(".textBasedEditor").click( function() {
				
				//Trigger onRowSelect method
	            onRowSelect($(this).parent());
	            
				// handling multiple clicks
				if($('#tempHTML').size()>0)
				 return;
				 
				var currentValue = $(this).text();
				var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"12\"/>";
				$(this).html(tempHTML);
				$('#tempHTML').focus();
	
	            // save on focus out
				$('#tempHTML').focusout( function() {
	
					var newValue = $('#tempHTML').val();
	
					$('#tempHTML').parent().text(newValue);
					$('#tempHTML').remove();
	
				});
			}
			);
	
		    /// <summary>
	        /// A double click handler for editing Scalar/collection/composite type of Field Tag 
	        /// </summary>
			$(".typeBasedEditor").click( function() {
				
				//Trigger onRowSelect method
	            onRowSelect($(this).parent());
	            
				// handling multiple clicks
				if($('#tempHTML').size()>0)
				 return;
				 
				// order of columns should be preserved
				if($(this).prev().prev().text()!= "Scalar") 
	            {
	                // in case of scalar it should be a drop down
					var currentValue = $(this).text();
					var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"12\"/>";
	
	                // embed drop down
					$(this).html(tempHTML);
					$('#tempHTML').focus();
					
		            // add autosuggest by JQuery UI
					$('#tempHTML').autocomplete({
						source: repoMMDList,
						select: function(event, ui) {
							var newValue = $('#tempHTML').val();
							$('#tempHTML').parent().text(newValue);
							$('#tempHTML').remove();
						},
		                // to show all when textbox is blank
						minLength: 0,
					});
	
					$(".ui-autocomplete").css("font-size","12px");
				
	                // save on focus out
					$('#tempHTML').focusout( function() {
						var newValue = $('#tempHTML').val();
						$('#tempHTML').parent().text(newValue);
						$('#tempHTML').remove();
	
					});
				} 
	            else
	            {
	                // in case of collection or composite it should be a textbox
					var tempHTML = "<select id=\"tempHTML\" ><option value=\"String\" selected=\"selected\">String</option><option value=\"ParsedURL\">ParsedURL</option><option value=\"Int\">Int</option></select>";
	
	                // embed text box
					$(this).html(tempHTML);
					$('#tempHTML').focus();
					
	                // save on focus out
					$('#tempHTML').focusout( function() {
	
						var newValue = $('#tempHTML').val();
						$('#tempHTML').parent().text(newValue);
						$('#tempHTML').remove();
	
					});
				}
	
			}
			);
	
			/// <summary>
	        /// A Deletion handler (triggered on click event of X button) for deleting a Field Tag and all its descendents
	        /// </summary>
			$(delID).click( function () {
				
				//Trigger onRowSelect method
	            onRowSelect($(this).parent().parent());
	            
	            // confirm deletion
				var r = confirm("Are you sure you want to delete Field Tag with name : "+	$(this).parent().next().text());
	
				if (r==true) 
	            {
	
					var delTemp = $(this).parent().parent();
					var delref = delTemp;
					var marginReference = parseInt(delref.children("td").first().css("padding-left").substring(0, delref.children("td").first().css("padding-left").length - 2));
	
	                // check for existence of descendents.
					if(delTemp.next().attr("id")!="bottomAddButton" && marginReference < parseInt(delTemp.next().children("td").first().css("padding-left").substring(0, delTemp.next().children("td").first().css("padding-left").length - 2))) 
	                {
	                    // delete all its decendents. Identified by childOf and indent
						while(delTemp.next().attr("id")!="bottomAddButton" && marginReference < parseInt(delTemp.next().children("td").first().css("padding-left").substring(0, delTemp.next().children("td").first().css("padding-left").length - 2))) {
	
							delTemp = delTemp.next();
							delTemp.prev().remove();
						}
					}
	
	                // remove selected Field Tag
					delTemp.remove();
	
				}
			
			});
	
	
			/// <summary>
	        /// Custom attributes handler for manipulating custom attributes of a Field Tag
	        /// </summary>
	
			$(cusID).click( function () {
	
				//Trigger onRowSelect method
	            onRowSelect($(this).parent());
				
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
	
				/// Trying to capture position of cursor and position custom Attribute window at cursor.
				$(document).mousemove( function (e) {
					if(mutex) {
	                    // open custom attribute window
						$("#customAttributeBox").dialog("option", {
							position: [e.pageX, e.pageY-5]
						});
						mutex=0;
					}
				});
	
	            // loading custom attributes(if any) into custom attribute window 
	
	            // setting caller in custom attribute window
				$( "#customAttributeBox" ).attr("callerId",$(this).parent().attr("id"));
	
	            // get list of custom attributes in standard format
				var pastCustomAttributes = 	$(this).parent().attr("customAttrib");
	
	            // if not null
				if(pastCustomAttributes!="") 
	            {
					pastCustomAttributes = pastCustomAttributes.split(",");
	
	                // filling using ',' as delimiter
					for(var i=0; i<pastCustomAttributes.length ;i++) 
	                {
						var temp = pastCustomAttributes[i].split(":");
						customAttributeUI(temp[0],temp[1]);
					}
				}
			});
		}
	
	    
	    /// <summary>
	    /// Event handler for onclick event of bottom + bar. Adds a new Field Tag with name:newNode under root
	    /// </summary>
		$('#Add_node_button').click( function() {
			AddNode("newNode","");
		});
	
	    /// <summary>
	    /// Event handler for onclick event of validate button. Show results in a separate window
	    /// </summary>
		$('#val_button').click( function () {
	
	        // get number of results for input Xpath to be validated
			var result = xPath.validate($('#result').val());
			
			if(result > 0 ) 
			{
	
				//alert(" Number of results "+result);
				var inputPath = document.getElementById("result").value;
				var iterator = document.evaluate(inputPath , document , null, XPathResult.ANY_TYPE,null);
				var ind = 1;
				try {
					var resultValue="";
					var thisNode = iterator.iterateNext();
	
	                // Accumulate results in resultValue 
					while (thisNode) {
						resultValue += "-- Result : "+ ind + " -- <br/>" + thisNode.textContent +"<br/>" ;
						thisNode = iterator.iterateNext();
						ind++;
					}
	
	                // show results in windows box.
					$(".mmdMessage").html(resultValue);
					$(".mmdMessage").attr("title","Extracted value");
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
			else
			{
				alert("No results to display");
			}
		});
	
		/// <summary>
	    /// Reset MMD authoring tool by cleaning UI and global object
	    /// </summary>
		function   ResetTool()
		{
			 // if we have a success clear UI and global object
			 rootMMD = {} ;
	
			 // Cleaning complete UI
			 $("tr[childOf]").remove();
			 
			 // reseting minimum height of box
			 $(".xpathEvaluator").dialog( "option", "Height",240);
	
			// reset extends option
			extendsFrom = 'document';
		}
		
	
		$('#reset_button').click( function() {
		    // Reset tool
			ResetTool();
		});
		
		
	    /// <summary>
	    /// Event handler for onclick event of Load button.
	    /// </summary>
		$('#Load_button').click( function() {
			
			var srcURL = repoServiceURL ;
			var isParentDocument = true ;
	
			$(".mmdMessage").html('<div id="tempLoad">Source URL :&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" alt="Enter source url" id="srcURL" size="30"/><br/>Load as extend : &nbsp;&nbsp;&nbsp;<input type="checkbox" id="isExtented"  /></div>');
			$(".mmdMessage").attr("title","Load MMD");
			$( ".mmdMessage" ).dialog({
				modal: true,
				minWidth: 100,
				minHeight: 100,
			    resizable:false,
				buttons: {
					Ok: function() {
						
				    	 srcURL = srcURL + $("#srcURL").val();
				    	 isParentDocument  = $("#isExtented").attr('checked') ;
				    	 
						 $("#tempLoad").remove();
						
						  /// Service - Assumption - completed with a invalid json return "" field tag type
						  $.getJSON(srcURL, function(data) {
				
							// Reset tool
							ResetTool();
					
							// Update global object
							rootMMD = data["meta_metadata"];
		
							// loaded in extending mode
							if(isParentDocument)
								extendsFrom = rootMMD["name"];
							
							 // setting name in UI
							 $("#mmdName").val(rootMMD["name"]);
					
							 // Restoring url in UI
							 if(rootMMD["selector"]["url_path_tree"] != undefined)
								 $("#selectorURL").val(rootMMD["selector"]["url_path_tree"]);
					
					         // initiating object to ui procedure by calling for root
							 loadInUI(rootMMD["kids"],"");
						 
						 });
						 
						$( this ).dialog( "close" );
					}
				}
			});
			 
			
		});
	
	
	
	    /// <summary>
	    /// Event handler for onclick event of Generate button. Update rootMMD global object and shows generated mmd in JSON format in a separate window
	    /// </summary>
		$('#Generate_button').click( function() {
	        
	        // Updating values in rootMMD
	       
	       // Uncomment following line to reset
	       //rootMMD = {};
			var path = {};
			rootMMD["parser"] = "xpath";
			rootMMD["name"] = $("#mmdName").val();
			
			// Using global variable
			rootMMD["extends"] = extendsFrom;
			path["url_path_tree"] = $("#selectorURL").val();
			rootMMD["selector"] = path;
	
	        // initiating ui to object procedure by calling for root
			rootMMD["kids"] =  BuildMMD($("#mmdTable tr[childOf]"));
	
			// stringify results
			var tempResult = JSON.stringify(rootMMD) ; 
			
	        // show results in windows box.
			$(".mmdMessage").text( tempResult );
			$(".mmdMessage").attr("title","JSON MMD");
			$( ".mmdMessage" ).dialog({
				modal: true,
				minWidth: 700,
				minHeight: 500,
				maxWidth: 700,
				buttons: {
					Ok: function() {
						$( this ).dialog( "close" );
					},
					'Save':function() {
						
						/// SERVICE ASSUMPTION resturn a json as result with 2 fields success - true/false and message
						$.post("URL to save JSON", tempResult ,  function(data) {
							
						     if(data['success']=='false')
						     {
						     	alert("Save " + data['message']);
						     }
						     else
						     {
						     	alert("Save " + data['message']);
						     }
						          	     
					   });
											
						$( this ).dialog( "close" );
					}
				}
			});
	
		});
	
	
	    /// <summary>
	    /// Event handler for keyup event of result testbox. To validate and select appropriate section in page.
	    /// </summary>
		$('#result').keyup( function() {
			xPathValidation();
			elementInspector.cleanUpElem();
		});
	
	    /// <summary>
	    /// Event handler for onlcik event of cancel button. To cancel current selection in page.
	    /// </summary>
		$('#cancel_button').click( function() {
			elementInspector.cleanUpElem();
		});
	
	    // initializing inspector object
		elementInspector.init(document);
	
		elementInspector.onselectstart = function(node) {
			$('#result').val(xPath.generate(node, document));
			xPathValidation();
		}
	
		elementInspector.oncancel = function(node) {
	
		}
	
		elementInspector.onchange = function(node) {
	
		}
	
	    /// JQuery UI dialogue definition for xpathEvaluator which is main dialogue box that contains everything in UI.
		$( ".xpathEvaluator" ).dialog({
			minHeight: 240,
			minWidth: 650,
			closeOnEscape: false,
			dialogClass: 'main_formatting'
		});
	            
	    /// <summary>
	    /// This checks whether a Field Tag with passed name already exists under passed ID 
	    /// </summary>
	    /// <param name="name">Name of current Field Tag to be checked </param>
	    /// <param name="parent">Id of parent</param>
	    /// <returns>true/false</returns>
		function checkDuplicateNames(name, parent) {
	
		   var tempTable = new Array();
		    
			// fill tempTable for all existing names
			$("#mmdTable tr").filter("tr[childof="+parent+"]").each(function(index) {
			    tempTable[$(this).children().first().next().text()] = true;
			  });
				
			
			var count = 1;
			var temp = name;

			while(tempTable[temp])
			{
				temp = name + count;
				count++;
			}

			return  temp;
		}
	
	
	    /// <summary>
	    /// This method add a row in custom attribute window
	    /// </summary>
	    /// <param name="attrName">Attribute name(required)</param>
	    /// <param name="attrValue">Attribute value</param>
	
		function customAttributeUI(attrName,attrValue) {
	        
	        // Timestamp is used as identifier
			var d = new Date();
			var crosstemp = "customCrossButton"+ d.getTime();
			var autoId = "auto"+ d.getTime();
	
	        // Append row in window
			$( "#customAttributeTable" ).append('<tr class="customTemp" ><td > <span  class="crossImage" id="'+crosstemp+'" > &nbsp;&nbsp;&nbsp;  </span></td><td id="'+autoId+'" >'+attrName+'</td><td class="valueBasedEditor" >'+attrValue+'</td></tr>');
	
			crosstemp = "#" +crosstemp;
			autoId = "#" + autoId;
		
	        /// <summary>
	        /// Event handler for onclick event of deletion (X) button.
	        /// </summary>
			$(crosstemp).click( function() {
				$(this).parent().parent().remove();
			});
	
	        /// <summary>
	        /// Event handler for double click event for editing name of attribute.        
	        /// </summary>
			$(autoId).click( function() {
	
				// handling multiple clicks
				if($('#tempHTML').size()>0)
				 return;
				 
				var currentValue = $(this).text();
				var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"14\"/>";
	
	            // embed textbox
				$(this).html(tempHTML);
				$('#tempHTML').focus();
	
	            // add autosuggest by JQuery UI
				$('#tempHTML').autocomplete({
					source: customAttributeData,
					select: function(event, ui) {
						var newValue = $('#tempHTML').val();
						$('#tempHTML').parent().text(newValue);
						$('#tempHTML').remove();
					},
	                // to show all when textbox is blank
					minLength: 0,
				});
	
				$(".ui-autocomplete").css("font-size","12px");
	
	            // focus out event to save attribute name
				$('#tempHTML').focusout( function() {
					var newValue = $('#tempHTML').val();
					$('#tempHTML').parent().text(newValue);
					$('#tempHTML').remove();
	
				});
			}
			);
	
	
	        /// <summary>
	        /// Event handler for double click event for editing value of attribute.        
	        /// </summary>
			$(".valueBasedEditor").click( function() {
	
				// handling multiple clicks
				if($('#tempHTML').size()>0)
				 return;
				 
				var currentValue = $(this).text();
				var tempHTML = "<input type=\"text\" id=\"tempHTML\" value=\""+currentValue+"\" size=\"14\"/>";
				
	            // embed textbox
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
	
	    /// JQuery UI dialogue definition for customAttributeBox which is dialogue box that contains attribute name-value pairs of all Field Tags in UI.
		$( "#customAttributeBox" ).dialog({
			autoOpen: false,
			height: 400,
			minWidth: 300,
			maxWidth: 300,
			modal: true,
			closeOnEscape: false,
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
	                
	                // save custom attributes to caller Field Tag
					var current = $("#customAttributeTable").find("tr.customTemp");
					var customAttribCount = current.size();
					var temp = "";
	
	                // create custom attributes in standard format
					while(customAttribCount) {
						if(temp!="") {
							temp = temp + "," ;
						}
						temp = temp  + current.children().next().html() + ":" + current.children().next().next().html();
						customAttribCount--;
						current = current.next();
					}
	
					var identifyCaller =  "#" + $("#customAttributeBox").attr("callerId");
					
	                // save attributes
	                $(identifyCaller).attr("customAttrib",temp);
	
	
					if( temp != "" )
	                {
	                   // restore custom attribute button if that field tag has no attribute name-value pairs
						$(identifyCaller).children().last().removeClass('customAttribute');
						$(identifyCaller).children().last().addClass('customAttributeChanged');
	
					}
	                else 
	                {
	                    // change custom attribute button if that field tag has some attribute name-value pairs
						$(identifyCaller).children().last().addClass('customAttribute');
						$(identifyCaller).children().last().removeClass('customAttributeChanged');
					}
	
					$(this).dialog("close");
	
				}
			}
			],
			close: function() {
	            // restore css
				$(".ui-widget-overlay").css("opacity","0.7");
				$(".customTemp").remove();
			}
		});
	
	});


});