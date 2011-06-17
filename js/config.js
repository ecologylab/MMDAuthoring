/**
 * A linked list implementation in JavaScript.
 */
function LinkedList() {

	/**
	 * The number of items in the list.
	 * @property _length
	 * @type int
	 * @private
	 */
	this._length = 0;

	/**
	 * Pointer to first item in the list.
	 * @property _head
	 * @type Object
	 * @private
	 */
	this._head = null;
}

LinkedList.prototype = {

	//restore constructor
	constructor: LinkedList,

	/**
	 * Appends some data to the end of the list. This method traverses
	 * the existing list and places the value at the end in a new item.
	 * @param {variant} data The data to add to the list.
	 * @return {Void}
	 * @method add
	 */
	add: function (node) {
		
		//create a new item object, place data in

		var current;

		//special case: no items in the list yet
		if (this._head === null) {
			this._head = node;
		} else {
			current = this._head;

			while(current.next) {
				current = current.next;
			}

			current.next = node;
		}

		//don't forget to update the count
		this._length++;

	},
	/**
	 * Retrieves the data in the given position in the list.
	 * @param {int} index The zero-based index of the item whose value
	 * should be returned.
	 * @return {variant} The value in the "data" portion of the given item
	 * or null if the item doesn't exist.
	 * @method item
	 */
	item: function(index) {

		//check for out-of-bounds values
		if (index > -1 && index < this._length) {
			var current = this._head,
			i = 0;

			while(i++ < index) {
				current = current.next;
			}

			return current;
		} else {
			return null;
		}
	},
	/**
	 * Retrieves the index in the list.
	 * @param {node)
	 * @return {int} The index of a node
	 * @method item
	 */
	search: function(node) {

		var current = this._head;
		var i=0;
		while(i<this.length) {
			if(current.getName()==node.getName()) {
				return i;
			}
			i++;
			current = current.next;
		}
		return -1;
	},
	/**
	 * Retrieves the index in the list.
	 * @param {node)
	 * @return {boolean} present or not
	 * @method item
	 */
	searchInDepth: function(node) {
		
		var current = this._head;
		while(current) {
			if(current.getName()==node.getName()) {
				return true;
			}
			if(current instanceof Collection)
			{
				var child_node=current.getChildList();
				if(child_node.searchInDepth(node))
				{
					return true;
				}	
			}
			current = current.next;
		}
		return false;
	},
	/**
	 * Removes the item from the given location in the list.
	 * @param {int} index The zero-based index of the item to remove.
	 * @return {variant} The data in the given position in the list or null if
	 * the item doesn't exist.
	 * @method remove
	 */
	remove: function(index) {

		//check for out-of-bounds values
		if (index > -1 && index < this._length) {

			var current = this._head,
			previous,
			i = 0;

			//special case: removing first item
			if (index === 0) {
				this._head = current.next;
			} else {

				//find the right location
				while(i++ < index) {
					previous = current;
					current = current.next;
				}

				//skip over the item to remove
				previous.next = current.next;
			}

			//decrement the length
			this._length--;

			//return the value
			return current;

		} else {
			return null;
		}

	},
	/**
	 * Returns the number of items in the list.
	 * @return {int} The number of items in the list.
	 * @method size
	 */
	size: function() {
		return this._length;
	},
	/**
	 * Converts the list into an array.
	 * @return {Array} An array containing all of the data in the list.
	 * @method toArray
	 */
	toArray: function() {
		var result = [],
		current = this._head;

		while(current) {
			result.push(current.data);
			current = current.next;
		}

		return result;
	},
	/**
	 * Converts the list into an XML strings.
	 */
	toXMLString: function() {
		var current = this._head;
		var str ="";
		while(current) {
			str += current.toXMLString();
			current = current.next;
		}

		return str;
	},
	/**
	 * Converts the list into a string representation.
	 * @return {String} A string representation of the list.
	 * @method toString
	 */
	toString: function() {
		return this.toArray().toString();
	}
};

/*
 * Generic field tags implementation
 * Will be inherited by scalar, collection and composite
 *
 */

