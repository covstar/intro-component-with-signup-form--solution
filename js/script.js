$(document).ready(function(){
    $('#submitBtn').click(function(){

        // setting variables
        let firstName = $("#first-name").val();
        let lastName = $("#last-name").val();
        let email = $("#email").val();
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let password = $("#password").val();

        // conditional statements on email
         if (!filter.test(email)) {
             $('.email-error').html("Looks like this is not an email");
             $('.error3').show();
             $('#email').css("border", "1px solid hsl(0, 100%, 74%)");
             $('input').css("color", "hsl(0, 100%, 74%)");
         }
         else {
            $('.email-error').html("");
            $('.error3').hide();
         }

        //  conditional statements on first name
        if (firstName == ""){
            $(".first-name-error").html("First Name cannot be empty");
            $(".error1").show();
            $('#first-name').css("border", "1px solid hsl(0, 100%, 74%)");
            
        }
        else {
            $('.first-name-error').html("");
            $('.error1').hide();
        }

        
        // conditional statements on last name
        if (lastName == "") {
            $(".last-name-error").html("Last Name cannot be empty");
            $(".error2").show();
            $('#last-name').css("border", "1px solid hsl(0, 100%, 74%)");
            
        }
        else {
            $('.last-name-error').html("");
            $('.error2').hide();
        }

        // conditional statements on psssword
        if (password == "") {
            $('.password-error').html("Password cannot be empty");
            $('.error4').show();
            $('#password').css("border", "1px solid hsl(0, 100%, 74%)");
            return false;
        }
        else {
            $('.password-error').html("");
            $('.error4').hide();
        }
        
    })
})