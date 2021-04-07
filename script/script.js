$(function () {

    $("button").click(function () {

        var now = new Date();

        /* 오늘 날짜 출력 시작 */
        var year = now.getFullYear(); // 2021
        var month = now.getMonth() + 1;
        // getMonth는 0부터 시작하므로 +1 해줘야함

        var date = now.getDate();

        var dateOutput = year + "년 "; // "2021"(문자형 => 숫자형) + "년" => "2021년"

        dateOutput += month + "월 ";
        dateOutput += date + "일";
        $("#date").append(dateOutput);
        /* 오늘 날짜 출력 끝 */


    });

    fnDigitalTime(); // 버튼을 눌럿을 때 즉시 시간 표시
    setInterval(fnDigitalTime, 1000);

});



function fnDigitalTime() {
    /* 디지털 시계 시작 */
    var now = new Date();

    var hour = now.getHours(); // 시간반환
    if (hour < 10) hour = "0" + hour;

    var minutes = now.getMinutes(); // 분 반환
    if (minutes < 10) minutes = "0" + minutes;

    var seconds = now.getSeconds(); // 초 반환
    if (seconds < 10) seconds = "0" + seconds;

    var timeOutput = hour + " : " + minutes + " : " + seconds;

    $("#digitalTime").text(timeOutput);


}









// text (매개변수);
// => (원래 있던)요소의 내용을 모두 제거하고 매개변수의 내용을 입력
// append (매개변수);
// => 요소의 내용을 유지한 채 매개변수의 내용을
//       기존 요소의 마지막 요소 다음에 추가함




//        var date = now.toLocaleDateString();
//        $("#date").append(date);

//        var time = now.toLocaleTimeString();
//        $("#time").append(time);
