

$(document).ready(function () {
     $('.view-minicv').click(function () {
         $('.mini-cv').slideDown(500);
         $('.view-minicv').hide();
         $('.hide-minicv').show();
    });
    $('.hide-minicv').click(function () {
        $('.mini-cv').slideUp(500);       
        $('.view-minicv').show();
        $('.hide-minicv').hide();
       
    });
});

$(window).load(function () {
    $('.hide-minicv').hide();
});

var cuurentyear = document.getElementById("currentyear");
cuurentyear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML=cuurentyear;



// Follow the cursor

var cursor = document.querySelector(".cursor");
const zoom1 = document.getElementsByTagName("h4");
window.addEventListener("mousemove", function (e) {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});


$("h4 , h3").mouseenter(function(){    
    $(".cursor").addClass("highlight");   
});
$("h4").mouseleave(function(){    
    $(".cursor").removeClass("highlight");   
});



//$(document).ready(function () {
//    var boxWidth = $(".aboutUs").width();
//    $(".view-minicv").click(function () {
//        $(".aboutUs").animate({
//            width: 0
//        }, function () {
//            $(".aboutUs").hide();
//            });
//    });
//    $(".slide-right").click(function () {
//        $(".box").animate({
//            width: boxWidth
//        });
//    });
//});