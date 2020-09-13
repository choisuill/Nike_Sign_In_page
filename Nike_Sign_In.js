$(document).ready(function(){
    var Sign_Up = $('#goSign_Up');
    var Sign_In = $('#goSign_In');

    Sign_Up.on('click',function(){
            $('#In_Text').animate({marginLeft : '-720px'},1000,function(){
                $('#Sign_In').fadeOut(100);
                $('#Sign_Up').fadeIn(100,function(){
                    $('#In_Text').css({'marginLeft':'0px'})
                });
                
        })
    });
    
    Sign_In.on('click',function(){
        $('#Up_Text').animate({marginLeft : '720px'},1000,function(){
            $('#Sign_Up').fadeOut(100);
            $('#Sign_In').fadeIn(100,function(){
                $('#Up_Text').css({'marginLeft':'0px'})
            });
            
        })
    })
})