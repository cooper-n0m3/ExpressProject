$(document).ready(function(){
    $('body').on('click','.page-link',function(){
        $('.page-link').removeClass('active');
        $(this).addClass('active');
    })
})