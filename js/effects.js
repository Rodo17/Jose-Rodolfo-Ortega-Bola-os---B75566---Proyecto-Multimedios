'use strict'
$(document).ready(function() {
    var background = 'about_img_A';
    var element  = $('span');
    element.addClass('about_img_A');

    function imageChange(){
        var timer = setInterval(function(){
            if(background == 'about_img_A'){
                element.removeClass('about_img_A');
                background = 'about_img_B';
                element.addClass('about_img_B');
            }else{
                element.removeClass('about_img_B');
                background = 'about_img_A';
                element.addClass('about_img_A');
            }

        }, 5000);
        return tiempo;
    }

    var timer = imageChange();
    
});



var count = 0;
var element = document.getElementById("aboutImage");

function imageChange(){
    if(count > 1){
        count = 0;
        element.classList.remove(background[x]);
    }
    element.classList.add(background[x]);
    count++;
}

temp = setInterval("imageChange()", 2000);