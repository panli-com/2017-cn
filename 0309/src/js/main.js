;
(function () {

    $(function () {



        $(".sp-main").on("click", ".click-a", function () {
            var _t = $(this),
                _src = _t.attr("data-src");
            _h = _t.attr("data-h");
            _w = _t.attr("data-w");

            var html = $(".layer-html-" + _src).html();
            PL.open({
                type: 1,
                title: false,
                closeBtn: false,
                area: [_w + 'px', _h + 'px'],
                shadeClose: true,
                skin: 'layui-Pan-nobg', //没有背景色
                content: html
            });
        });

        PD("body").on("click", ".lay-close", function () {
            PL.closeAll()
        })


    })


})();