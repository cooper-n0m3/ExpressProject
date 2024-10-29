$(document).ready(function () {
    $('.eye-show').click(()=> { 
        $('.eye-hidden').show()
        ('.eye-show').hide()
        $('.password').attr('type', 'text');
    });
    $('.eye-hidden').click(()=>{
        $('.eye-show').show();
        $('.eye-hidden').hide()
    })
});