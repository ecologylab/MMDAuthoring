	$(document).ready( function () {

				$('#val_button').click( function () {

					var result = xPath.validate($('#xpath').val());

					if(result != 0 ) {

						alert(" Number of results "+result);
						var inputPath = document.getElementById("xpath").value;
						var iterator = document.evaluate(inputPath , document , null, XPathResult.ANY_TYPE,null);

						try {
							var ind=1;
							var thisNode = iterator.iterateNext();
							while (thisNode) {
								alert( "-- Result : "+ ind + " -- \n\n" + thisNode.textContent );
								thisNode = iterator.iterateNext();
								ind++;
							}
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
				
				window.onload = function() {
	


					$('body').mousemove(function(event) {
						floatingd = document.getElementById("xpathEvaluator");
						if(drag==1) {
		
							floatingd.style.left = event.clientX-xdif+"px";
							floatingd.style.top = event.clientY-ydif+"px";;
		
						}
		
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
					
					
					$('body').prepend('<div id=\'xpathEvaluator\'><div id="xpathEvaluatordivhead" onclick="begindrag(event)">	xPath</div><span id=\'xpathFields\'>	Enter XPath for validation here:&nbsp;			<br/><input type="text" id="xpath" name="xpath" size="80"/>	<input type="button" value="Validate" id="val_button"/>	<br/>		Generated XPath<br/>	<input type="text" id="result" value="" size="80"/>	<label>		</label>		<br/>	<input type="button" id="cancel_button" value="Cancel" /><br/>	</span>	</div>	');

				}
			});
			var drag=0;
			var xdif=0;
			var ydif=0;
			var initx="50px";
			var inity="50px";

			function begindrag(event) {
				if(drag==0) {
					floatingd = document.getElementById("xpathEvaluator");

					if(floatingd.style.left=="") {
						floatingd.style.left=initx;

					}

					if(floatingd.style.top=="") {
						floatingd.style.top=inity;
					}

					prex=floatingd.style.left.replace(/px/,"");
					prey=floatingd.style.top.replace(/px/,"");

					drag=1;

					xdif=event.clientX-prex;
					ydif=event.clientY-prey;

				} else {
					drag=0;

				}

			}
