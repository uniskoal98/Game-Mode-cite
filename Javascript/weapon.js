$(document).ready(function() {
  // weapon 영역 애니메이션 //

  function Fade() {
    if(Floor == 1) {
      $(".weapon_class").click(function() {
        // 콘텐츠 선택 영역 숨기기 애니메이션 //
        Weapon_frame_one_Ani();

        setTimeout(function() {
          //누른 영역의 클래스를 불러오기 위함 //
          var Weapon_ID = $(".weapon_class").attr("id");

          //각각 다른 영역을 보여주기위해 switch 문 사용 //
          switch(Weapon_ID) {
            case "warrior" :
              Weapon_frame_two_Ani();
              break;

            case "Ranger" :

            break;

            case "Summoner" :

            break;

            case "Thrower" :

            break;

            case "Socerer" :

            break;
          };
        },700);

      });
    }
    else {
      Weapon_frame_two_Ani_Close();
      Weapon_frame_one_Ani_Close();
    }
  }


  //선택할 무기의 종류가 나오는 애니메이션입니다.
  function Weapon_frame_one_Ani() {
    $("#weapon_frame_one").css("z-index","4");
    $(".weapon_Content").stop().animate({
      top : "70px"
    },{duration : 700, queue : false});
    $(".weapon_Content").fadeOut(700);

    $(".weapon_text").stop().animate({
      top : "-70px"
    },{duration : 700, queue : false});
    $(".weapon_text").fadeOut(700);
  }

  function Weapon_frame_one_Ani_Close() {
    $("#weapon_frame_one").css("z-index","5");
    $(".weapon_Content").stop().animate({
      top : "0px"
    },{duration : 200,queue : false});
    $(".weapon_Content").fadeIn(200);

    $(".weapon_text").stop().animate({
      top : "0px"
    },{duration : 200, queue : false});
    $(".weapon_text").fadeIn(200);
  }

  function Weapon_frame_two_Ani() {
    $(".weapon_frame_two_warrior").css("z-index","5");
    $("#Sword").stop().animate({left : "0px"},200,function() {
      $("#Spear").stop().animate({left : "0px"},200,function() {
        $("#Yoyo").stop().animate({left : "0px"},200,function() {
          $("#Boomerangs").stop().animate({left : "0px"},200,function() {
            $("#Flails").stop().animate({left : "0px"},200);
          });
        });
      });
    });
  }

  function Weapon_frame_two_Ani_Close() {
    $(".weapon_frame_two_warrior").css("z-index","4");
    $("#Sword").stop().animate({left : "-100%"},50,function() {
      $("#Spear").stop().animate({left : "-100%"},50,function() {
        $("#Yoyo").stop().animate({left : "-100%"},50,function() {
          $("#Boomerangs").stop().animate({left : "-100%"},50,function() {
            $("#Flails").stop().animate({left : "-100%"},50);
          });
        });
      });
    });
  }


  // 0.5초마다 함수 호출 -> 애니메이션 감지
  setInterval(function() {
    Fade();
  },500);



});
