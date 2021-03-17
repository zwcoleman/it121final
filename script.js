// button effect onclick
// page effect onload
// hilight hover over
// image plugin
// time oriented effect "have you seen our products?
                        // view the product page link"

let timerId= setTimeout(showLinear, 8000);
timerId= clearTimeout();
function showLinear() {
    let pop = document.getElementById("pop");
    
    pop.style.display = "block";
    let hiLight = document.getElementById("hiLight");
    hiLight.style.color = "red";
    hiLight.style.fontSize = "larger";
}

$( function() {
    
    $("#commentForm").validate();
    
    });
// let hideId= setTimeout(hideLinear,18000);

// function hideLinear() { NEED TO RESEARCH! 
//     let nopop
// }



$(document).ready(function () {
    $("#hiLight").hover(function(){
        $("#image").fadeToggle(1000),
        $("#hiLight").toggleClass('product');
    });
    });
    $(document).ready(function () {
        $("a").hover(function(){
            $(this).toggleClass('link');
            }
        );
        });

        $(document).ready(function () {
            $("#submit").hover(function(){
                $("#image").fadeToggle(1000);

            });
        });
        

    $(document).ready(function(){
        $('#menu').slicknav();
    });
    



// jQuery(document).ready(function ($) {
//     $(window).load(function () {
//         setTimeout(function(){
//             $('#fade').fadeOut('slow', function () {
//             });
//         },1250); // set the time here
//     });  
// });

let $slideshow = $(".cycle-slideshow");

$slideshow.click(function() {
   if ($slideshow.is(".cycle-paused"))
      $slideshow.cycle("resume");                
   else
      $slideshow.cycle("pause");
});

$("#previous-btn").click(function(){
    $slideshow.cycle("stop");
    $slideshow.cycle("prev");
});
$("#next-btn").click(function(){
    $slideshow.cycle("stop");
    $slideshow.cycle("next");
});



