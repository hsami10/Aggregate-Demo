$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    // $('[data-toggle="tooltip"]').tooltip('show'); 

    $('.brand')
    .mouseleave(event, function() {
        if (event.toElement.className.includes("tooltip")) {
            $(this).tooltip('show');
            $('.tooltip').mouseleave(event, function() {
                $('.brand').tooltip('hide');
            });
        }
    });

    // $('.tooltip')
    // .mouseout(event, function() {
    //     console.log('fuck no');
    //     $('.brand').tooltip('hide');
    // });

    // $('.brand').attr('title', '<em>tooooooool</em> <u>with</u> <b>HTML</b>');
});
