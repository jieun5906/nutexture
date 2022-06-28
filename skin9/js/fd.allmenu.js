$(document).ready(function() {
    fnSetSubMenu();
});

function fnSetSubMenu() {
    var submenu = "";
    $.ajax({
        async: false,
        url: "/exec/front/Product/SubCategory",
        dataType : "json",
        success: function(data) {
            for(var i = 0; i < data.length; i++) {
                if(data[i].parent_cate_no=="1"){
                    submenu += "<li><a href='/product/list.html" + data[i].param +"'><span>"+ data[i].name +"</span></a>";
                    submenu += "<ul>";
                    for(var k = 0; k < data.length; k++) {
                        if( data[i].cate_no == data[k].parent_cate_no ){
                            submenu += "<li><a href='/product/list.html" + data[k].param +"'>"+ data[k].name +"</a></li>";
                        }
                    }
                    submenu += "</ul>";
                    submenu += "</li>";
                }
            }
            $(".menuall_submenu").html( "<ol>"+ submenu +"</ol>" );
        }
    });
}