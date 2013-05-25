$(function() {
		$('#submit').click( function(e) {
		    e.preventDefault();

		    if ($('#email').val()==""){
			   alert ('Please enter an email')
			   return false;
		    }

		    $.ajax({
		        url: 'http://www.jmcdesignstudios.com/ClickFil/process_form.php',
		        type: 'post',
		        data: $('form').serialize(),
		        success: function(data) {
		                   alert(data)
		                 }
		    });
		});
});



