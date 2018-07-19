
$(function () {
    var H = document.documentElement.clientHeight
    var cb = 0
    // 开始将所有元素隐藏
    // $(".loading").hide()
    $(".catalogue").hide()
    $(".header").hide()
    $(".one").hide()
    $(".two").hide()
    $(".there").hide()
    $(".four").hide()
    $(".five").hide()
    $(".header-flower").hide();
    $(".catalogue-flower").hide();
    $(".flower").hide()
    //主页
    setTimeout(function () {  // timeout 只执行一次 而interout一直循环多次
        if (!$(".run").is(":animated")) {
            //执行code
            $(".loading").hide()
            $(".header").fadeIn(3000)
            $(".header-flower").show();
        }
    }, 3000);
    if (isIphoneX()) {
        $('.header-text').css("margin-top", "13.19rem")
        $('.header-img').css("margin-top", "13.64rem")
        $('.run').css("margin-top", "6.3rem")
    }

    //获取元素的一些css
    // if(cb = 3){
    //     var marginTop = $('.header-text').css.marginTop
    //     console.log('marginTop')
    // }

    // setTimeout(() => {

    // }, 1000);

    //目录页
    $(".header-text").click(function () {
        $(".header-flower").hide();
        $(".header").hide()
        $(".catalogue-flower").show();
        $(".catalogue").fadeIn(3000);
        // 跳转页面
        $(".catalogue-one").click(function () {
            $(".catalogue").hide();
            $(".catalogue-flower").hide();
            $(".flower").show()
            $(".one").fadeIn(3000)
            $('body,html').animate({ scrollTop: '0' }, 0);
            var topone1 = $('.one-1').offset().top - H
            var topone2 = $('.one-2').offset().top - H
            var topone3 = $('.one-3').offset().top - H
            // var topone4 = $('.one-4').offset().top
            var topone5 = $('.one-5').offset().top - H
            var topone6 = $('.one-6').offset().top - H
            var topone7 = $('.one-7').offset().top - H
            var topone8 = $('.one-8').offset().top - H
            var topone9 = $('.one-9').offset().top - H
            var topone10 = $('.one-10').offset().top - H
            var topone11 = $('.one-11').offset().top - 10 - H
            Showhide(window, 'scroll', function () {
                var move = $(document).scrollTop()
                console.log(move)
                if (move >= topone1) {
                    $(".deity-flower-1").fadeOut(3000)
                    $(".one-1").fadeIn(1500)
                } else {
                    $(".one-1").fadeOut(3000)
                    $(".deity-flower-1").fadeIn(1500)
                }
                if (move >= topone2) {
                    $(".deity-flower-2").fadeOut(3000)
                    $(".one-2").fadeIn(1500)
                } else {
                    $(".one-2").fadeOut(3000)
                    $(".deity-flower-2").fadeIn(1500)
                }
                if (move >= topone3) {
                    $(".deity-flower-3").fadeOut(3000)
                    $(".one-3").fadeIn(1500)
                } else {
                    $(".one-3").fadeOut(3000)
                    $(".deity-flower-3").fadeIn(1500)
                }
                //   if (move >= topone4) {
                //       $(".deity-flower-4").fadeOut(3000)
                //       $(".one-4").fadeIn(1500)
                //   } else {
                //       $(".one-4").fadeOut(3000)
                //       $(".deity-flower-4").fadeIn(1500)
                //   }
                if (move >= topone5) {
                    $(".deity-flower-5").fadeOut(3000)
                    $(".one-5").fadeIn(1500)
                } else {
                    $(".one-5").fadeOut(3000)
                    $(".deity-flower-5").fadeIn(1500)
                }
                if (move >= topone6) {
                    $(".deity-flower-6").fadeOut(3000)
                    $(".one-6").fadeIn(1500)
                } else {
                    $(".one-6").fadeOut(3000)
                    $(".deity-flower-6").fadeIn(1500)
                }
                if (move >= topone7) {
                    $(".deity-flower-7").fadeOut(3000)
                    $(".one-7").fadeIn(1500)
                } else {
                    $(".one-7").fadeOut(3000)
                    $(".deity-flower-7").fadeIn(1500)
                }
                if (move >= topone8) {
                    $(".deity-flower-8").fadeOut(3000)
                    $(".one-8").fadeIn(1500)
                } else {
                    $(".one-8").fadeOut(3000)
                    $(".deity-flower-8").fadeIn(1500)
                }
                if (move >= topone9) {
                    $(".deity-flower-9").fadeOut(3000)
                    $(".one-9").fadeIn(1500)
                } else {
                    $(".one-9").fadeOut(3000)
                    $(".deity-flower-9").fadeIn(1500)
                }
                if (move >= topone10) {
                    $(".deity-flower-10").fadeOut(3000)
                    $(".one-10").fadeIn(1500)
                } else {
                    $(".one-10").fadeOut(3000)
                    $(".deity-flower-10").fadeIn(1500)
                }
                if (move >= topone11) {
                    $(".deity-flower-11").fadeOut(3000)
                    $(".one-11").fadeIn(1500)
                } else {
                    $(".one-11").fadeOut(3000)
                    $(".deity-flower-11").fadeIn(1500)
                }
            })
        })
        console.log(window.active)
        $(".catalogue-two").click(function () {
            $(".catalogue").hide();
            $(".catalogue-flower").hide();
            $(".flower").show()
            $(".two").fadeIn(3000)
            $('body,html').animate({ scrollTop: '0' }, 0);
            var top1 = $('.two-1').offset().top - H
            var top2 = $('.two-2').offset().top - H
            var top3 = $('.two-3').offset().top - H
            //   var top4 = $('.two-4').offset().top
            var top5 = $('.two-5').offset().top - H
            var top6 = $('.two-6').offset().top - H
            var top7 = $('.two-7').offset().top - H
            var top8 = $('.two-8').offset().top - H
            var top9 = $('.two-9').offset().top - H
            var top10 = $('.two-10').offset().top - H
            var top11 = $('.two-11').offset().top - H
            Showhide(window, 'scroll', function () {
                var move = $(document).scrollTop()
                console.log(move)
                if (move >= top1) {
                    $(".deity-flower1").fadeOut(3000)
                    $(".two-1").fadeIn(1500)
                } else {
                    $(".two-1").fadeOut(3000)
                    $(".deity-flower1").fadeIn(1500)
                }
                if (move >= top2) {
                    $(".deity-flower2").fadeOut(3000)
                    $(".two-2").fadeIn(1500)
                } else {
                    $(".two-2").fadeOut(3000)
                    $(".deity-flower2").fadeIn(1500)
                }
                if (move >= top3) {
                    $(".deity-flower3").fadeOut(3000)
                    $(".two-3").fadeIn(1500)
                } else {
                    $(".two-3").fadeOut(3000)
                    $(".deity-flower3").fadeIn(1500)
                }
                if (move >= top5) {
                    $(".deity-flower5").fadeOut(3000)
                    $(".two-5").fadeIn(1500)
                } else {
                    $(".two-5").fadeOut(3000)
                    $(".deity-flower5").fadeIn(1500)
                }
                if (move >= top6) {
                    $(".deity-flower6").fadeOut(3000)
                    $(".two-6").fadeIn(1500)
                } else {
                    $(".two-6").fadeOut(3000)
                    $(".deity-flower6").fadeIn(1500)
                }
                if (move >= top7) {
                    $(".deity-flower7").fadeOut(3000)
                    $(".two-7").fadeIn(1500)
                } else {
                    $(".two-7").fadeOut(3000)
                    $(".deity-flower7").fadeIn(1500)
                }
                if (move >= top8) {
                    $(".deity-flower8").fadeOut(3000)
                    $(".two-8").fadeIn(1500)
                } else {
                    $(".two-8").fadeOut(3000)
                    $(".deity-flower8").fadeIn(1500)
                }
                if (move >= top9) {
                    $(".deity-flower9").fadeOut(3000)
                    $(".two-9").fadeIn(1500)
                } else {
                    $(".two-9").fadeOut(3000)
                    $(".deity-flower9").fadeIn(1500)
                }
                if (move >= top10) {
                    $(".deity-flower10").fadeOut(3000)
                    $(".two-10").fadeIn(1500)
                } else {
                    $(".two-10").fadeOut(3000)
                    $(".deity-flower10").fadeIn(1500)
                }
                if (move >= top11) {
                    $(".deity-flower11").fadeOut(3000)
                    $(".two-11").fadeIn(1500)
                } else {
                    $(".two-11").fadeOut(3000)
                    $(".deity-flower11").fadeIn(1500)
                }
            })
        })

        $(".catalogue-there").click(function () {
            $(".catalogue").hide();
            $(".catalogue-flower").hide();
            $(".flower").show()
            $(".there").fadeIn(3000)
            $('body,html').animate({ scrollTop: '0' }, 0);
            var topthere1 = $('.there-1').offset().top - H
            var topthere2 = $('.there-2').offset().top - H
            var topthere3 = $('.there-3').offset().top - H
            // var topthere4 = $('.there-4').offset().top
            var topthere5 = $('.there-5').offset().top - H
            var topthere6 = $('.there-6').offset().top - H
            var topthere7 = $('.there-7').offset().top - H
            var topthere8 = $('.there-8').offset().top - H
            var topthere9 = $('.there-9').offset().top - H
            var topthere10 = $('.there-10').offset().top - H
            var topthere11 = $('.there-11').offset().top - H
            var topthere12 = $('.there-12').offset().top - H
            var topthere13 = $('.there-13').offset().top - H
            var topthere14 = $('.there-14').offset().top - H
            Showhide(window, 'scroll', function () {
                var move = $(document).scrollTop()
                console.log(move)
                if (move >= topthere1) {
                    $(".deity-flower---1").fadeOut(3000)
                    $(".there-1").fadeIn(1500)
                } else {
                    $(".there-1").fadeOut(3000)
                    $(".deity-flower---1").fadeIn(1500)
                }
                if (move >= topthere2) {
                    $(".deity-flower---2").fadeOut(3000)
                    $(".there-2").fadeIn(1500)
                } else {
                    $(".there-2").fadeOut(3000)
                    $(".deity-flower---2").fadeIn(1500)
                }
                if (move >= topthere3) {
                    $(".deity-flower---3").fadeOut(3000)
                    $(".there-3").fadeIn(1500)
                } else {
                    $(".there-3").fadeOut(3000)
                    $(".deity-flower---3").fadeIn(1500)
                }
                if (move >= topthere5) {
                    $(".deity-flower---5").fadeOut(3000)
                    $(".there-5").fadeIn(1500)
                } else {
                    $(".there-5").fadeOut(3000)
                    $(".deity-flower---5").fadeIn(1500)
                }
                if (move >= topthere6) {
                    $(".deity-flower---6").fadeOut(3000)
                    $(".there-6").fadeIn(1500)
                } else {
                    $(".there-6").fadeOut(3000)
                    $(".deity-flower---6").fadeIn(1500)
                }
                if (move >= topthere7) {
                    $(".deity-flower---7").fadeOut(3000)
                    $(".there-7").fadeIn(1500)
                } else {
                    $(".there-7").fadeOut(3000)
                    $(".deity-flower---7").fadeIn(1500)
                }
                if (move >= topthere8) {
                    $(".deity-flower---8").fadeOut(3000)
                    $(".there-8").fadeIn(1500)
                } else {
                    $(".there-8").fadeOut(3000)
                    $(".deity-flower---8").fadeIn(1500)
                }
                if (move >= topthere9) {
                    $(".deity-flower---9").fadeOut(3000)
                    $(".there-9").fadeIn(1500)
                } else {
                    $(".there-9").fadeOut(3000)
                    $(".deity-flower---9").fadeIn(1500)
                }
                if (move >= topthere10) {
                    $(".deity-flower---10").fadeOut(3000)
                    $(".there-10").fadeIn(1500)
                } else {
                    $(".there-10").fadeOut(3000)
                    $(".deity-flower---10").fadeIn(1500)
                }
                if (move >= topthere11) {
                    $(".deity-flower---11").fadeOut(3000)
                    $(".there-11").fadeIn(1500)
                } else {
                    $(".there-11").fadeOut(3000)
                    $(".deity-flower---11").fadeIn(1500)
                }
                if (move >= topthere12) {
                    $(".deity-flower---12").fadeOut(3000)
                    $(".there-12").fadeIn(1500)
                } else {
                    $(".there-12").fadeOut(3000)
                    $(".deity-flower---12").fadeIn(1500)
                }
                if (move >= topthere13) {
                    $(".deity-flower---13").fadeOut(3000)
                    $(".there-13").fadeIn(1500)
                } else {
                    $(".there-13").fadeOut(3000)
                    $(".deity-flower---13").fadeIn(1500)
                }
                if (move >= topthere14) {
                    $(".deity-flower---14").fadeOut(3000)
                    $(".there-14").fadeIn(1500)
                } else {
                    $(".there-14").fadeOut(3000)
                    $(".deity-flower---14").fadeIn(1500)
                }
            })
        })

        $(".catalogue-four").click(function () {
            $(".catalogue").hide();
            $(".catalogue-flower").hide();
            $(".flower").show()
            $(".four").fadeIn(3000)
            $('body,html').animate({ scrollTop: '0' }, 0);

            var topfour1 = $('.four-1').offset().top - H
            var topfour2 = $('.four-2').offset().top - H
            var topfour3 = $('.four-3').offset().top - H
            // var topfour4 = $('.four-4').offset().top
            var topfour5 = $('.four-5').offset().top - H
            var topfour6 = $('.four-6').offset().top - H
            var topfour7 = $('.four-7').offset().top - H
            var topfour8 = $('.four-8').offset().top - H
            var topfour9 = $('.four-9').offset().top - H
            var topfour10 = $('.four-10').offset().top - H
            var topfour11 = $('.four-11').offset().top - 20 - H
            Showhide(window, 'scroll', function () {

                var move = $(document).scrollTop()
                console.log(move)
                if (move >= topfour1) {
                    $(".deity-flower----1").fadeOut(3000)
                    $(".four-1").fadeIn(1500)
                } else {
                    $(".four-1").fadeOut(3000)
                    $(".deity-flower----1").fadeIn(1500)
                }
                if (move >= topfour2) {
                    $(".deity-flower----2").fadeOut(3000)
                    $(".four-2").fadeIn(1500)
                } else {
                    $(".four-2").fadeOut(3000)
                    $(".deity-flower----2").fadeIn(1500)
                }
                if (move >= topfour3) {
                    $(".deity-flower----3").fadeOut(3000)
                    $(".four-3").fadeIn(1500)
                } else {
                    $(".four-3").fadeOut(3000)
                    $(".deity-flower----3").fadeIn(1500)
                }
                if (move >= topfour5) {
                    $(".deity-flower----5").fadeOut(3000)
                    $(".four-5").fadeIn(1500)
                } else {
                    $(".four-5").fadeOut(3000)
                    $(".deity-flower----5").fadeIn(1500)
                }
                if (move >= topfour6) {
                    $(".deity-flower----6").fadeOut(3000)
                    $(".four-6").fadeIn(1500)
                } else {
                    $(".four-6").fadeOut(3000)
                    $(".deity-flower----6").fadeIn(1500)
                }
                if (move >= topfour7) {
                    $(".deity-flower----7").fadeOut(3000)
                    $(".four-7").fadeIn(1500)
                } else {
                    $(".four-7").fadeOut(3000)
                    $(".deity-flower----7").fadeIn(1500)
                }
                if (move >= topfour8) {
                    $(".deity-flower----8").fadeOut(3000)
                    $(".four-8").fadeIn(1500)
                } else {
                    $(".four-8").fadeOut(3000)
                    $(".deity-flower----8").fadeIn(1500)
                }
                if (move >= topfour9) {
                    $(".deity-flower----9").fadeOut(3000)
                    $(".four-9").fadeIn(1500)
                } else {
                    $(".four-9").fadeOut(3000)
                    $(".deity-flower----9").fadeIn(1500)
                }
                if (move >= topfour10) {
                    $(".deity-flower----10").fadeOut(3000)
                    $(".four-10").fadeIn(1500)
                } else {
                    $(".four-10").fadeOut(3000)
                    $(".deity-flower----10").fadeIn(1500)
                }
                if (move >= topfour11) {
                    $(".deity-flower----11").fadeOut(3000)
                    $(".four-11").fadeIn(1500)
                } else {
                    $(".four-11").fadeOut(3000)
                    $(".deity-flower----11").fadeIn(1500)
                }
            })
        })
        $(".catalogue-five").click(function () {
            $(".catalogue").hide();
            $(".catalogue-flower").hide();
            $(".flower").show()
            $(".five").fadeIn(3000)
            $('body,html').animate({ scrollTop: '0' }, 0);

            var topfive1 = $('.five-1').offset().top - H
            var topfive2 = $('.five-2').offset().top - H
            var topfive3 = $('.five-3').offset().top - H
            // var topfive4 = $('.five-4').offset().top
            var topfive5 = $('.five-5').offset().top - H
            var topfive6 = $('.five-6').offset().top - H
            var topfive7 = $('.five-7').offset().top - H
            var topfive8 = $('.five-8').offset().top - H
            var topfive9 = $('.five-9').offset().top - H
            var topfive10 = $('.five-10').offset().top - H
            var topfive11 = $('.five-11').offset().top - H
            var topfive12 = $('.five-12').offset().top - 100 - H
            Showhide(window, 'scroll', function () {

                var move = $(document).scrollTop()
                console.log(move)
                if (move >= topfive1) {
                    $(".deity-flower-----1").fadeOut(3000)
                    $(".five-1").fadeIn(1500)
                } else {
                    $(".five-1").fadeOut(3000)
                    $(".deity-flower-----1").fadeIn(1500)
                }
                if (move >= topfive2) {
                    $(".deity-flower-----2").fadeOut(3000)
                    $(".five-2").fadeIn(1500)
                } else {
                    $(".five-2").fadeOut(3000)
                    $(".deity-flower-----2").fadeIn(1500)
                }
                if (move >= topfive3) {
                    $(".deity-flower-----3").fadeOut(3000)
                    $(".five-3").fadeIn(1500)
                } else {
                    $(".five-3").fadeOut(3000)
                    $(".deity-flower-----3").fadeIn(1500)
                }
                //   if (move >= topfive4) {
                //       $(".deity-flower-----4").fadeOut(3000)
                //       $(".five-4").fadeIn(1500)
                //   } else {
                //       $(".five-4").fadeOut(3000)
                //       $(".deity-flower-----4").fadeIn(1500)
                //   }
                if (move >= topfive5) {
                    $(".deity-flower-----5").fadeOut(3000)
                    $(".five-5").fadeIn(1500)
                } else {
                    $(".five-5").fadeOut(3000)
                    $(".deity-flower-----5").fadeIn(1500)
                }
                if (move >= topfive6) {
                    $(".deity-flower-----6").fadeOut(3000)
                    $(".five-6").fadeIn(1500)
                } else {
                    $(".five-6").fadeOut(3000)
                    $(".deity-flower-----6").fadeIn(1500)
                }
                if (move >= topfive7) {
                    $(".deity-flower-----7").fadeOut(3000)
                    $(".five-7").fadeIn(1500)
                } else {
                    $(".five-7").fadeOut(3000)
                    $(".deity-flower-----7").fadeIn(1500)
                }
                if (move >= topfive8) {
                    $(".deity-flower-----8").fadeOut(3000)
                    $(".five-8").fadeIn(1500)
                } else {
                    $(".five-8").fadeOut(3000)
                    $(".deity-flower-----8").fadeIn(1500)
                }
                if (move >= topfive9) {
                    $(".deity-flower-----9").fadeOut(3000)
                    $(".five-9").fadeIn(1500)
                } else {
                    $(".five-9").fadeOut(3000)
                    $(".deity-flower-----9").fadeIn(1500)
                }
                if (move >= topfive10) {
                    $(".deity-flower-----10").fadeOut(3000)
                    $(".five-10").fadeIn(1500)
                } else {
                    $(".five-10").fadeOut(3000)
                    $(".deity-flower-----10").fadeIn(1500)
                }
                if (move >= topfive11) {
                    $(".deity-flower-----11").fadeOut(3000)
                    $(".five-11").fadeIn(1500)
                } else {
                    $(".five-11").fadeOut(3000)
                    $(".deity-flower-----11").fadeIn(1500)
                }
                if (move >= topfive12) {
                    $(".deity-flower-----12").fadeOut(3000)
                    $(".five-12").fadeIn(1500)
                } else {
                    $(".five-12").fadeOut(3000)
                    $(".deity-flower-----12").fadeIn(1500)
                }
            })
        })
    })
    //返回页面
    $('.return').click(function () {
        $('.one').hide()
        $('.two').hide()
        $('.there').hide()
        $('.four').hide()
        $('.five').hide()
        $(".flower").hide()
        $(".catalogue-flower").show()
        $('.catalogue').fadeIn(3000)

    })
    // 音乐的自动播放

    autoPlayMusic();
    audioAutoPlay();

    //判断x然后执行函数
    // if(isIphoneX()){
    //     $(".header-text").style.marginTop

    // }



    // 测试代码
    // $(".loading").hide()
    // $(".catalogue").hide()
    // $(".header").hide()
    // $(".one").hide()
    // $(".two").hide()
    // $(".there").hide()
    // $(".four").hide()
    // // $(".five").hide()
    // $(".header-flower").hide();
    // $(".catalogue-flower").hide();
    // // $(".flower").hide()

    //音乐功能
    src = $('#audio').attr('src')
    console.log(src)
    $(".catalogue-music").click(function () {
        console.log("点击了")
        if (src) {
            $('#audio').attr('src', '')
            src = ''
            console.log("暂停")
            $(".catalogue-music").toggleClass("pused");
            $('.catalogue-music').attr('src', '../image/music2.png')
        }
        else {
            $('#audio').attr('src', 'http://go.163.com/2018/0209/mengniu/audio/bgm.mp3')
            $('.catalogue-music').attr('src', '../image/music.png')
            src = $('#audio').attr('src')
            console.log("开始")
            $(".catalogue-music").toggleClass("pused");
        }
    })

});
//判断手机横竖屏事件


