//main  

// var notyf = new Notyf();

;
(function () {
    // Create an instance of Notyf
    // var notyf = new Notyf(); 

    window.onload = function () {



        PD(".chat").on("click", ".click-a", function () {
            var _em = PD(this).attr("data-src")
            PL.open({
                type: 1, //1代表页面层
                content: PD(".main-"+ _em ).html()
            })
        })

        PD("body").on("click", ".lay-close", function () {
            PL.closeAll()
        })

    }
})()