$(function(){
	var prdList_url = window.location.search;
    var prdList_url_split = prdList_url.split('=')[1];
    var prdList_tit_className = $('.prdList-tit-cont .prdList-subTit');
    
    /* Essential Series 문구 */
    if(prdList_url_split == 29){
        prdList_tit_className.text('건강하고 아름다운 피부를 위한 데일리 에센셜 스킨케어 리추얼');
    } 
    
    else if(prdList_url_split == 30){
        prdList_tit_className.text('기호와 피부 타입에 따라 선택하는 셀프 인텐시브 트리트먼트');
        
         /* INDULGENCE SERIES_COMMING SOON 문구 */
        $('.prdList-tit-cont .prdList-commingSoon').css('display','block');        
    } 
    
    else if(prdList_url_split == 33){        
         /* BODY_COMMING SOON 문구 */
        $('.prdList-tit-cont .prdList-commingSoon').css('display','block');
    }
    
});