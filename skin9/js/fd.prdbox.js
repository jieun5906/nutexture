var fd_prdbox_view = false;
$(document).ready(function(){   
    $(window).scroll(function() {
        if($(this).scrollTop() > $("#detailbookmark").offset().top) {
            $("#prdbox").addClass("fixbox");
            $("#prdbox .btnOpenClose").show();
            $("#prdbox .prdname").hide();
            $("#prdbox #detailguide").hide();
            $("#prdbox").removeClass("nonefix");
        
            if (fd_prdbox_view == false) {    
                if($("#prdbox").css("right") == 0 || $("#prdbox").css("right") == "0px") {

            		$("#prdbox .btnOpenClose").addClass("closed");
                    $("#prdbox").css("right", "-392px");
                }
                fd_prdbox_view = true;
            }
        }
        else {
            $("#prdbox").removeClass("fixbox");
            $("#prdbox .btnOpenClose").hide();
            $("#prdbox .prdname").show();
            $("#prdbox #detailguide").show();
            
            $("#prdbox").addClass("nonefix");
            
            fd_prdbox_view = false;
        }
        
        if($("#prdbox").css("right") == 0 || $("#prdbox").css("right") == "0px") {
            $("#prdbox .open").hide();
            $("#prdbox .close").show();
        } else {
            $("#prdbox .close").hide();
            $("#prdbox .open").show();
        }
    });
    
    $("#prdbox .btnOpenClose").click(function() {
        if($(this).attr("class").indexOf("closed") > -1) {
            $(this).removeClass("closed");
            $("#prdbox .open").hide();
            $("#prdbox .close").show();
            $("#prdbox").animate({right: "0"}, 500);
        } else {
            $(this).addClass("closed");
            $("#prdbox .close").hide();
            $("#prdbox .open").show();
            $("#prdbox").animate({right: "-392px"}, 500);
        }
    });
});    


$(document).ready(function(){   
    $('#totalPrice .total').each(function() {
        var text = $(this).text();
        $(this).text(text.replace('개', 'EA'));
    });

    $("#totalPrice .total:contains('개')").html("EA");
    $('#totalPrice .total').html($('#totalPrice .total').html().replace('개','doll'));
});   