$(document).ready(function() {
    $("#messageState").on("change", (x) => {
        $(".pesan").removeClass("openNor closeNor");
        if ($("#messageState").is(":checked")) {
            $(".pesan").removeClass("closed no-anim").addClass("openNor");
            $(".hati").removeClass("closeHer openedHer").addClass("openHer");
            $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
            console.log("Abrindo");
        } else {
            $(".pesan").removeClass("no-anim").addClass("closeNor");
            $(".hati").removeClass("openHer openedHer").addClass("closeHer");
            $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
            console.log("fechando");
        }
    });

    $(".pesan").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        console.log("Animation End");
        if ($(this).hasClass("closeNor"))
            $(this).addClass("closed");
        $(this).removeClass("openNor closeNor").addClass("no-anim");
    });

    $(".hati").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        console.log("Animation End");
        if (!$(this).hasClass("closeHer"))
            $(this).addClass("openedHer beating");
        else
            $(this).addClass("no-anim").removeClass("beating");
        $(this).removeClass("openHer closeHer");
    });
});
