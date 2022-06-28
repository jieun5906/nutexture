$(document).ready(function(){ 

    $(window).scroll(function() {
        if($(this).scrollTop() > $("#bottom").offset().top - ($("#leftmenu").height() + 225)){ // 80: .fixmenu top
            $("#leftmenu").removeClass("fixmenu2");
            $("#leftmenuwrap").css("top", "inherit").css("bottom", "-185px");	// -180 : #detail-right padding-bottom + .fixmenu top
        }
        else if($(this).scrollTop() > 0) {
            $("#leftmenuwrap").css("bottom", "inherit").css("top", "0");
            $("#leftmenu").addClass("fixmenu2");
        }
        else {
            $("#leftmenu").removeClass("fixmenu2");
        }
    });
    
});