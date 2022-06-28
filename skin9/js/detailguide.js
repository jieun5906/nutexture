$(document).ready(function() {
    
    $( "#detailguide" ).accordion({
        collapsible: true,
        autoHeight: false,
        active : true
    }).show();
    
	//text 수가 14보다 작으면(text가 없으면) 숨김
    var detail_txt = $(".ui-accordion .ui-accordion-content").text();
    var txt_count= detail_txt.length;

    if( txt_count < '14' ) {
        $('#detailguide').css("visibility","hidden");
    }
    
});    
