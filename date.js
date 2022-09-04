exports.getdate = function() {
    var today = new Date();
    var options = { weekday: 'long', day: 'numeric', month: 'long', };
    var day = today.toLocaleDateString('en-us', options);
    return day;
}

exports.getday = function() {
    var options = { weekday: 'long' };
    return new Date().toLocaleDateString('en-us', options);
}