$(".crossRotate").click(function () {
    //alert($( this ).css( "transform" ));
    if ($(this).css("transform") == 'none') {
        $(this).css("transform", "rotate(3600deg)");
    } else {
        $(this).css("transform", "");
    }
});
