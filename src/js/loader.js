var loader = {
    animation: function () {
        var self = this;

        var promise = new Promise(resolve => {
            var startLoading = setInterval(() => {
                var percent = parseFloat($('.loading-screen').find('.inside-circle').html());
                percent += 1;

                if (percent > 20 && percent < 90 && self.checkImageLoaded()) {
                    percent = 90;
                    $('.loading-screen').find('.circle-wrap .circle .mask.full,.circle-wrap .circle .fill')
                        .css('animation-duration', '2s');
                }

                $('.loading-screen').find('.inside-circle').html(percent.toString() + " %");
                if (percent >= 100 && self.checkImageLoaded()) {
                    clearInterval(startLoading);
                    return self.finishLoading(resolve);
                };

            }, 50);
        });
        return promise;
    },

    checkImageLoaded: function () {
        return document.readyState === "complete";
    },

    finishLoading: function (resolve) {
        var animationEvent = require('./utils/animation');
        $('.loading-screen').addClass('is-active');
        $('.loading-finished').on(animationEvent, function () {
            $('.loading-screen').css('display', 'none');
            $('#body.lemonlemon').removeClass('hidden'); 
            return resolve('completed');
        });
    }
};

module.exports = loader;