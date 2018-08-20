

$(document).ready(function() {

  /* 새로고침시 스크롤 영역이 유지됨에 따라 발생하는 문제를 제거하기 위함입니다 */
  window.onload = function() {
      setTimeout(function() {
        scrollTo(0,0);
      });




  }



  /* 원페이지 스크롤 이벤트 */

  var ScrollEvent = false;

  $('html,body').on('mousewheel', function(c) {
    c.preventDefault();
    var Focus = c.originalEvent.wheelDelta;
    var Floor_DIV = $('.covervid-wrapper').height();

    if(Focus > 0 && ScrollEvent == false && Floor > 0) {
      ScrollEvent = true;
      Floor--;
      $('html,body').animate({scrollTop : Floor * Floor_DIV + 1},
        {duration : 400, complete: function() {
          ScrollEvent = false;
          }
        });

    }
    else if(Focus < 0 && ScrollEvent == false && Floor < 6) {
      ScrollEvent = true;
      Floor++;
      $('html,body').animate({scrollTop : (Floor * Floor_DIV) + 1},
        {duration : 400, complete: function() {
          ScrollEvent = false;
          }
        });

    }

  });

  /* 5개의 아이콘 동적 표현 식 */
  $("#Menu_Soul_Edge").mouseenter(function() {
    $("#menu1").show();

  });
  $("#Menu_Soul_Edge").mouseleave(function() {
    $("#menu1").hide();

  });
  $("#Menu_Soul_Edge").click(function() {
    Floor = 1;
    var weapon_offset = $('#weapon').offset();

    $('html,body').animate({scrollTop : weapon_offset.top}, 400);

  });


  $("#Menu_Cryo_Stone").mouseenter(function() {
    $("#menu2").show();
  });
  $("#Menu_Cryo_Stone").mouseleave(function() {
    $("#menu2").hide();
  });
  $("#Menu_Cryo_Stone").click(function() {
    Floor = 2;
    var accessory_offset = $('#accessory').offset();

    $('html,body').animate({scrollTop : accessory_offset.top}, 600);

  });



  $("#Menu_Calamitas").mouseenter(function() {
    $("#menu3").show();
  });
  $("#Menu_Calamitas").mouseleave(function() {
    $("#menu3").hide();
  });
  $("#Menu_Calamitas").click(function() {
    Floor = 3;
    var bosses_offset = $('#bosses').offset();

    $('html,body').animate({scrollTop : bosses_offset.top}, 800);

  });


  $("#Menu_Aero_Slime").mouseenter(function() {
    $("#menu4").show();
  });
  $("#Menu_Aero_Slime").mouseleave(function() {
    $("#menu4").hide();
  });
  $("#Menu_Aero_Slime").click(function() {
    Floor = 4;
    var enemy_offset = $('#enemy').offset();

    $('html,body').animate({scrollTop : enemy_offset.top}, 1000);

  });


  $("#Menu_Biome").mouseenter(function() {
    $("#menu5").show();
  });
  $("#Menu_Biome").mouseleave(function() {
    $("#menu5").hide();
  });
  $("#Menu_Biome").click(function() {
    Floor = 5;
    var biome_offset = $('#biome').offset();

    $('html,body').animate({scrollTop : biome_offset.top}, 1200);

  });




  /* 5개의 아이콘 동적 표현 식 */

  /* 스크롤링 이벤트 */

  $(window).scroll(function() {
    var wrapper = $('.covervid-wrapper');
    var Menu_scroll = wrapper.offset().top;
    var wrapper_bottom = Menu_scroll + wrapper.height();


  });

  /* top 메뉴 애니메이션 */
  $('#white').click(function () {
    Floor = 0;
    var Menu_top = $('#top').offset();
    $('html,body').animate({scrollTop : Menu_top.top}, 1000);

  });
  $('#black').click(function () {
    Floor = 6;
    var copyright_offset = $('.copyright').offset();

    $('html,body').animate({scrollTop : copyright_offset.top}, 1000);

  });

  // 워리어 부분 //
  $("#warrior").mouseenter(function () {
    $("#warrior_id").addClass("open");
  });
  $("#warrior").mouseleave(function () {
    $("#warrior_id").removeClass("open");
  });

  $("#Ranger").mouseenter(function () {
    $("#Ranger_id").addClass("open");
  });
  $("#Ranger").mouseleave(function () {
    $("#Ranger_id").removeClass("open");
  });

  $("#Summoner").mouseenter(function () {
    $("#Summoner_id").addClass("open");
  });
  $("#Summoner").mouseleave(function () {
    $("#Summoner_id").removeClass("open");
  });

  $("#Thrower").mouseenter(function () {
    $("#Thrower_id").addClass("open");
  });
  $("#Thrower").mouseleave(function () {
    $("#Thrower_id").removeClass("open");
  });

  $("#Socerer").mouseenter(function () {
    $("#Socerer_id").addClass("open");
  });
  $("#Socerer").mouseleave(function () {
    $("#Socerer_id").removeClass("open");
  });





















});
