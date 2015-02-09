$(window).on('load',function(){
    var owl = $('.index-carousel');
    var $autoplay = true;
    var $first = true;

    owl.on('initialized.owl.carousel ',
        function(e) {
            //console.log($(this));
            //console.log(e.item.index);
            //console.log(e.item.count);
            //console.log(e.item.size);
            (e.item.index == 0) ? $('.carousel-nav .prev').removeClass('active') : $('.carousel-nav .prev').addClass('active');
            (e.item.count - e.item.index == e.page.size) ? $('.carousel-nav .next').removeClass('active') : $('.carousel-nav .next').addClass('active');
        });
    owl.on('drag.owl.carousel ',
        function(e) {
            //console.log($(this));
            //console.log(e.item.index);
            //console.log(e.item.count);
            //console.log(e.item.size);
            (e.item.index == 0) ? $('.carousel-nav .prev').removeClass('active') : $('.carousel-nav .prev').addClass('active');
            (e.item.count - e.item.index == e.page.size) ? $('.carousel-nav .next').removeClass('active') : $('.carousel-nav .next').addClass('active');
            $autoplay = false;
        });
    owl.on('changed.owl.carousel ',
        function(e) {
            console.log(e.item.index);
            console.log(e.item.count);
            console.log(e.item.size);
            (e.item.index == 0) ? $('.carousel-nav .prev').removeClass('active') : $('.carousel-nav .prev').addClass('active');
            (e.item.count - e.item.index == e.page.size) ? $('.carousel-nav .next').removeClass('active') : $('.carousel-nav .next').addClass('active');

            $('.slide1 .grayscale.img1').css({opacity: 0.1});
            $('.slide1 .img2').css({opacity: 0, top:0});
            $('.slide1 .img3').css({opacity: 0, top:0});
            $('.slide1 .img4').css({opacity: 0, top:0});
            $('.slide1 .text1').css({opacity: 0});
            $('.slide1 .text2').css({opacity: 0});
            $('.slide1 .text3').css({opacity: 0});

            $('.slide2 .blue-border').animate({opacity:0},10);
            $('.slide2 .v-line').animate({height:0},10);
            $('.slide2 .v-circle').animate({opacity:0},10);
            $('.slide2 .g-line').animate({width:0,left:0},10);
            $('.slide2 .g-circle').animate({opacity:0},10);

            $('.slide3 .g-line').animate({width:0},10);
            $('.slide3 .g-circle').animate({opacity:0},10);
            $('.slide3 .v-line').animate({height:0},10);
            $('.slide3 .v-circle').animate({opacity:0},10);
            $('.slide3 .img2').animate({opacity:0},10);
            $('.slide3 .img3').animate({opacity:0},10);

            $('.slide4 .v-line').animate({height:0},10);
            $('.slide4 .v-circle').animate({opacity:0},10);
            $('.slide4 .img2').animate({opacity:0},10);
            $('.slide4 .search-line').animate({opacity:0},10);
            $('.slide4 .g-line').animate({width:0},10);
            $('.slide4 .g-circle').animate({opacity:0},10);
            $('.slide4 .img3').animate({opacity:0},10);
            $('.slide4 .v-line-2').animate({height:0},10);
            $('.slide4 .v-circle-2').animate({opacity:0},10);

            $('.slide5 .img1').animate({opacity:0},10);
            $('.slide5 .img2').animate({opacity:0},10);
            $('.slide5 .img3').animate({opacity:0,top:0,left:0},10);
            $('.slide5 .img4').animate({opacity:0},10);
            $('.slide5 .img5').animate({opacity:0},10);
            $('.slide5 .v-circle-1').animate({opacity:0},10);
            $('.slide5 .v-circle-2').animate({opacity:0},10);
            $('.slide5 .v-circle-3').animate({opacity:0},10);
            $('.slide5 .v-line-1').animate({height:0,top:0},10);
            $('.slide5 .v-line-2').animate({height:0,top:0},10);
            $('.slide5 .v-line-3').animate({height:0,top:0},10);
            $('.slide5 .g-line-1').animate({width:0},10);
            $('.slide5 .g-circle-1').animate({opacity:0},10);
            $('.slide5 .text1').animate({opacity:0},10);
            $('.slide5 .text2').animate({opacity:0},10);
            $('.slide5 .text3').animate({opacity:0},10);
            $('.slide5 .text4').animate({opacity:0},10);

            $('.slide6 .img1').animate({opacity:0},10);
            $('.slide6 .img2').animate({opacity:0},10);
            $('.slide6 .img2-1').animate({left:-55},10);
            $('.slide6 .img3').animate({opacity:0},10);
            $('.slide6 .img3-1').animate({opacity:0},10);
            $('.slide6 .img4').animate({opacity:0},10);
            $('.slide6 .img5').animate({opacity:0},10);
            $('.slide6 .img6').animate({opacity:0},10);
            $('.slide6 .push1').animate({opacity:0},10);
            $('.slide6 .push2').animate({opacity:0},10);
            $('.slide6 .push3').animate({opacity:0},10);
            $('.slide6 .push4').animate({opacity:0},10);
            $('.slide6 .text1').animate({opacity:0},10);
            $('.slide6 .text2').animate({opacity:0},10);

            switch (e.item.index+1) {
                case 1:
                    $('.slide1 .grayscale.img1').animate({opacity: 0.75}, {
                        duration: 5000,
                        step: function (now, fx) {
                            $(this).css({'filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                            $(this).css({'-moz-filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                            $(this).css({'-webkit-filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                            $(this).css({'-ms-filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                            $(this).css({'-o-filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                        }
                    });
                    setTimeout(function(){
                        $('.slide1 .text1').animate({opacity:1},500, function(){
                            $('.slide1 .img2').animate({opacity:1},{
                                duration:500,
                                step:function(now,fx){
                                    $(this).css({transform:'scale('+now+')'});
                                }
                            });
                            $('.slide1 .img2').animate({top:2},100, function(){
                                $(this).animate({top:-2}, 100, function(){
                                    $(this).animate({top:2},100, function(){
                                        $(this).animate({top:0},100, function(){
                                            setTimeout(function(){
                                                $('.slide1 .text2').animate({opacity:1},500, function(){
                                                    $('.slide1 .img3').animate({opacity:1},{
                                                        duration:500,
                                                        step:function(now,fx){
                                                            $(this).css({transform:'scale('+now+')'});
                                                        }
                                                    });
                                                    $('.slide1 .img3').animate({top:2},100, function(){
                                                        $(this).animate({top:-2}, 100, function(){
                                                            $(this).animate({top:2},100, function(){
                                                                $(this).animate({top:0},100, function(){
                                                                    setTimeout(function(){
                                                                        $('.slide1 .text3').animate({opacity:1},500, function(){
                                                                            $('.slide1 .img4').animate({opacity:1},{
                                                                                duration:500,
                                                                                step:function(now,fx){
                                                                                    $(this).css({transform:'scale('+now+')'});
                                                                                }
                                                                            });
                                                                            $('.slide1 .img4').animate({top:2},100, function(){
                                                                                $first = false;
                                                                                $(this).animate({top:-2}, 100, function(){
                                                                                    $(this).animate({top:2},100, function(){
                                                                                        $(this).animate({top:0},100, function(){
                                                                                            setTimeout(function(){
                                                                                                if ($autoplay) owl.trigger('next.owl.carousel', [500])
                                                                                            },3000);
                                                                                        })
                                                                                    })
                                                                                })
                                                                            });
                                                                        });
                                                                    },250);
                                                                })
                                                            })
                                                        })
                                                    });
                                                });
                                            },250);
                                        })
                                    })
                                })
                            });
                        });
                    },3000);
                    break;
                case 2:
                    $first = true;
                    setTimeout(function(){
                        $('.slide2 .v-line').animate({height:57},750);
                        $('.slide2 .v-circle').animate({opacity:1},750);
                    },500);
                    setTimeout(function(){
                        $('.slide2 .blue-border').animate({opacity:1},500, function(){
                            setTimeout(function(){
                                $('.slide2 .g-line').animate({width:63,left:-63},750);
                                $('.slide2 .g-circle').animate({opacity:1},750, function(){
                                    setTimeout(function(){
                                        if ($autoplay) owl.trigger('next.owl.carousel', [500])
                                    },3000);
                                });
                            },250);
                        });
                    },1000);
                    break;
                case 3:
                    setTimeout(function(){
                        $('.slide3 .v-line').animate({height:60},750);
                        $('.slide3 .v-circle').animate({opacity:1},750);
                    },500);
                    setTimeout(function(){
                        $('.slide3 .img2').animate({opacity:1},{
                            duration:500,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            }
                        });
                    },1000);
                    setTimeout(function(){
                        $('.slide3 .g-line').animate({width:85},750);
                        $('.slide3 .g-circle').animate({opacity:1},750);
                    },1500);
                    setTimeout(function(){
                        $('.slide3 .img3').animate({opacity:1},{
                            duration:500,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            },
                            complete: function(){
                                setTimeout(function(){
                                    if ($autoplay) owl.trigger('next.owl.carousel', [500])
                                },3000);
                            }
                        });
                    },1750);
                    break;
                case 4:
                    setTimeout(function(){
                        $('.slide4 .v-line').animate({height:36},750);
                        $('.slide4 .v-circle').animate({opacity:1},750);
                    },500);
                    setTimeout(function(){
                        $('.slide4 .img2').animate({opacity:1},{
                            duration:500,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            }
                        });
                    },1000);
                    setTimeout(function(){
                        $('.slide4 .g-line').animate({width:18},750);
                        $('.slide4 .g-circle').animate({opacity:1},750);
                    },1500);
                    setTimeout(function(){
                        $('.slide4 .img3').animate({opacity:1},{
                            duration:500,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+ now +')'});
                            }
                        });
                    },1750);
                    setTimeout(function(){
                        $('.slide4 .v-circle-2').animate({opacity:1},750);
                        $('.slide4 .v-line-2').animate({height:71},750, function(){
                            $('.slide4 .search-line').animate({opacity:10},1000);
                            $(function(){
                                var a = new String;
                                a = $('.slide4 .search-line').text();
                                $('.slide4 .search-line').text('');
                                var c = a.length;
                                j = 0;
                                var printText = setInterval(function(){
                                    if(j < c){
                                        $('.slide4 .search-line').text($('.slide4 .search-line').text()+a[j]);
                                        j = j + 1;
                                    }
                                    else if (j = c)
                                    {
                                        clearInterval(printText);
                                        setTimeout(function(){
                                            if ($autoplay) owl.trigger('next.owl.carousel', [500])
                                        }, 3000);
                                    }
                                },150);
                            });
                        });
                    },2250);
                    break;
                case 5:
                    setTimeout(function(){
                        $('.slide5 .img1').animate({opacity:1},{
                            duration:750,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            }
                        });
                    },750);
                    setTimeout(function(){
                        $('.slide5 .text1').animate({opacity:1},{
                            duration:400,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            },
                            complete: function(){
                                $('.slide5 .v-line-1').animate({height:33,top:-33},750);
                                $('.slide5 .v-circle-1').animate({opacity:1},750);
                            }
                        });
                    },1750);
                    setTimeout(function(){
                        $('.slide5 .text2').animate({opacity:1},{
                            duration:400,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            },
                            complete: function(){
                                $('.slide5 .v-line-2').animate({height:33,top:-33},750);
                                $('.slide5 .v-circle-2').animate({opacity:1},750);
                            }
                        });
                    },2750);
                    setTimeout(function(){
                        $('.slide5 .text3').animate({opacity:1},{
                            duration:400,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            },
                            complete: function(){
                                $('.slide5 .v-line-3').animate({height:33,top:-33},750);
                                $('.slide5 .v-circle-3').animate({opacity:1},750);
                            }
                        });
                    },3750);
                    setTimeout(function(){
                        $('.slide5 .img3').animate({opacity:1,top:200,left:418},1000, function(){
                            $('.slide5 .img4').animate({opacity:1},500);
                            setTimeout(function(){
                                $('.slide5 .img3').css({transform:'scale(0.75)'});
                            },300);
                            setTimeout(function(){
                                $('.slide5 .img3').css({transform:'scale(1)'});
                                $('.slide5 .img4').animate({opacity:0},750);
                                $('.slide5 .img2').animate({opacity:1},750);
                                setTimeout(function(){

                                    $('.slide5 .text4').animate({opacity:1},{
                                        duration:400,
                                        step:function(now,fx){
                                            $(this).css({transform:'scale('+now+')'});
                                        },
                                        complete: function(){
                                            $('.slide5 .g-line-1').animate({width:45},750);
                                            $('.slide5 .g-circle-1').animate({opacity:1},750);
                                            setTimeout(function(){
                                                $('.slide5 .img5').animate({opacity:1},{
                                                    duration:300,
                                                    step:function(now,fx){
                                                        $(this).css({transform:'scale('+now+')'});
                                                    },
                                                    complete: function(){
                                                        setTimeout(function(){
                                                            if ($autoplay) owl.trigger('next.owl.carousel', [500])
                                                        },3000);
                                                    }
                                                });
                                            },500)
                                        }
                                    });
                                },750)
                            },600);

                        })
                    },6000);
                    break;
                case 6:
                    setTimeout(function(){
                        $('.slide6 .img1').animate({opacity:1},{
                            duration:750,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            },
                            complete: function(){
                                $('.slide6 .text1').animate({opacity:1},500, function(){
                                    $('.slide6 .push1').animate({opacity:1},300,function(){
                                        $('.slide6 .push2').animate({opacity:1},300,function(){
                                            $('.slide6 .push3').animate({opacity:1},300,function(){
                                                $('.slide6 .push4').animate({opacity:1},300)
                                            })
                                        })
                                    })
                                });
                            }
                        });
                    },750);
                    setTimeout(function(){
                        $('.slide6 .img2').animate({opacity:1},{
                            duration:750,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            },
                            complete:function(){
                                $('.slide6 .img2-1').animate({left:0},750)
                            }
                        });
                    },2500);
                    setTimeout(function(){
                        $('.slide6 .img3').animate({opacity:1},{
                            duration:750,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            },
                            complete:function(){
                                $('.slide6 .img3-1').animate({opacity: 0.75}, {
                                    duration: 2500,
                                    step: function (now, fx) {
                                        $(this).css({'filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                                        $(this).css({'-moz-filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                                        $(this).css({'-webkit-filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                                        $(this).css({'-ms-filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                                        $(this).css({'-o-filter': 'grayscale(' + (100 - (now * 100)) + '%)'});
                                    }
                                })
                            }
                        });
                    },3750);
                    setTimeout(function(){
                        $('.slide6 .img4').animate({opacity:1},{
                            duration:750,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            }
                        });
                    },4500);
                    setTimeout(function(){
                        $('.slide6 .text2').animate({opacity:1},{
                            duration:750,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            }
                        });
                    },6000);
                    setTimeout(function(){
                        $('.slide6 .img5').animate({opacity:1},{
                            duration:750,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                            }
                        });
                        $('.slide6 .img6').animate({opacity:1},{
                            duration:750,
                            step:function(now,fx){
                                $(this).css({transform:'scale('+now+')'});
                                setTimeout(function(){
                                    if ($autoplay) owl.trigger('to.owl.carousel', [0, 500])
                                },3000);
                            }
                        });
                    },6500);
                    break;
            }
        });

    owl.owlCarousel({
        themeClass:'index-carousel',
        dotsClass:'carousel-dots',
        controlsClass:'carousel-controls',
        navContainerClass:'carousel-nav',
        navClass:['prev','next'],
        dotClass:'dot',
        navText:['<span class="dib va-middleiddle"><i class="fa fa-angle-left"></i></span> <span class="dib w-auto pad0 va-middle fz11">Назад</span>',
            '<span class="dib w-auto pad0 va-middleiddle fz11">Далее</span> <span class="dib va-middle"><i class="fa fa-angle-right"></i></span>'],
        loop:false,
        margin:0,
        nav:true,
        dots:true,
        dotsEach:1,
        items:1
    });

    $('.carousel-nav .next').on('click', function(e) {
        $autoplay = false;
    });
    $('.carousel-nav .prev').on('click', function(e) {
        $autoplay = false;
    });
    $('.carousel-dots .dot').on('click', function(e) {
        $autoplay = false;
    });

});