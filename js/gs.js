/**
 * Created by Bobby on 21.01.2015.
 */

$(window).on('load',function(){
    var owl_galleryBox = $('.galleryBox');
    var owl_galleryDots = $('.galleryDots');

    owl_galleryBox.owlCarousel({
        itemClass:'item',
        autoHeight:true,
        loop:true,
        margin:40,
        nav:false,
        dots:false,
        animateOut: 'fadeOut',
        smartSpeed:450,
        items:1
    });

    owl_galleryDots.owlCarousel({
        itemClass:'item',
        loop:false,
        margin:7,
        nav:false,
        dots:false,
        items:12
    });

    owl_galleryDots.find('.item').on('click', function(e){
        $(this).closest('.gallerySlider').find('.galleryBox').trigger('to.owl.carousel', [$(this).index(),300,true]);
    });

    $('.galleryNav > .next').click(function() {
        $(this).closest('.gallerySlider').find('.galleryBox').trigger('next.owl.carousel', [300]);
    });

    $('.galleryNav > .prev').click(function() {
        $(this).closest('.gallerySlider').find('.galleryBox').trigger('prev.owl.carousel', [300]);
    });

    owl_galleryBox.on('changed.owl.carousel ',
        function(e) {
            var $this = $(this);
            var $nav = $(this).closest('.gallerySlider').find('.galleryNav > .prev, .galleryNav > .next');
            var $galleryBox = $(this).closest('.gallerySlider').find('.galleryBox');
            var $galleryBoxItem = $galleryBox.find('.item');
            var $galleryDots = $(this).closest('.gallerySlider').find('.galleryDots');
            var $galleryDotsItem = $galleryDots.find('.item');
            var $galleryDotsLength = $galleryDots.find('.item').length;

            setTimeout(function(e){
                var i = 0;
                for (i; i < $galleryBoxItem.length; i++)
                {
                    if ($($galleryBoxItem[i]).hasClass('active'))
                    {
                        $nav.animate({height:$($galleryBoxItem[i]).find('div').height()},10);

                        $this.closest('.md-modal').find('.galleryIndex').html($($galleryBoxItem[i]).find('div').attr('data-pos'));

                        var $galleryDotsCurIndex1 = $galleryDots.find('.item').index($('.current'));

                        $($galleryDotsItem[$($galleryBoxItem[i]).find('div').attr('data-pos')-1]).addClass('current').siblings().removeClass('current');

                        var $galleryDotsCurIndex2 = $galleryDots.find('.item').index($('.current'));

                            if(($galleryDotsCurIndex1 == 0) && ($galleryDotsCurIndex2+1 == $galleryDotsLength)) {
                                $galleryDots.trigger('to.owl.carousel', [$galleryDotsLength-1, 300, true]);
                            }
                            else if(($galleryDotsCurIndex2 == 0) && ($galleryDotsCurIndex1+1 == $galleryDotsLength)){
                                $galleryDots.trigger('to.owl.carousel', [0, 300, true]);
                            }
                            else if (!$($galleryDotsItem[$($galleryBoxItem[i]).find('div').attr('data-pos')]).hasClass('active')){
                                $galleryDots.trigger('next.owl.carousel', [300])
                            }
                            else if (!$($galleryDotsItem[$($galleryBoxItem[i]).find('div').attr('data-pos')-2]).hasClass('active')){
                                $galleryDots.trigger('prev.owl.carousel', [300])
                            }

                        $this.closest('.md-modal').find('.gallery-button.close')
                            .css({
                                height:$this.closest('.md-content').height()
                            });
                        $this.closest('.md-modal').find('.galleryNav > .prev')
                            .css({
                            height:$this.closest('.md-content').height()
                        });
                    }
                }
            }, 350);
        });

    $('.md-gallery').on('click', function(e){
        var $modal = $('#'+$(this).attr('data-modal'));
        var $item = $modal.find('.galleryBox .item');
        $modal.find('.galleryBox').trigger('to.owl.carousel', [$(this).attr('data-pos')-1, false, true]);

        setTimeout(function(e){
            for (var i=0; i < $item.length; i++)
            {
                if ($($item[i]).hasClass('active'))
                {
                    $modal.find('.galleryNav > .next').css({height:$($item[i]).find('div').height()});
                }
            }
            $modal.find('.gallery-button.close')
                .css({
                    width:(window.innerWidth - $modal.find('.md-content').width())/2,
                    height:$modal.find('.md-content').height()
                });
            $modal.find('.galleryNav > .prev')
                .css({
                width:(window.innerWidth - $modal.find('.md-content').width())/2,
                height:$modal.find('.md-content').height(),
                left:(window.innerWidth - $modal.find('.md-content').width())/(-2)
                });
            $modal.find('.galleryLength').html($modal.find('.galleryBox .item:not(.cloned)').length);
        },50);
        $modal.find('.galleryIndex').html($(this).attr('data-pos'));
        $($modal.find('.galleryDots .item')[$(this).attr('data-pos')-1]).addClass('current').siblings().removeClass('current');
    });

});
