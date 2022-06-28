$(function(){
    // 회원가입 동의 자세히보기
    $('.fd-detail-des').click(clickJoinDes);
    // 헤더 유저 마우스오버 이벤트
    $('.user-menu').mouseover(overUserIcon).mouseleave(leaveUserIcon);
    // faq 게시판 펼치기/접기
    $('.fd-tit-label').click(toggleFAQ);
    // 주문 하나씩 펼치기
    $('.fd-join-prev').click(clickJoinPrev);
    $('.fd-join-next').click(clickJoinNext);
    // 상품상세 리뷰
    showDetailReview();
    // $('fd-review-more').click(clickReviewMore);    
    // 헤더 shop 메뉴 펼치기 이벤트
    $('.shop_show').mouseover(overShopMenu);
    $('.account_show').mouseover(overAccountMenu);
    $('#top').mouseleave(leaveShopMenu);
    // faq 카테고리 메뉴 active
    faqCateActive();    
    // q&a 비밀글 자동설정
    //setSecretWrite();
    // 인스타그램
    $('#instagramWidgetManual').mouseover(hoverInsta);
    // 상세페이지 상단 이미지 롤링 active
    $('.fd-mood-img .mood-img-cont ul li').click(clickDetailTopImgActive);
    // 상세페이지 상단 reviews 클릭시 review영역으로 이동
    $('.review-count .gro').click(clickMovePrdDetailReview);
    $(document).ready(BasicDetailTopImgActive);
    // 상세페이지 할인금액 없으면 display:none
    $(document).ready(prdDetailPriceDisNone);
    // 상세페이지 하단 안내정보
    $('.bot-info-top').click(clickDetailBotinfo);
    // 상단 검색창 클릭시 노출
    $('#top #topsearch .search-tit').click(clickSearchBtn);
    // 로그인 비회원 주문조회 클릭시 해당 영역으로 이동
    $('.orderhistorynologin-btn').click(clickNologinBtn);
    // 상단 배너 fade 롤링
    $(document).ready(topBannerFadeIn);
});

// 상단 배너 fade 롤링
function topBannerFadeIn(){    
    $('#top_banner a').hide();
    $('#top_banner a').eq(0).show();
    setInterval(function(){
        $('#top_banner a').eq(0).fadeOut(1000)
            .next().fadeIn(1000).end(1000)
            .appendTo('#top_banner'); 
    },3000);
}

// 로그인 비회원 주문조회 클릭시 해당 영역으로 이동
function clickNologinBtn(){    
	var nologin_btn = $(".orderhistorynologin-cont").offset();
    $('html, body').animate({scrollTop : nologin_btn.top - 200}, 500);
}

// 상세페이지 상단 reviews 클릭시 review영역으로 이동
function clickMovePrdDetailReview(){    
	var prdDetail_review = $(".bot-info04").offset();
    $('html, body').animate({scrollTop : prdDetail_review.top - 200}, 500);
}

// 상단 검색창 클릭시 노출
function clickSearchBtn(){    
    $('#top #topsearch').toggleClass('active');
    $('#top #topsearch .search-bar input[type=text]').focus();
}

// 메인페이지 헤더 투명 이벤트
$(document).ready(function() {
    $(window).scroll(function() {
        var fd_window_height = $(window).scrollTop();

        if(fd_window_height >= 100) {
            if ($('#top a').mouseout()){
                $("#top .inner").addClass("active");
            }
        } else {
            $("#top .inner").removeClass("active");
        }        
    })
})
/*
$('#top a').mouseleave(function(){
})
*/

// 상세페이지 할인금액 없으면 display:none
function prdDetailPriceDisNone(){    
    var detail_txt = $(".fd-item-price .prd-price .normal").text();

    if( detail_txt === 'KRW 0' ) {
        $(".fd-item-price .prd-price .normal").css("display","none");
    }
}