var evt = "onorientationchange" in window ? "orientationchange" : "resize";
window.addEventListener(evt, resize, false);
function resize(fals) {
    if (window.orientation == 0 || window.orientation == 180) {
        document.getElementById("back").style.visibility = "hidden"
        // document.getElementById("backImg").style.visibility = "hidden"
    } else {
        var doc = document.documentElement;
        relHeight = (doc.clientHeight > doc.scrollHeight) ? doc.clientHeight :

            doc.scrollHeight;//获取屏幕高度和当前页面高度中的较大值
        console.log(relHeight)
        document.getElementById('back').style.height = relHeight + 'px';
        document.getElementById("back").style.visibility = "visible"
        alert("请调整到适合屏幕阅读的方向")
        // document.getElementById("backImg").style.visibility = "visible"
    }
}
resize(true);

//音乐事件
function audioAutoPlay() {
    var audio = document.getElementById('audio');
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}
// 音乐播放
function autoPlayMusic() {
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    function musicInBrowserHandler() {
        musicPlay(true);
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }
    document.body.addEventListener('touchstart', musicInBrowserHandler);
    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        musicPlay(true);
        document.addEventListener("WeixinJSBridgeReady", function () {
            musicPlay(true);
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
function musicPlay(isPlay) {
    var media = document.querySelector('#audio');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}
//监听事件
function Showhide(obj, type, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + type, function () {
            fn.call(obj);
        })
    } else {
        obj.addEventListener(type, fn, false);
    }
}
//判断ipone x
function isIphoneX() {
    return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width ==

        375)
}
//获取元素的css样式
