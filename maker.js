$('#sec-1').addClass("active");
$("#sec-1").click(function(){
    $('html, body').animate({
        scrollTop:      $("#one").offset().top-66}, 1000);
        return false;
    });
$("#sec-2").click(function(){
    $('html, body').animate({
        scrollTop:      $("#two").offset().top-112}, 1000);
        return false;
    });
$("#sec-3").click(function(){
    $('html, body').animate({
        scrollTop:      $("#three").offset().top-112}, 1000);
        return false;
    });
$("#sec-4").click(function(){
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop:      $("#four").offset().top-112}, 1000);
        return false;
    });
$("#sec-5").click(function(){
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop:      $("#five").offset().top-112}, 1000);
        return false;
    });
$("#sec-6").click(function(){
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop:      $("#six").offset().top-112}, 1000);
        return false;
    });

$('#two').waypoint(function(){
    $(".container ul li").children().removeClass("active");
    $("#sec-2").addClass("active");
},{offset:101});
$('#three').waypoint(function(){
    $(".container ul li").children().removeClass("active");
    $("#sec-3").addClass("active");
},{offset:101});
$('#four').waypoint(function(){
    $(".container ul li").children().removeClass("active");
    $("#sec-4").addClass("active");
},{offset:101});
$('#five').waypoint(function(){
    $(".container ul li").children().removeClass("active");
    $("#sec-5").addClass("active");
},{offset:101});
$('#six').waypoint(function(){
    $(".container ul li").children().removeClass("active");
    $("#sec-6").addClass("active");
},{offset:101});
$('#one').waypoint(function(){
    $(".container ul li").children().removeClass("active");
    $("#sec-1").addClass("active");
},{offset:0});
//why do i  need this?