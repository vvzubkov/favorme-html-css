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
            if($('.c-block > .content').length) $('.sidebar-nav-fixed').css({left:$('.c-block .content').offset().left-60}).show();
            $(sideBarButton).show();
        }
        else
        {
            $(sideBarButton).hide();
            $('.sidebar-nav-fixed').hide();
        }
    };
    $(sideBarButton).on('click', function (e){
        e.preventDefault();
        var pageYOffset = window.pageYOffset;
        $("body,html").animate({"scrollTop": 0}, pageYOffset/2);
    });
    /*--------------------   sideBar -------------------------*/

    $(function(){
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
    });

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
                $(this).css({overflow:'visible'});
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

    $(document).on('click', '.icon-el-trigger', function(e){
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

    $(document).on('click', '.dialog-button', function(e){
        e.preventDefault();
        if (!$(this).closest('.vp-content').next('.vp-dialog').hasClass('visible'))
        {
            $(this).closest('.vp-content').next('.vp-dialog').slideDown(500,function(){
                $(this).animate({opacity:1},300,function(){
                    $(this).addClass('visible')
                });
            })
        }
        else if ($(this).closest('.vp-content').next('.vp-dialog').hasClass('visible'))
        {
            $(this).closest('.vp-content').next('.vp-dialog').animate({opacity:0},300,function(){
                $(this).slideUp(500, function(){
                    $(this).removeClass('visible')
                })
            });
        }
    });

    $(document).on('click', '.sub-menu-trigger', function(e){
        e.preventDefault();
        var $this = $(this);
        var attr = $(this).attr('sub-menu');
        //var el = $(".sub-menu[sub-menu='" + attr + "']");
        var el = $(this).closest('.hidden-menu-row').find('.sub-menu');
        var el_list = $(".sub-menu");

        if (!el.hasClass('visible'))
        {
            el_list.animate({opacity:0},1,function(){
                $(this).slideUp(1, function(){
                    $(this).removeClass('visible')
                })
            });
            setTimeout(function(){
            el.slideDown(10, function(){
                setTimeout(function(){
                    console.log($this[0].offsetTop);
                    console.log($this[0].offsetLeft);
                    console.log($this[0].offsetHeight);
                    console.log($this[0].offsetWidth);
                    console.log(el[0].offsetWidth);
                    el.css({
                        top:$this[0].offsetTop + $this[0].offsetHeight,
                        left:$this[0].offsetLeft + $this[0].offsetWidth - el[0].offsetWidth + 55,
                        overflow:'visible'
                    });
                    el.animate({opacity:1}, 150,function(){
                        $(this).addClass('visible')
                    });
                },20)
                });
            },20);
        }
        else if (el.hasClass('visible'))
        {
            el.animate({opacity:0},150,function(){
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

    $(document).on('click', '.vp-photo-del', function(e){
        e.preventDefault();
        $(this).closest('.vp-photo-list-el').animate({opacity:0},300, function(){
            $(this).remove();
        });
    });

    $(document).on('click', '.shift-trigger', function(e){
        e.preventDefault();
        var _this = $(this);
        var shift = $(this).attr('shift');
        var block = $('.shift-c');
        for (var i=0; i < block.length; i++)
        {
            if (!$(block[i]).hasClass('shift-hidden'))
            {
                $(block[i]).animate({opacity:0}, 300, function(){
                    $(this).css({left:$(this).closest('.over-hidden')[0].offsetWidth}).addClass('shift-hidden');
                    $('.shift-c[shift="'+shift+'"]').animate({opacity:1, left:-1},300).removeClass('shift-hidden');
                })
            }
        }
    });

    $(function() {
        $('.tabs').on('click', 'li:not(.current)', function() {
            var _this = $(this),
                $attr = $(this).closest('.tabs').attr('tabs'),
                $box_c = $('.tab-box-c'),
                box = '.tab-box[tabs="'+$attr+'"]';

            _this.addClass('current').siblings().removeClass('current');
            if($box_c.length > 0 )
            {
                for (var i=0; i < $box_c.length; i++)
                {
                    $($box_c[i]).find($(box)).eq(_this.index())
                                        .animate({opacity:1}, 300, function(){
                                            $(this).removeClass('hidden')})
                                                    .siblings(box)
                                                    .animate({opacity:0}, 300, function(){$(this).addClass('hidden')});
                }
            }
            else $(box).eq(_this.index())
                .animate({opacity:1},300,
                    function(){
                        $(this).removeClass('hidden')})
                                .siblings(box)
                                .animate({opacity:0},300,function(){$(this).addClass('hidden')});
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
    if ($('.sub-menu').hasClass('visible'))
    {
        if ($(event.target).closest('.sub-menu-trigger').length) return;
        $('.sub-menu').animate({opacity:0},150,function(){
            $(this).slideUp(150, function(){
                $(this).removeClass('visible')
            })
        });
    }
});