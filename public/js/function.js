$(document).ready(function(){
    $('#store_name').val('');
    $('#image-click').click(function(){
        $('#file_image').click();

    });
    image_change=()=>{
        $('#file_image').change(function(){
            const form = $('form#frm');
            const form_Data = new FormData(form[0]);
            $.ajax({
                url : './functions/save_image.php',
                method: 'POST',
                data: form_Data,
                cache :false,
                contentType:false,
                processData:false,
                beforeSend:function(){
                },
                success:function(res){
                    $('#store_name').val(res);
                    $('#image-click').attr("src",`./assets/user profile/${res}`);
                }
            })
        });
    }
    image_change();
    //check success
    errorVal=(input)=>{
        form = input.parent();
        // $('ion-icon').removeClass('success');
    }
    // validate icon
    validate=()=>{
        $('.alert-circle-outline').hide();
        $('.checkmark-circle-outline').hide();
        $('#reg-name').keyup(function(){
           ($('#reg-name').val().trim()=='')?checkError():checkSuccess();
        });
        $('#reg-email').keyup(function(){ 
           ($('#reg-email').val().trim()=='')?checkError():checkSuccess();
        });
        $('#reg-pas').keyup(function(){ 
           ($('#reg-pas').val().trim()=='')?checkError():checkSuccess();
        });
        $('#reg-conp').keyup(function(){ 
           ($('#reg-conp').val().trim()=='')?checkError():checkSuccess();
        });
    }
    validate();
    loginValidate=()=>{
        $('#userEmail').keyup(function(){
            ($(this).val().trim()==='')?errorVal($(this)):successVal();
        })
    }
    loginValidate();

    // function ajax
    paginationClick=()=>{
            $('.paginMorePre').hide();
            if(parseInt($('.pagin1').text())>1){
                $('.paginMorePre').show();
            }
            $('body').on('click','.pagin-Next',function(){
                $('.paginMorePre').show();
                currentValue1 = parseInt($('.pagin1').text());
                newValue1 = currentValue1+1;
                currentValue2 = parseInt($('.pagin2').text());
                newValue2 = currentValue2+1;
                currentValue3 = parseInt($('.pagin3').text());
                newValue3 = currentValue3+1;
                $('.pagin1').html(`<a class="page-link text-light" href="#">${newValue1}</a>`);
                $('.pagin2').html(`<a class="page-link text-light bg-secondary" href="#">${newValue2}</a>`);
                $('.pagin3').html(`<a class="page-link text-light" href="#">${newValue3}</a>`);
                
            });
            if(parseInt($('.pagin1').text())==1){
                $('.paginMorePre').hide();
            }
            $('body').on('click','.pagin-Pre',function(){
                if(parseInt($('.pagin1').text())==2){
                
                    $('.paginMorePre').hide();
                }
                     if(parseInt($('.pagin1').text())>1){
                    currentValue1 = parseInt($('.pagin1').text());
                    newValue1 = currentValue1-1;
                    currentValue2 = parseInt($('.pagin2').text());
                    newValue2 = currentValue2-1;
                    currentValue3 = parseInt($('.pagin3').text());
                    newValue3 = currentValue3-1;
                    $('.pagin1').html(`<a class="page-link text-light" href="#">${newValue1}</a>`);
                    $('.pagin2').html(`<a class="page-link text-light bg-secondary" href="#">${newValue2}</a>`);
                    $('.pagin3').html(`<a class="page-link text-light" href="#">${newValue3}</a>`);
                      
    
                }
            });
        }
        paginationClick();
   
    // updateLogo();
    // box-meu 
   
   

});