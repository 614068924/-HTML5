$(function () {
    console.log(active)
 if(active==1000){
     
    console.log(active)
    var topone1 = $('.one-1').offset().top
    var topone2 = $('.one-2').offset().top
    var topone3 = $('.one-3').offset().top
    // var topone4 = $('.one-4').offset().top
    var topone5 = $('.one-5').offset().top
    var topone6 = $('.one-6').offset().top
    var topone7 = $('.one-7').offset().top
    var topone8 = $('.one-8').offset().top
    var topone9 = $('.one-9').offset().top
    var topone10 = $('.one-10').offset().top
    var topone11 = $('.one-11').offset().top - 1


    var top1 = $('.two-1').offset().top
    var top2 = $('.two-2').offset().top
    var top3 = $('.two-3').offset().top
    //   var top4 = $('.two-4').offset().top
    var top5 = $('.two-5').offset().top
    var top6 = $('.two-6').offset().top
    var top7 = $('.two-7').offset().top
    var top8 = $('.two-8').offset().top
    var top9 = $('.two-9').offset().top
    var top10 = $('.two-10').offset().top
    var top11 = $('.two-11').offset().top



    var topthere1 = $('.there-1').offset().top
    var topthere2 = $('.there-2').offset().top
    var topthere3 = $('.there-3').offset().top
    // var topthere4 = $('.there-4').offset().top
    var topthere5 = $('.there-5').offset().top
    var topthere6 = $('.there-6').offset().top
    var topthere7 = $('.there-7').offset().top
    var topthere8 = $('.there-8').offset().top
    var topthere9 = $('.there-9').offset().top
    var topthere10 = $('.there-10').offset().top
    var topthere11 = $('.there-11').offset().top
    var topthere12 = $('.there-12').offset().top
    var topthere13 = $('.there-13').offset().top
    var topthere14 = $('.there-14').offset().top


    var topfour1 = $('.four-1').offset().top
    var topfour2 = $('.four-2').offset().top
    var topfour3 = $('.four-3').offset().top
    // var topfour4 = $('.four-4').offset().top
    var topfour5 = $('.four-5').offset().top
    var topfour6 = $('.four-6').offset().top
    var topfour7 = $('.four-7').offset().top
    var topfour8 = $('.four-8').offset().top
    var topfour9 = $('.four-9').offset().top
    var topfour10 = $('.four-10').offset().top
    var topfour11 = $('.four-11').offset().top-20

    var topfive1 = $('.five-1').offset().top
    var topfive2 = $('.five-2').offset().top
    var topfive3 = $('.five-3').offset().top
    // var topfive4 = $('.five-4').offset().top
    var topfive5 = $('.five-5').offset().top
    var topfive6 = $('.five-6').offset().top
    var topfive7 = $('.five-7').offset().top
    var topfive8 = $('.five-8').offset().top
    var topfive9 = $('.five-9').offset().top
    var topfive10 = $('.five-10').offset().top
    var topfive11 = $('.five-11').offset().top
    var topfive12 = $('.five-12').offset().top-150

  console.log(active)
  console.log(topone1)
  console.log(topfive12)
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

         //   第二个图片
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
         //第三个图片 
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
         //第四个图片
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

         //第五个图片 
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

     });        
        }
    
})
function Showhide(obj, type, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + type, function () {
            fn.call(obj);
        })
    } else {
        obj.addEventListener(type, fn, false);
    }
}

