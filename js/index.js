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