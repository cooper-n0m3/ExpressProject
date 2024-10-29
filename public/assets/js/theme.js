jQuery('document').ready(function(){
    jQuery('.admin li.parent').click(function(){
        $(this).find('.child').slideToggle();
        $(this).find('img').toggleClass('rotate');
    });
    // @tiny
    tinymce.init({
      selector: 'textarea',
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
    });
    // @scrollbar .bottom
    $('.bottom').on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(this)[0].scrollHeight;
        var clientHeight = $(this)[0].clientHeight;
        var scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        $('.scroll-bar').css('width', scrollPercentage + '%');
    });

    /*@Delete product*/
    deleteProduct =(id)=>{
      if(confirm('Do you want to delte this?')){
        $.ajax({
          type: "GET",
          url: `/Admin/delete/${id}`,
          dataType: "json",
          success: function (response) {
            if(response.status==200){
              location.reload();
            }
          }
        });
      }
    }
});
