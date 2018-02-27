$(function() {
    $('[data-toggle="tooltip"]').tooltip();
})


function sendMessage() {
    var Message = $("#Message").val();
    if(!Message){
        alert('请输入内容');
        return false;
    }
    var time = new Date();
    var data = '<p style="text-align:center">' + time.toLocaleDateString() + time.toLocaleTimeString() + '</p>' + '<p>' + Message + '</p>';
    $(".chatBody").append(data);
    $("#Message").val('');
}
