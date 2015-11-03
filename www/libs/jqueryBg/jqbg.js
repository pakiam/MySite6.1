(function($) {
    var body = $('body');
    var backgrounds1 = ['url(../img/bg-1/t1-bg.jpg)', 'url(../img/bg-1/t2-bg.jpg)','url(../img/bg-1/t3-bg.jpg)','url(../img/bg-1/t4-bg.jpg)','url(../img/bg-1/t5-bg.jpg)','url(../img/bg-1/b1-bg.jpg)', 'url(../img/bg-1/b2-bg.jpg)','url(../img/bg-1/b3-bg.jpg)'];
    var backgrounds2 = ['url(../img/bg-2/t1-bg.jpg)', 'url(../img/bg-2/t2-bg.jpg)','url(../img/bg-2/t3-bg.jpg)','url(../img/bg-2/t4-bg.jpg)','url(../img/bg-2/t5-bg.jpg)','url(../img/bg-2/b1-bg.jpg)', 'url(../img/bg-2/b2-bg.jpg)','url(../img/bg-2/b3-bg.jpg)'];

    var elements=['.left-side-holder','.menu-food','.menu-drinks','.menu-3','.menu-4','.place','.phone','.mail'];
    var current = 2;
    var max=2;

    function nextBackground() {
        if (current==1){
            for (var i=0;i<8;i++){
                $(elements[i]).css('background-image',backgrounds1[i]);
            }
            current++;
        }else {
            for (var i=0;i<8;i++){
                $(elements[i]).css('background-image',backgrounds2[i]);
            }
            current--;
        }

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
})(jQuery);
