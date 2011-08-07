///<summary>
/// Validates XPath in #result textbox and update label. 
///</summary>
function xPathValidation() {
	xPathResult = xPath.validate($('#result').val(), document);
	if (xPathResult == -1) {
		$('#result').next().text('Incorrect xPath');
	} else {
		$('#result').next().text('Found elements: ' + xPathResult);
	}
}

/// Current XPath selected element 
var elementInspector = {
	currentElem : '',
	notSelector : ':not(html, head, body, br, tr, tbody, script, #iframe_id, #inspectorControlsID,  #inspectorControlsID *)',
	controlsHTML : ''+
	'<div class="inspectorControls" id="inspectorControlsID">' +
	'<label id="inspectorTagNameID">&nbsp;</label>' +
	'<div>Up</div>' +
	'<div>Down</div>' +
	'<div>Prev</div>' +
	'<div>Next</div>' +
	'<div>Cancel</div>' +
	'</div>',
	overlayHTML : '<div class="markOverlay" id="inspectorOverlayID"></div>',
	currentDoc : '',
	marked : false,
	onselectstart  : function (node) {
	},
	oncancel : function (node) {
	},
	onchange : function (node) {
	},
	init : function(doc) {
		_this = this;
		_this.currentDoc = doc;
		$(this.notSelector, _this.currentDoc).each( function() {
			$(this).mousedown( function(event) {
				event.stopPropagation();
				switch (event.which) {
					case 3:
						if (_this.currentElem != '') {
							_this.marked = true;
						}
						_this.currentElem = $(this);
						_this.selectstart();
						_this.markElem(_this.currentElem);
						break;
					default:
						break;
				}
			});
		});
		$('body:first', _this.currentDoc).prepend(_this.controlsHTML);
		$('body:first', _this.currentDoc).prepend(_this.overlayHTML);
		$('#inspectorOverlayID', _this.currentDoc).click( function() {
			_this.cleanUpElem(_this.currentElem);
		});
		$('#inspectorControlsID div', _this.currentDoc).click( function() {
			_this.traversing($(this).html());
		});

        // uncomment to disbale right click menu
		//disable context menu
		/*    _this.currentDoc.body.oncontextmenu = function() {
		 return false;
		 }
		 */
	},
	markElem : function(elem) {
		this.showControls(elem);
	},
	cleanUpElem : function(elem) {
		if (typeof(elem) == 'undefined') {
			if (_this.currentElem == '') {
				return false;
			}
			elem = _this.currentElem;
		}
		elem.removeClass('markedElement');
		$('#inspectorControlsID', _this.currentDoc).css('display' , 'none');
		$('#inspectorOverlayID', _this.currentDoc).css('display' , 'none');
		_this.marked = false;
	},
	showControls : function(elem) {
		this.checkNeighbours();
		elemOffset = elem.offset();

		width_add = 0;
		if (typeof(elem.css('padding-left')) != 'undefined') {
			width_add += _this.removePX(elem.css('padding-left'));
		}

		if (typeof(elem.css('padding-right')) != 'undefined') {
			width_add += _this.removePX(elem.css('padding-right'));
		}

		if (typeof(elem.css('border')) != 'undefined') {
			width_add += _this.removePX(elem.css('border')) * 2;
		}

		height_add = 0;
		offsetY_add = 0;
		if (typeof(elem.css('padding-top')) != 'undefined') {
			height_add += _this.removePX(elem.css('padding-top'));
		}

		if (typeof(elem.css('padding-bottom')) != 'undefined') {
			height_add += _this.removePX(elem.css('padding-bottom'));
		}

		if (typeof(elem.css('border')) != 'undefined') {
			height_add += _this.removePX(elem.css('border')) * 2;
		}

		if (elemOffset.top < 25) {
			$('#inspectorControlsID', _this.currentDoc).css({
				'top' : elemOffset.top + elem.height() + offsetY_add,
				'left': elemOffset.left
			});
		} else {
			$('#inspectorControlsID', _this.currentDoc).css({
				'top' : elemOffset.top - 27 + offsetY_add,
				'left' : elemOffset.left
			});
		}

		$('#inspectorOverlayID', _this.currentDoc).css({
			'top' : elemOffset.top + offsetY_add,
			'left' : elemOffset.left,
			'width' : elem.width() + width_add,
			'height' : elem.height() + height_add
		});

		tagName_add = '';
		if (elem.attr('id')) {
			tagName_add = '#' + elem.attr('id');
		} else if (elem.attr('class')) {
			indx = elem.attr('class').indexOf(' ');
			if (indx != -1) {
				tagName_add = '.' + elem.attr('class').substr(0, indx);
			} else {
				tagName_add = '.' + elem.attr('class');
			}
		}
		$('#inspectorTagNameID', _this.currentDoc).html(elem.get(0).tagName.toLowerCase() + tagName_add);

		if (_this.marked) {
			_this.change();
		}

		$('#inspectorControlsID', _this.currentDoc).css('display' , 'block');
		$('#inspectorOverlayID', _this.currentDoc).css('display' , 'block');
	},
	removePX : function(str) {
		if (str == null) {
			return 0;
		}
		if (str.indexOf('px') != -1) {
			return parseInt(str.substr(0, str.length-2));
		} else {
			return str;
		}
	},
	traversing : function(direction) {
		_this.marked = true;
		current = _this.currentElem;
		switch(direction) {
			case 'Up':
				element = current.parents(_this.notSelector + ':first');
				break;
			case 'Down':
				element = current.find(_this.notSelector + ':first');
				break;
			case 'Prev':
				element = current.prev(_this.notSelector + ':first');
				break;
			case 'Next':
				element = current.next(_this.notSelector + ':first');
				break;
			case 'Cancel':
				_this.cleanUpElem(_this.currentElem);
				_this.currentElem = '';
				_this.cancel();
				return;
		}

		this.currentElem = element;
		this.markElem(this.currentElem);

		// updating xpath results while navigating
		$('#result').val(xPath.generate(this.currentElem, document));
		xPathValidation();

	},
	checkNeighbours : function() {
		current = _this.currentElem;
		$("#inspectorControlsID div", _this.currentDoc).each( function() {
			direction = $(this).html();
			count = 1;
			switch(direction) {
				case 'Up':
					count = current.parents(_this.notSelector).length;
					break;
				case 'Down':
					count = current.children(_this.notSelector).length;
					break;
				case 'Prev':
					count = current.prev(_this.notSelector).length;
					break;
				case 'Next':
					count = current.next(_this.notSelector).length;
					break;
			}
			if (count) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	},
	selectstart : function () {
		this.onselectstart(_this.currentElem);
	},
	cancel : function () {
		this.oncancel(_this.currentElem);
	},
	change : function () {
		this.onchange(_this.currentElem);
	}
}