// faq 카테고리 메뉴 active
function faqCateActive(){
    var fd_board_item = $('.fd-cate-item');    
    var fd_board_search = window.location.href;
    var fd_board_split = fd_board_search.split('.com')[1];
    
    for(var i = 0; i < fd_board_item.length; i++)
    {
        var fd_items = $(fd_board_item[i]);
        var fd_item_href = fd_items.find('a').attr('href');

        if(fd_board_split === fd_item_href)
        {
            fd_items.addClass('active');   
        }
    }
}

// 헤더 shop 메뉴 펼치기 이벤트
function overShopMenu(){
    var menu = $('.top_menu_cont'); 
    
    $('#top').addClass('active');
    $('#top').addClass('shop_active');
    $('#top').removeClass('account_active');
    $('#top .inner').removeClass('active');
    /*menu.show();*/
}
function overAccountMenu(){
    var menu = $('.top_menu_cont');
    
    $('#top').addClass('active');
    $('#top').addClass('account_active');
    $('#top').removeClass('shop_active');
    $('#top .inner').removeClass('active');
    /*menu.show();*/
}
function leaveShopMenu(){
    var menu = $('.top_menu_cont');    
    
    $('#top').removeClass('active');
    /*menu.hide();*/
}


function clickJoinDes(e){
    var target = $(e.currentTarget);
    
    target.closest('.fd-agree-box').children('.fd-agree-des').slideToggle();
}

function overUserIcon(e){
    var target = $(e.currentTarget);

    target.children('.user-pop').addClass('active');
}

function leaveUserIcon(e){
    var target = $(e.currentTarget);

    target.children('.user-pop').removeClass('active');
}

function toggleFAQ(e){
    var target = $(e.currentTarget);
    var icon = target.find('i.fas');

    icon.toggleClass('fa-minus');
    icon.toggleClass('fa-plus');
}

// 주문 하나씩 펼치기
function clickJoinPrev(e){
    var target = $(e.currentTarget);
    var prev_target = target.closest('.fd-join-cont').prev('.fd-join-cont').find('.fd-join-con');
    
    $('.fd-join-con').slideUp();
    prev_target.slideDown();
}

function clickJoinNext(e){
    var target = $(e.currentTarget);
    var next_target = target.closest('.fd-join-cont').next('.fd-join-cont').find('.fd-join-con');

    $('.fd-join-con').slideUp();
    next_target.slideDown();
}

// 상품상세 리뷰 작성 이벤트
function clickReviewWrite(e){
    var target = $(e.currentTarget);

    $('.review-write-cont').slideToggle();
}

// 상품상세 리뷰
function showDetailReview(){
    var con = $('.fd-review-head').find('p:first-child');
  
    con.siblings('p').remove();
    con.append("<span class='fd-review-more'>more</span>");

}


// Q&A 비밀글 자동설정
/*function setSecretWrite(){
    var target = $('.fd-secret-cont');
    target = target.find('input#secure1');

    target.attr('checked', true);
    console.log(target);
}*/

// 인스타그램
function hoverInsta(e){
    var target = $(e.currentTarget);
    var test = target.find('iframe');
    
    console.log(test);
}

// 상세페이지 상단 이미지 롤링 active
function clickDetailTopImgActive(e){
    var target = $(e.currentTarget);

    $('.fd-mood-img .mood-img-cont ul li').removeClass('active');
    target.addClass('active');
}
function BasicDetailTopImgActive(e){
    var target = $(e.currentTarget);
    
    $('.fd-mood-img .mood-img-cont ul li').eq(0).addClass('active');
}

// 상세페이지 하단 안내정보
function clickDetailBotinfo(e){
    var target = $(e.currentTarget);

    target.find('.it-right').toggleClass('active');
    target.siblings('.bot-info-bot').slideToggle();
}

/* 로딩 이미지 */
$(document).ready(function(){
    var  progress_im1 = $("#loading_01").attr("src");

    $(".progress_load").css("background-image", 'url(' + progress_im1 + ')');  
});   
$(window).load(function() {
    $(".progress_load").fadeOut("slow");
})