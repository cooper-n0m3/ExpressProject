$(document).ready(function(){
        const viewPost=()=>{
            $.ajax({
                url     : 'view-post.php',
                cache   : false,
                success : function(response){
                     $('#view-post').click(function(){
                          $('.content-right').html(`${response}`);
                          fetchPost();
                     });
                }
           });
        }
        viewPost();
       
        const addPost=()=>{
            $.ajax({
                url     : 'add-post.php',
                cache   : false,
                success : function(response){
                     $('#add-post').click(function(){
                          $('.content-right').html(`${response}`);
                     });
                }
           });
            
        }
        addPost();
        
        
        // after html
        btn_cancel=()=>{
            $('body').on('click','#add-post_cancel',function(){
                $('#view-post').click();
            });
            $('body').on('click','#update-logo_cancel',function(){
                $('#view-logo').click();
            });
        }
        btn_cancel();

        // btn_submit
       
    //   get Data from post
    fetchPost=()=>{
        $.ajax({
            url:'fetchPost.php',
            method: 'POST',
            cache :false,
            contentType:false,
            processData:false,
            success:function(res){
                html = '';
                $.each(res, function (key, keyValue){
                    html += `
                    <tr>
                       <td>${keyValue['title']}</td>
                       <td>${keyValue['news_type']}</td>
                       <td>${keyValue['categories']}</td>
                       <td><img width="100px" src="assets/thumb/${keyValue['thumbnail']}"></td>
                       <td class="fst-italic">${keyValue['date']}</td>
                       <td width="150px">
                           <a href=""class="btn btn-primary">Update</a>
                           <button type="button" remove-id="1" class="btn btn-danger btn-remove" data-bs-toggle="modal" data-bs-target="#exampleModal">
                               Remove
                           </button>
                       </td>
                   </tr>
                            `;
                        });
                        $('#postTbody').html(html);
              
            }
        });
    }
});

