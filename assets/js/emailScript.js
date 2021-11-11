function sendMail() {
    var name = $('#contact #name').val();
    var email = $('#contact #email').val();
    var message = $('#contact textarea').val();
    window.location.href = 'mailto:leonhardfriedrich@gmail.com?subject=Reaching out - ' + name + ' (' + email + ')' + '&body=' + message;
};