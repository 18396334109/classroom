$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    getWindowHeight();
    //首页大事记
    $('.course_nr li').hover(function(){

        $(this).find('.shiji').slideDown(600);

    },function(){

        $(this).find('.shiji').slideUp(400);

    });
})


function getWindowHeight() {
    var blackboard = screen.height * 0.63;
    var infoPanel = screen.height * 0.38;
    var chatPanel = screen.height * 0.25;
    $(".text-img").css("height", blackboard);
    $("#StudentList").css("min-height", infoPanel);
    $("#TodayFocus").css("min-height", infoPanel);
    $(".chatBody").css("min-height", chatPanel);
}

function sendMessage() {
    var Message = $("#Message").val();
    var time = new Date();
    var data = '<p style="text-align:center">'+ time.toLocaleDateString()+time.toLocaleTimeString()+'</p>'+'<p>' + Message + '</p>';
    $(".chatBody").append(data);
    $("#Message").val('');
}




// var mySwiper = new Swiper('.swiper-container', {
//     // autoplay: true, //可选选项，自动滑动
//     direction: 'horizontal',
//     slidesPerView: 'auto',
//     // slidesPerGroup: 1,
//     spaceBetween: 20,
//     // centeredSlides:'center'
// })