$(".crossRotate").click(function () {
    //alert($( this ).css( "transform" ));
    if ($(this).css("transform") == 'none') {
        $(this).css("transform", "rotate(900deg)");
    } else {
        $(this).css("transform", "");
    }
});