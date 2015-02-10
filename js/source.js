function handleMouseLeave(handler) {

    return function(e) {
        e = e || event; // IE
        var toElement = e.relatedTarget || e.toElement; // IE
        while (toElement && toElement !== this) {
            toElement = toElement.parentNode;
        }
        if (toElement == this) {
            return;
        }
        return handler.call(this, e);
    };
}

function handleMouseEnter(handler) {

    return function(e) {
        e = e || event; // IE
        var toElement = e.relatedTarget || e.srcElement; // IE
        while (toElement && toElement !== this) {
            toElement = toElement.parentNode;
        }
        if (toElement == this) {
            return;
        }
        return handler.call(this, e);
    };
}


$(window).on('load',function(){
    /*--------------------   sideBar -------------------------*/
    var sideBarButton = document.querySelector('#sTop-button');

    window.onscroll = function () {
        if (window.pageYOffset > 320)
        {
            if($('.c-block > .content').length) $('.vf-fixed-menu').css({left:$('.c-block .content').offset().left-60}).show();
            $(sideBarButton).show();
        }
        else
        {
            $(sideBarButton).hide();
            $('.vf-fixed-menu').hide();
        }
    };
    $(sideBarButton).on('click', function (e){
        e.preventDefault();
        var pageYOffset = window.pageYOffset;
        $("body,html").animate({"scrollTop": 0}, pageYOffset/2);
    });
    /*--------------------   sideBar -------------------------*/

    var hb = document.querySelectorAll('.popover-trigger');

    for (var i=0; i < hb.length; i++) {
        hb[i].onmouseover = handleMouseEnter(function(e) {
            e.preventDefault();
            var attr = $(this).attr('data-popover-button');
            var el = $("[data-popover-block='" + attr + "']");
            if (!el.hasClass('visible'))
            {
                el.slideDown(10, function(){
                    $(this).animate({opacity:1}, 150,function(){
                        $(this).addClass('visible')
                    });
                });
            }
        });
        hb[i].onmouseout = handleMouseLeave(function(e) {
            e.preventDefault();
            var attr = $(this).attr('data-popover-button');
            var el = $("[data-popover-block='" + attr + "']");
            setTimeout(function(){
                if (el.hasClass('visible'))
                {
                    el.animate({opacity:0},150, function(){
                        $(this).slideUp(5, function(){
                            $(this).removeClass('visible')
                        });
                    });
                }
            },300)
        });
    }

    $(document).on('click', '.trigger-radio', function(e){
        e.preventDefault();
        if (!$(this).hasClass('selected'))
        {
            $(this).addClass('selected');
        }
        else if ($(this).hasClass('selected'))
        {
            $(this).removeClass('selected');
        }
    });

    $(document).on('click', '.user-profile', function(e){
        e.preventDefault();
        if (!$(this).next('.user-profile-menu').hasClass('visible'))
        {
            $(this).next('.user-profile-menu').slideDown(10, function(){
                $(this).animate({opacity:1},300,function(){
                    $(this).addClass('visible')
                });
            });
        }
        else if ($(this).next('.user-profile-menu').hasClass('visible'))
        {
            $(this).next('.user-profile-menu').animate({opacity:0},300, function(){
                $(this).slideUp(10, function(){
                    $(this).removeClass('visible')
                });
            });
        }
    });

    $(document).on('click', '.hidden-trigger', function(e){
        e.preventDefault();
        var attr = $(this).attr('data-hidden-trigger');
        var $this = $(this);
        var block = $("[data-hidden-block='" + attr + "']");
        var blocks = $("[data-hidden-block]");

             blocks.animate({opacity:0},10, function(){
                 $(this).slideUp(10, function(){
                     $(this).addClass('hidden')
                 });
                });
            setTimeout(function(){
                if (block.hasClass('hidden'))
                {
                    if (block.hasClass('top') ){
                        block.css(
                            {
                                top:$this.closest('.pos-rel').offset().top - block.closest('.pos-rel').offset().top
                            });
                        console.log();
                    }
                    if (block.hasClass('right') ){
                        block.css(
                            {
                                left:$this.closest('.pos-rel')[0].clientWidth+10
                            });
                    }

                    block.slideDown(10, function(){
                        $(this).animate({opacity:1}, 150,function(){
                            $(this).removeClass('hidden')
                        });
                    });
                }
                else if (!block.hasClass('hidden'))
                {
                    block.animate({opacity:0},150, function(){
                        $(this).slideUp(10, function(){
                            $(this).addClass('hidden')
                        });
                    });
                }
            },20)


    });

    $(document).on('click', '.soc-icon-trigger', function(e){
        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass('logged')) $this.removeClass('logged');
        else if (!$this.hasClass('logged')) $this.addClass('logged');
    });

    $(document).on('click', '.radio-list li a', function(e){
        e.preventDefault();
        var $this = $(this);
        var list = $this.closest('ul');
        var el = $this.closest('li');
        list.find('li').removeClass('current');
        el.addClass('current');
    });

    $(document).on('click', '.massege-button', function(e){
        e.preventDefault();
        if (!$(this).closest('.vp-el-content').next('.vp-el-comments').hasClass('visible'))
        {
            $(this).closest('.vp-el-content').next('.vp-el-comments').slideDown(500,function(){
                $(this).animate({opacity:1},300,function(){
                    $(this).addClass('visible')
                });
            })
        }
        else if ($(this).closest('.vp-el-content').next('.vp-el-comments').hasClass('visible'))
        {
            $(this).closest('.vp-el-content').next('.vp-el-comments').animate({opacity:0},300,function(){
                $(this).slideUp(500, function(){
                    $(this).removeClass('visible')
                })
            });
        }
    });

    $(document).on('click', '.fr-inbook-menu > .hidden-menu-button', function(e){
        e.preventDefault();
        var $this = $(this);
        var el = $('.hidden-menu');
        if (!$this.closest('.fr-inbook-menu').next('.hidden-menu').hasClass('visible'))
        {
            el.animate({opacity:0},150, function(){
                $(this).slideUp(5, function(){
                    $(this).removeClass('visible');
                });
                setTimeout(function(){
                    $this.closest('.fr-inbook-menu').next('.hidden-menu').slideDown(10, function(){
                        $(this).animate({opacity:1}, 150,function(){
                            $(this).addClass('visible')
                        });
                    });
                },5);
            });
        }
        else if ($this.closest('.fr-inbook-menu').next('.hidden-menu').hasClass('visible'))
        {
            $(this).closest('.fr-inbook-menu').next('.hidden-menu').animate({opacity:0},150,function(){
                $(this).slideUp(150, function(){
                    $(this).removeClass('visible')
                })
            });
        }
    });

    $(document).on('click', '.filter-block > .clear', function(e){
        e.preventDefault();
        var select = $('.select2-container');
        for (var i=0; i < select.length; i++)
        {
            var id = $(select[i]).attr('id');
            id = id.replace('s2id_','');
            $('#'+id).select2("val", "");
        }
    });

    $(document).on('click', '.show-answer-form', function(e){
        e.preventDefault();
        $(this).animate({opacity:0},300, function(){
            $(this).slideUp(10, function(){
                $(this).next('.answer-form').slideDown(10, function(){
                    $(this).animate({opacity:1},300, function(){$(this).addClass('visible')});
                })
            });
        });
    });

    $(document).on('click', '.del-img', function(e){
        e.preventDefault();
        $(this).closest('.img-col').find('img').animate({opacity:0},300, function(){
            $(this).remove();
        });
        $(this).removeClass('active');
    });

    $(document).on('click', '.cancel-progressbar', function(e){
        e.preventDefault();
        $(this).parent('div').animate({opacity:0},300, function(){
            $(this).remove();
        });
    });

    $(document).on('click', '.del-img-col', function(e){
        e.preventDefault();
        $(this).parent('div').animate({opacity:0},300, function(){
            $(this).remove();
        });
    });

    $(function() {
        $('.tabs').on('click', 'li:not(.current)', function() {
            $(this).addClass('current').siblings().removeClass('current')
                .closest('.tabSection').children('.box').eq($(this).index())
                .animate({opacity:1},300,function(){$(this).removeClass('hidden')})
                .siblings('.box').animate({opacity:0},300,function(){$(this).addClass('hidden')});
        })
    });
});

$(window).on('click',function(event) {
    if ($('.user-profile-menu').hasClass('visible'))
    {
        if ($(event.target).closest('.user-profile').length) return;
        $('.user-profile-menu').animate({opacity:0},300, function(){
            $(this).slideUp(300, function(){
                $(this).removeClass('visible')
            });
        });
    }
    if ($('.answer-form').hasClass('visible'))
    {
        if ($(event.target).closest('.show-answer-form').length) return;
        $('.answer-form').animate({opacity:0},300,function(){
            $(this).slideUp(10, function(){
                $(this).removeClass('visible');
                $(this).prev('.show-answer-form').slideDown(10, function(){
                    $(this).animate({opacity:1})
                })
            })
        })
    }
    if ($('.hidden-menu').hasClass('visible'))
    {
        if ($(event.target).closest('.fr-inbook-menu > .hidden-menu-button').length) return;
        $('.hidden-menu').animate({opacity:0},150,function(){
            $(this).slideUp(150, function(){
                $(this).removeClass('visible')
            })
        });
    }
});