$(document).ready(function () {
    if ($('#success-alert').length) {
        setTimeout(function() {
            $('#success-alert').fadeOut('slow');
        }, 3000);
    }
    if ($('#error-alert').length) {
        setTimeout(function() {
            $('#error-alert').fadeOut('slow');
        }, 3000);
    }
});