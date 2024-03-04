$("#contact-form").submit((e)=>{
    e.preventDefault()

    let isValid = true;
    
    $("#contact-form input[type='text'], #contact-form input[type='email'], #contact-form textarea").each(function(){
        if($(this).val() === '') {
            $(this).next('.input-error').fadeIn();
            isValid = false;
        }
        else{
            $(this).next('.input-error').fadeOut();
        }
    });

    if(!isValid){
        return false
    }
    
    $('#form-submit-btn').val("Sending...");
    $('#form-submit-btn').prop("disabled", true);

    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbws7Z_w8493oa6bSLC-y5FFG2tAXCrij1l0NykFIbGx5dw3e_GoSSGx9SHmncaJYNroJw/exec",
        data:$("#contact-form").serialize(),
        method:"post",
        success:function (response){
            $('#form-submit-btn').val("Sending Succesful");
            
            setTimeout(() => {
                $("#contact-form")[0].reset();
                $('#form-submit-btn').val("Send Message");
                $('#form-submit-btn').prop("disabled", false);
            }, 3000);
        },
        error:function (err){
            $('#form-submit-btn').val("Please Try Again");
            setTimeout(() => {
                $('#form-submit-btn').val("Send Message");
                $('#form-submit-btn').prop("disabled", false);
            }, 3000);
        }
    });
})

