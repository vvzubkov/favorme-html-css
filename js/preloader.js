var ngStatus = false;
$(document).ready(function () {
    $('#wrap').css({opacity: 0});
    $('#footer').css({opacity: 0});
});

$(window).on('load', function () {

    var mobNumber = $(".mobile-number");
    mobNumber.intlTelInput({
        defaultCountry: "auto",
        preferredCountries: ["ru", "by", "ua"],
        utilsScript: "js/add/utils.js"
    });
    mobNumber.on("invalidkey", function () {
        var _this = $(this);
        _this.addClass("input-alert");
        setTimeout(function () {
            _this.removeClass("input-alert");
        }, 100);
    });

    $('.rect-check').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

    function frformat(state) {
        return "<p>" + state.id + " " + $(state.element).attr('data-country') + "</p>";
    }

    function fsformat(state) {
        return state.id;
    }

    $('#locationFilter').select2(
        {
            formatResult: frformat,
            formatSelection: fsformat,
            formatNoMatches: 'Пусто',
            placeholder: 'Поиск города',
            allowClear: true
        }
    );

    $('#dateFilter').select2({
        placeholder: "Не выбрано",
        allowClear: true
    });
    $('#countryFilter').select2({
        formatNoMatches: 'Нет совпадений',
        placeholder: "Выберите страну",
        allowClear: true
    });
    $('#cityFilter').select2({
        formatNoMatches: 'Нет совпадений',
        formatResult: frformat,
        formatSelection: fsformat,
        placeholder: "Выберите город",
        allowClear: true
    });

    $(document).find('.select2-results').addClass('scrollbar-dynamic').scrollbar();
    $(document).find('.country-list').addClass('scrollbar-dynamic').scrollbar();
    $(document).find('.country-list').addClass('scrollbar-dynamic').scrollbar();

    $('.scroll-list').addClass('scrollbar-dynamic').scrollbar();

    $(function(){
        var block = $('.shift-c');
        for (var i=0; i < block.length; i++)
        {
            if ($(block[i]).hasClass('shift-hidden'))
                $(block[i]).css({top:0,left:$(block[i]).closest('.over-hidden')[0].offsetWidth, opacity:0});
            else $(block[i]).css({top:0,left:'-1px'});
        }
    });

    $(function () {
        var $this = $('.modal-abs');
        if ($this.hasClass('modal-abs-r')) $this.css({
            left: $this.closest('.md-content').width() + 5 + 'px',
            top: $this.closest('.md-content').offset.top
        })
        else if ($this.hasClass('modal-abs-l')) $this.css({left: ($this.closest('.md-content').width() + 5) * (-1) + 'px'})
    });

    NProgress.start();
    NProgress.configure({speed: 500});
    setTimeout(function () {
        $('.fade').removeClass('out');
        $('#wrap').animate({opacity: 1}, 500, function () {
        });
        $('#footer').animate({opacity: 1}, 500, function () {
        });
        $('#search > .search-line').focus();

        NProgress.done();
        ngStatus = true;
    }, 500);

    $('#sTop-button').css({width: (window.innerWidth - 680) / 2});
});
