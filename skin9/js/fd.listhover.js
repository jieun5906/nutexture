$(document).ready(function () {
    $(".prdpadding2").mouseover(
        function() {
            $(this).find(".mainbnhover").show();
        }
    ).mouseout(
        function() {
            $(this).find(".mainbnhover").hide();
        }
    );
});