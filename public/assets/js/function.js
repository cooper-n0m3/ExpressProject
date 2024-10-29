$(document).ready(function() {
    $('.menu-button').click(function() {
        $('.menu-content').toggle();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.menu-container').length) {
            $('.menu-content').hide();
        }
    });
});