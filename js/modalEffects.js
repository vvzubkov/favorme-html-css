/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' )),
				close = modal.querySelectorAll( '.md-close' );
			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );
				$('body').css({overflow:'auto'});
				$(modal).css(
					{
						top:'0',
						width:'0',
						height:'0',
						left:'0'
					});
				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) );
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				$('body').css({overflow:'hidden'});
				$(modal)
					.css(
					{
						top:window.pageYOffset,
						width:window.innerWidth,
						height:window.innerHeight,
						left:'auto'
					});

				overlay.removeEventListener( 'click', removeModalHandler );
 				overlay.addEventListener( 'click', removeModalHandler );

				$(modal).on( 'click', function(e){
					e.preventDefault();
					if ($(e.target).attr('class') == $(modal).attr('class')) removeModalHandler();
				});

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			for (var i = 0; i < close.length; i++) {
				close[i].addEventListener( 'click', function( ev ) {
					ev.stopPropagation();
					removeModalHandler();
				});
			}
		} );

	}

	init();

})();