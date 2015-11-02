$(document).ready(function () {
    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    // contact form
    $("#contactsform").submit(function () {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function () {
            $("#message").hide();
            $("#submit-contacts").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contacts-form-name").val(),
                email: $("#contacts-form-email").val(),
                phone: $("#contacts-form-phone").val(),
                comments: $("#contacts-form-message").val()
            }, function (a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit-contacts").removeAttr("disabled");
                if (null != a.match("success")) $("#contactsform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactsform input, #contactsform textarea").keyup(function () {
        $("#message").slideUp(1500);
    });

    //menu scrolling
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 64}, 1000);
    });

    //food-menu-list dropdown
    $(".menu-food").on('click', function () {
        if ($(".menu-food-list").is(":hidden")) {
            $(".menu-food-list").slideDown("slow", function () {
                var rotation = function () {
                    $(".menu-food-list-close").rotate({
                        angle: 0,
                        animateTo: 360
                    });
                };
                rotation();
            });
        } else {
            $(".menu-food-list").slideUp("slow");
        }
    });
    $(".menu-food-list-close").on('click', function () {
        $(".menu-food-list").slideUp("slow");
    });

    //drinks-menu-list dropdown
    $(".menu-drinks").on('click', function () {
        if ($(".menu-drinks-list").is(":hidden")) {
            $(".menu-drinks-list").slideDown("slow", function () {
                var rotation = function () {
                    $(".menu-drinks-list-close").rotate({
                        angle: 0,
                        animateTo: 360
                    });
                };
                rotation();
            });
        } else {
            $(".menu-drinks-list").slideUp("slow");
        }
    });
    $(".menu-drinks-list-close").on('click', function () {
        $(".menu-drinks-list").slideUp("slow");
    });

//animated backgrounds

});

