$(function() {
  emailjs.init('6Ndrh18z39wQGfH17');  // Initialize EmailJS with your User ID

  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
     preventSubmit: true,
     submitSuccess: function($form, event) {
        event.preventDefault(); // Prevent default submit behaviour

        // Get form data
        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();

        // EmailJS parameters
        var templateParams = {
           from_name: name,
           from_email: email,
           phone: phone,
           message: message
        };

        // Send email using EmailJS
        emailjs.send('service_596fdf8', 'template_qpcjhvo', templateParams)
           .then(function(response) {
              // Success message
              $('#success').html("<div class='alert alert-success'>");
              $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                 .append("</button>");
              $('#success > .alert-success')
                 .append("<strong>Your message has been sent. </strong>");
              $('#success > .alert-success')
                 .append('</div>');
              // Clear all fields
              $('#contactForm').trigger("reset");
           }, function(error) {
              // Fail message
              $('#success').html("<div class='alert alert-danger'>");
              $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                 .append("</button>");
              $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!</strong>");
              $('#success > .alert-danger').append('</div>');
              // Clear all fields
              $('#contactForm').trigger("reset");
           });
     },
     filter: function() {
        return $(this).is(":visible");
     },
  });
});
