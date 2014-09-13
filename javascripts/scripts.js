
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    if (jQuery(window).width() > 1000) {
        $('.coming-soon').backstretch([
          "img/slider1.jpg"
        , "img/slider2.jpg"
        ], {duration: 5000, fade: 750});
    }

    /*
        Countdown initializer
    */
    var now = new Date(2014, 8, 22, 12, 00, 00, 000);
    var countTo = now.valueOf();
    $('.timer').countdown(countTo, function(event) {
        var $this = $(this);
        switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span.'+event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    });

    /*
        Tooltips
    */
    $('.social a.facebook').tooltip();
    $('.social a.twitter').tooltip();

});