function FieldTag(name,type,xpath,comment) {
	this.setName(name);
	this.setType(type);
	this.setXpath(comment);
	this.setComment(xpath);
}

FieldTag.prototype.setName = function (value) {
	this.name = value;
	return this;
}
FieldTag.prototype.getName = function () {
	return this.name;
}
FieldTag.prototype.setType = function (value) {
	this.type = value;
	return this;
}
FieldTag.prototype.getType = function () {
	return this.type;
}
FieldTag.prototype.setXpath = function (value) {
	this.xpath = value;
	return this;
}
FieldTag.prototype.getXpath = function () {
	return this.xpath;
}
FieldTag.prototype.setComment = function (value) {
	this.comment = value;
	return this;
}
FieldTag.prototype.getComment = function () {
	return this.comment;
}

/*
 * Scalar class inherited from FieldTag
 *
 */

function Scalar(name,type,xpath,comment) {
	this.setName(name);
	this.setType(type);
	this.setXpath(xpath);
	this.setComment(comment);
}

Scalar.prototype = new FieldTag();

Scalar.prototype.toXMLString = function () {
	return "<scalar name=\""+this.getName()+"\" xpath=\""+this.getXpath()+"\" comment=\""+ this.getComment()+"\" scalar_type=\""+this.getType()+"\"/>";
}
/*
 * Collection class inherited from FieldTag
 * with child member additional
 *
 */
function Collection(name,type,xpath,comment) {
	this.setName(name);
	this.setType(type);
	this.setXpath(xpath);
	this.setComment(comment);
	this.setChildList(new LinkedList());
}

Collection.prototype = new FieldTag();

Collection.prototype.setChildList = function (value) {
	this.childList = value;
	return this;
}
Collection.prototype.getChildList = function () {
	return this.childList;
}
Collection.prototype.toXMLString = function () {
	var returnValue= "<collection name=\""+this.getName()+"\" xpath=\""+this.getXpath()+"\" comment=\""+ this.getComment()+"\" collection_child_type=\""+this.getType()+"\">";
	var childs=	this.getChildList();
	returnValue += childs.toXMLString();
	returnValue +="</collection>";
	return returnValue;
}

/*
 * 
 * Composite class
 */


function Composite(name,type,xpath,comment) {
	this.setName(name);
	this.setType(type);
	this.setXpath(xpath);
	this.setComment(comment);
	this.setChildList(new LinkedList());
}

Composite.prototype = new FieldTag();

Composite.prototype.setChildList = function (value) {
	this.childList = value;
	return this;
}
Composite.prototype.getChildList = function () {
	return this.childList;
}
Composite.prototype.toXMLString = function () {
	var returnValue= "<composite name=\""+this.getName()+"\" xpath=\""+this.getXpath()+"\" comment=\""+ this.getComment()+"\" collection_child_type=\""+this.getType()+"\">";
	var childs=	this.getChildList();
	returnValue += childs.toXMLString();
	returnValue +="</composite>";
	return returnValue;
}


/*
 * Onload procedures
 *
 */
