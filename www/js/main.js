$(document).ready(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".menu-food").on('click', function () {
            if ($(".menu-food-list-mobile").is(":hidden")) {
                $(".menu-food-list-mobile").slideDown("slow", function () {
                    var rotation = function () {
                        $(".menu-drinks-list-close-mobile").rotate({
                            angle: 0,
                            animateTo: 360
                        });
                    };
                    rotation();
                });
            } else {
                $(".menu-food-list-mobile").slideUp("slow");
            }
        });
        $(".menu-food-list-close-mobile").on('click', function () {
            $(".menu-food-list-mobile").slideUp("slow");
        });
        $(".menu-drinks").on('click', function () {
            if ($(".menu-drinks-list-mobile").is(":hidden")) {
                $(".menu-drinks-list-mobile").slideDown("slow", function () {
                    var rotation = function () {
                        $(".menu-drinks-list-close").rotate({
                            angle: 0,
                            animateTo: 360
                        });
                    };
                    rotation();
                });
            } else {
                $(".menu-drinks-list-mobile").slideUp("slow");
            }
        });
        $(".menu-drinks-list-close-mobile").on('click', function () {
            $(".menu-drinks-list-mobile").slideUp("slow");
        });
    } else {
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
        dropDownMenuList();

        //drinks-menu-list dropdown
        dropDownDrinksList();

        // change bgs
        initBg();
    }
});
function dropDownDrinksList(){
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
}
function dropDownMenuList(){
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
}

function initBg() {
    var backgrounds1 = ['url(../img/bg-1/t1-bg.jpg)', 'url(../img/bg-1/t2-bg.jpg)', 'url(../img/bg-1/t3-bg.jpg)', 'url(../img/bg-1/t4-bg.jpg)', 'url(../img/bg-1/t5-bg.jpg)', 'url(../img/bg-1/b1-bg.jpg)', 'url(../img/bg-1/b2-bg.jpg)', 'url(../img/bg-1/b3-bg.jpg)'];
    var backgrounds2 = ['url(../img/bg-2/t1-bg.jpg)', 'url(../img/bg-2/t2-bg.jpg)', 'url(../img/bg-2/t3-bg.jpg)', 'url(../img/bg-2/t4-bg.jpg)', 'url(../img/bg-2/t5-bg.jpg)', 'url(../img/bg-2/b1-bg.jpg)', 'url(../img/bg-2/b2-bg.jpg)', 'url(../img/bg-2/b3-bg.jpg)'];

    var elements = ['.left-side-holder', '.menu-food', '.menu-drinks', '.menu-3', '.menu-4', '.place', '.phone', '.mail'];
    var current = 2;
    var max = 2;

    function nextBackground() {
        if (current == 1) {
            for (var i = 0; i < 8; i++) {
                $(elements[i]).css('background-image', backgrounds1[i]);
            }
            current >= max ? current = 1 : current++;
        } else {
            for (var i = 0; i < 8; i++) {
                $(elements[i]).css('background-image', backgrounds2[i]);
            }
            current >= max ? current = 1 : current++;
        }
        setTimeout(nextBackground, 7000);
    }
    setTimeout(nextBackground, 7000);
}