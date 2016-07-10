// Custom fileinputs
// http://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
(function() {
	var inputs = document.querySelectorAll( '.fileinput input' );
	Array.prototype.forEach.call( inputs, function( input ) {
		var label	 = input.nextElementSibling;
		var labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e ) {
			var fileName = '';
			if( this.files && this.files.length > 1 ) {
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '{count} files selected' ).replace( '{count}', this.files.length );
			} else {
				fileName = e.target.value.split( '\\' ).pop();
			}

			if( fileName ) {
				label.innerHTML = fileName;
			} else {
				label.innerHTML = labelVal;
			}
		});
	});
}());
