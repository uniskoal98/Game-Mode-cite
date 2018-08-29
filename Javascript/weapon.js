$(document).ready(function() {
  // weapon 영역 애니메이션 //

  var THREE_ANIMATION = null;
  var TWO_ANIMATION = null;
  function Fade() {
    if(Floor == 1) {
      $(".weapon_class").click(function() {
        var Weapon_ID = $(this).attr("id");
        $(".weapon_frame_one").css("z-index","-1000");
        // 콘텐츠 선택 영역 숨기기 애니메이션 //
        Weapon_frame_one_Ani();

        setTimeout(function() {
          //누른 영역의 클래스를 불러오기 위함 //


          //각각 다른 영역을 보여주기위해 switch 문 사용 //
          switch(Weapon_ID) {
            case "warrior" :
              TWO_ANIMATION = "warrior";
              Weapon_frame_two_Ani();
              $(".warrior_weapon").click(function() {
                var Weapon_select_ID = $(this).attr("id");

                switch(Weapon_select_ID) {
                  case "Sword" :
                    THREE_ANIMATION = "Sword";
                    Weapon_frame_two_Ani_Close();
                    Weapon_frame_three_Ani();

                  break;

                  case "Spear" :
                    THREE_ANIMATION = "Spear";
                    Weapon_frame_two_Ani_Close();
                  break;

                  case "Yoyo" :
                    THREE_ANIMATION = "Yoyo";
                    Weapon_frame_two_Ani_Close();
                  break;

                  case "Boomerangs" :
                    THREE_ANIMATION = "Boomerangs";
                    Weapon_frame_two_Ani_Close();
                  break;

                  case "Flails" :
                    THREE_ANIMATION = "Flails";
                    Weapon_frame_two_Ani_Close();
                  break;

                };
              });
            break;

            case "Ranger" :
              TWO_ANIMATION = "ranger";
              Weapon_frame_two_Ani();
            break;

            case "Summoner" :

            break;

            case "Thrower" :
              TWO_ANIMATION = "thrower";
              Weapon_frame_two_Ani();
            break;

            case "Socerer" :
              TWO_ANIMATION = "socerer";
              Weapon_frame_two_Ani();
            break;
          };
        },700);

      });
    }
    else {
      Weapon_frame_three_Ani_Close();
      Weapon_frame_two_Ani_Close();
      Weapon_frame_one_Ani_Close();
    }
  }


  //선택할 무기의 종류가 나오는 애니메이션입니다.
  function Weapon_frame_one_Ani() {
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
    switch(TWO_ANIMATION) {
      case "warrior" :
        $("#warrior_select").css("z-index","1000");

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
      break;

      case "ranger" :
        $("#ranger_select").css("z-index","1000");

        $(".weapon_frame_two_ranger").css("z-index","5");
        $("#Guns").stop().animate({left : "0px"},200,function() {
          $("#Bows").stop().animate({left : "0px"},200,function() {
            $("#Repeaters").stop().animate({left : "0px"},200,function() {
              $("#Flamethrowers").stop().animate({left : "0px"},200,function() {
                $("#Launchers").stop().animate({left : "0px"},200,function() {
                    $("#Others").stop().animate({left : "0px"},200);
                });
              });
            });
          });
        });
      break;
      case "thrower" :
      $("#thrower_select").css("z-index","1000");

      $(".weapon_frame_two_thrower").css("z-index","5");
      $("#Consumeables").stop().animate({left : "0px"},200,function() {
        $("#Throw_Boomerangs").stop().animate({left : "0px"},200,function() {
          $("#Throw_Others").stop().animate({left : "0px"},200,);
        });
      });
      break;

      case "socerer" :
      $("#socerer_select").css("z-index","1000");

      $(".weapon_frame_two_socerer").css("z-index","5");
      $("#Wand").stop().animate({left : "0px"},200,function() {
        $("#SpellTome").stop().animate({left : "0px"},200,function() {
          $("#MagicGun").stop().animate({left : "0px"},200,function() {
            $("#Socerer_Others").stop().animate({left : "0px"},200);
          });
        });
      });
      break;

    };

  }

  function Weapon_frame_two_Ani_Close() {
    switch(TWO_ANIMATION) {
      case "warrior" :
      $(".weapon_frame_one").css("z-index","10");
      $("#warrior_select").css("z-index","0");

      $(".weapon_frame_two_warrior").css("z-index","4");
      $("#Flails").stop().animate({left : "-100%"},50,function() {
        $("#Boomerangs").stop().animate({left : "-100%"},50,function() {
          $("#Yoyo").stop().animate({left : "-100%"},50,function() {
            $("#Spear").stop().animate({left : "-100%"},50,function() {
              $("#Sword").stop().animate({left : "-100%"},50);
            });
          });
        });
      });
      break;

      case "ranger" :
      $(".weapon_frame_one").css("z-index","10");
      $("#ranger_select").css("z-index","0");

      $(".weapon_frame_two_ranger").css("z-index","5");
      $("#Guns").stop().animate({left : "-100%"},50,function() {
        $("#Bows").stop().animate({left : "-100%"},50,function() {
          $("#Repeaters").stop().animate({left : "-100%"},50,function() {
            $("#Flamethrowers").stop().animate({left : "-100%"},50,function() {
              $("#Launchers").stop().animate({left : "-100%"},50,function() {
                  $("#Others").stop().animate({left : "-100%"},50);
              });
            });
          });
        });
      });
      break;

      case "thrower" :
      $(".weapon_frame_one").css("z-index","10");
      $("#thrower_select").css("z-index","0");

      $(".weapon_frame_two_thrower").css("z-index","5");
      $("#Consumeables").stop().animate({left : "-100%"},50,function() {
        $("#Throw_Boomerangs").stop().animate({left : "-100%"},50,function() {
          $("#Throw_Others").stop().animate({left : "-100%"},50,);
        });
      });
      break;
      case "socerer" :
      $(".weapon_frame_one").css("z-index","10");
      $("#socerer_select").css("z-index","0");

      $(".weapon_frame_two_socerer").css("z-index","5");
      $("#Wand").stop().animate({left : "-100%"},50,function() {
        $("#SpellTome").stop().animate({left : "-100%"},50,function() {
          $("#MagicGun").stop().animate({left : "-100%"},50,function() {
            $("#Socerer_Others").stop().animate({left : "-100%"},50);
          });
        });
      });
      break;
    }

  }

  function Weapon_frame_three_Ani() {
    if(THREE_ANIMATION == "Sword") {
      $(".weapon_frame_one").css("z-index","-1000");
      $("#weapon_frame_three_warrior").css("z-index","1000");

      setTimeout(function() {
        $("#weapon_frame_three_warrior").fadeIn(500);
      }, 200);
    }
  }

  function Weapon_frame_three_Ani_Close() {
    if(THREE_ANIMATION == "Sword") {
      $(".weapon_frame_one").css("z-index","10");
      $("#weapon_frame_three_warrior").css("z-index","0");

      $("#weapon_frame_three_warrior").fadeOut(50);
    }

  }


  // 0.5초마다 함수 호출 -> 애니메이션 감지
  setInterval(function() {
    Fade();
  },500);



});
