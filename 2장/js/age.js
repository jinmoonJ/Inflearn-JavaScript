// 함수 calc()선언과 구현을 하고 있다.
function calc() {
    var currentYear = 2023;
    // 사용자로부터 입력 받은 값으로 birthYear 에 저장(할당)
    var birthYear = prompt("태어난 년도 입력.", "YYYY");
    var age = 0;
    age = currentYear - birthYear + 1;

    // documetn는 현재 웹브라우저의 페이지 의미
    // querySelector() 는 id가 result인 웹 요소(div)를 의미 함
    // innerHTML은 대입한 값으로 html문서에 대체하라
    document.querySelector("#result").innerHTML = "나이는 " + age + "세 입니다.";
  }