$(document).ready( function () {

	$('body').prepend(' <div id="creation-form" title="Create new node"> <p class="validateTips"> All form fields are required. </p> <form> <fieldset> <label for="name"> Name </label><br/> <input type="text" name="name" id="name" class="text ui-widget-content ui-corner-all" /> <label for="xpath"> Xpath </label><br/> <input type="text" name="xpath" id="xpath" value="" class="text ui-widget-content ui-corner-all" /> <label for="comment"> comment </label><br/> <input type="test" name="comment" id="comment" value="" class="text ui-widget-content ui-corner-all" /> <label for="type" id="toChange_type"> Type </label><br/> <input type="text" name="type" id="type" value="" class="text ui-widget-content ui-corner-all" /> </fieldset> </form> </div> <div id="type-form" title="Select Field type" > <form> <fieldset align="center"><select name="field_type" id="field_type"> <option value="Scalar" selected="selected">Scalar</option> <option value="Collection">Collection</option> <option value="Composite">Composite</option> </select> </fieldset> </form> </div> <div class="mmdMessage"> </div> <div class="xpathEvaluator" title="MMD Creator"> <span id="xpathFields"> Enter XPath for validation here:&nbsp; <br/> <input type="text" id="xpath" name="xpath" size="50"/> <input type="button" value="Validate" id="val_button"/> <br/> Generated XPath <br/> <input type="text" id="result" value="" size="50"/> <label> </label> <br/> <input type="button" id="cancel_button" value="Cancel" /> </span> <br/> <span id="mmdTree"> <b style="font-size: 13px">MMD Tags</b> <br/><table width="100%%" border="0" cellpadding="1" ><tr align="center"> <td> <input type="button" id="Add_node_button" value="Add" /> </td> <td> <input type="button" id="Delete_node_button" value="Delete" /> </td> <td> <input type="button" id="Edit_node_button" value="Edit" /> </td> <td> <input type="button" id="Generate_button" value="Generate" /> </td> </tr> </table> <br /> <table id="mmdTable" width="100%" class="ui-widget ui-widget-content"> <thead> <tr class="ui-widget-header "> <th>Name</th> <th>Type</th> <th>Hierarchy</th> </tr> </thead> </table> </span> </div> ');
	rootList = new LinkedList();

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
					minHeight: 300,
					minWidth: 300,
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
	$('#Add_node_button').button()
	.click( function() {
		$( "#type-form" ).dialog( "open" );
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

	$( "#Generate_button" ).click(function(){
		alert(rootList.toXMLString());
	});
	
	function checkDuplicateNames(name) {

		/* 
		 if($("#mmdTable #"+name).size() >0) {
			alert("Name already used");
			$("#field_type").addClass( "ui-state-error" );
			return false;
		}
		*/
		
		if(rootList.searchInDepth(new FieldTag(name,'','','')))
		{
			alert("Name already used");
			$("#field_type").addClass( "ui-state-error" );
			return false;
		}
		return  true;
	}

	$( "#type-form" ).dialog({
		autoOpen: false,
		height: 210,
		width: 250,
		modal: true,
		buttons: {
			OK: function() {

				$("#creation-form #name").val("");
				$("#creation-form #type").val("");
				$("#creation-form #comment").val("");
				$("#creation-form #xpath").val($("#result").val());
				$("#creation-form").attr("title",$("#field_type").val());
				if($("#field_type").val()=="Scalar")
				$("#toChange_type").html("Scalar Type");
				if($("#field_type").val()=="Collection")
				$("#toChange_type").html("Child Type");
				$("#creation-form" ).dialog( "open" );
				$(this ).dialog( "close" );

			}
		},
		close: function() {

		}
	});

	// For addition form

	$( "#creation-form" ).dialog({
		autoOpen: false,
		width: 300,
		maxWidth: 300,
		modal: true,
		buttons: {
			"Add Tag": function() {

				$("#creation-form #name").removeClass( "ui-state-error" );

				if ( checkDuplicateNames($("#creation-form #name").val()) ) {
					$( "#mmdTable" ).append( "<tr id=\""+$("#creation-form #name").val()+"\">" +
					"<td>" + $("#creation-form #name").val() + "</td>" +
					"<td>" + $("#creation-form").attr("title") + "</td>" +
					"<td>" + "--" + "</td>" +
					"</tr>" );

					if($("#creation-form").attr("title")=="Scalar")
						rootList.add(new Scalar($("#creation-form #name").val(),$("#creation-form #type").val(),$("#creation-form #xpath").val(),$("#creation-form #comment").val()));
					else if ($("#creation-form").attr("title")=="Collection")
						rootList.add(new Collection($("#creation-form #name").val(),$("#creation-form #type").val(),$("#creation-form #xpath").val(),$("#creation-form #comment").val()));
					else
						rootList.add(new Composite($("#creation-form #name").val(),$("#creation-form #type").val(),$("#creation-form #xpath").val(),$("#creation-form #comment").val()));
				
					$( this ).dialog( "close" );
				}
			}
		},
		close: function() {

		}
	});
});