// main.js
$(function(){
  
  var idx = 0;  // 비주얼 이미지 카운터

  // 비주얼 버튼 클릭
  $('#visual_pager > a').click(function(){
    // pager 클래스 제거(상태 초기화)
    $('#visual_pager > a').removeClass('selected');
    $('#visual img').removeClass('show');

    // pager 클래스 추가
    $(this).addClass('selected');
    idx = $(this).index();
    $('#visual img').eq(idx).addClass('show');

    return false;

  });

  // 비주얼 자동 재생
  setInterval(function(){
    if(idx > 2) idx = 0;
    $('#visual_pager > a').removeClass('selected');
    $('#visual_pager > a').eq(idx).addClass('selected');
    $('#visual img').removeClass('show');
    $('#visual img').eq(idx).addClass('show');
    idx++;
  }, 5000);

  // gnb 2depth on.off
  $('#gnb > ul > li').hover(
    function(){
      $('.depth2_box').addClass('show');
      $('.depth2').addClass('show');
    },
    function(){
      $('.depth2_box').removeClass('show');
      $('.depth2').removeClass('show');
    }
  )

});