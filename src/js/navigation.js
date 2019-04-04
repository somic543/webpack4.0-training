var navigation = {
    animation: function () {
        $('.navigation-container').removeClass('hidden').addClass('is-show');

        $('.navigation-container,.nav-bar').hover(function () {
            $(this).addClass('is-active');
        }, function () {
            $(this).removeClass('is-active');
        });

        $('.nav-bar > li').each(function (i) {
            $(this).on('click', function () {
                if ($(this).not('.active')) {
                    $('.nav-bar').find('.active').removeClass('active');
                    $(this).addClass('active');
                }
            });
            $(this).hover(
                function () {
                    $(this).addClass('current-item');
                },
                function () {
                    $(this).removeClass('current-item');
                }
            );
        });
    }
};

module.exports = navigation;