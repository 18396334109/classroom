$(function() {
    getWindowHeight();
})

// Create an array of event object. Events can be added and deleted dynamically
var ev = [
    { id: 1, name: 'I used jqtimeline plugin.', on: new Date() },
    { id: 2, name: 'do homework.', on: new Date(2017, 5, 19) },
    { id: 3, name: 'do homework.', on: new Date(2017, 6, 19) },
    { id: 4, name: 'do homework.', on: new Date(2017, 7, 19) },
    { id: 5, name: 'do homework.', on: new Date(2017, 8, 19) },
    { id: 6, name: 'do homework.', on: new Date(2018, 5, 19) },
    { id: 7, name: 'do homework.', on: new Date(2018, 6, 19) },
    { id: 8, name: 'do homework.', on: new Date(2018, 7, 19) },
    { id: 9, name: 'do homework.', on: new Date(2018, 8, 19) },
    { id: 10, name: 'do homework.', on: new Date(2019, 5, 19) },
    { id: 11, name: 'do homework.', on: new Date(2019, 6, 19) },
    { id: 12, name: 'do homework.', on: new Date(2019, 7, 19) },
    { id: 13, name: 'do homework.', on: new Date(2019, 8, 19) }
];

//Call the plugin constructor
$('#myTimeline').jqtimeline({ events: ev });

function getWindowHeight() {
    var h = screen.height * 0.5;
    $(".text-img").css("height", h);
}

function sendMessage() {
    var Message = $("#Message").val();
    var data = '<p><button class="btn btn-info btn-sm">' + Message + '</button></p>';
    $(".chatBody").append(data);
}




// var mySwiper = new Swiper('.swiper-container', {
//     // autoplay: true, //可选选项，自动滑动
//     direction: 'horizontal',
//     slidesPerView: 'auto',
//     // slidesPerGroup: 1,
//     spaceBetween: 20,
//     // centeredSlides:'center'
// })