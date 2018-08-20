$(document).ready(function() {
  // weapon 영역 애니메이션 //

  function Fade() {
    if(Floor == 1) {
      $(".weapon_class").click(function() {
        // 콘텐츠 선택 영역 숨기기 애니메이션 //
        $(".weapon_Content").stop().animate({
          top : "70px"
        },{duration : 700, queue : false});
        $(".weapon_Content").fadeOut(700);

        $(".weapon_text").stop().animate({
          top : "-70px"
        },{duration : 700, queue : false});
        $(".weapon_text").fadeOut(700);


        setTimeout(function() {
          //누른 영역의 클래스를 불러오기 위함 //
          var Weapon_ID = $(".weapon_class").attr("id");

          //각각 다른 영역을 보여주기위해 switch 문 사용 //
          switch(Weapon_ID) {
            case "warrior" :

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
      $(".weapon_Content").stop().animate({
        top : "0px"
      },{duration : 200,queue : false});
      $(".weapon_Content").fadeIn(200);

      $(".weapon_text").stop().animate({
        top : "0px"
      },{duration : 200, queue : false});
      $(".weapon_text").fadeIn(200);
    }
  }


  //선택할 무기의 종류가 나오는 애니메이션입니다.
  function Weapon_warrior_Kinds() {

  }


  // 0.5초마다 함수 호출 -> 애니메이션 감지
  setInterval(function() {
    Fade();
  },500);



});
