$(document).ready(function () {
    $(".owl-carousel.country__slider").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:false,
        responsiveClass:true,
        responsive:{
            475:{
                items: 2,
            },
            700:{
                items: 3,
            },
            992:{
                items: 4,
            },
            1200:{
                items: 5,
            }

        }
    });
    var owl = $('.owl-carousel.country__slider');
    owl.owlCarousel();
    $('.country-slider-nextarrow').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.country-slider-prevarrow').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    var carousel= $(".owl-carousel.country__slider");
    checkClasses();
    carousel.on('translated.owl.carousel', function(event){
    checkClasses();
    });

    function checkClasses(){
        $('.owl-carousel.country__slider .owl-stage .owl-item.active').removeClass('firstActiveItem');

        $('.owl-carousel.country__slider .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                $('.owl-carousel.country__slider .owl-stage .owl-item.active .slide1').addClass('firstActiveItem');
            }
        });
        if($('.owl-carousel.country__slider .owl-stage .owl-item.active .slide1').hasClass('firstActiveItem')==true){
            $('.country-slider-prevarrow').css('display','none');
        }
        else{
            $('.country-slider-prevarrow').css('display','flex');
        }
    }


    $(".owl-carousel.os__slider").owlCarousel({
        items:4,
        loop:true,
        nav:false,
        dots:true,
        margin: 30,
        dotsEach: 4,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                margin: 0,
                dots: false
            },
            575:{
                items: 2,
                margin: 0
            },
            768:{
                items: 3,
                margin: 0
            },
            1024:{
                items: 4,
                margin:0
            },
            1280:{
                items: 5,
                margin: 10,
            }
        }
    });

    var os_owl = $('.owl-carousel.os__slider');
    os_owl.owlCarousel();
    $('.os__slider_nextarrow').click(function() {
        os_owl.trigger('next.owl.carousel');
    });
    $('.os__slider_prevarrow').click(function() {
        os_owl.trigger('prev.owl.carousel');
    });
    /* Select operating server arrow button code start */
    checkClasses2();
    os_owl.on('translated.owl.carousel', function(event){
    checkClasses2();
    });

    function checkClasses2(){
        $('.owl-carousel.os__slider .owl-stage .owl-item.active').removeClass('firstActiveItem2');

        $('.owl-carousel.os__slider .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                $('.owl-carousel.os__slider .owl-stage .owl-item.active .os__sliderwrapper_active').addClass('firstActiveItem2');
            }
        });
        if($('.owl-carousel.os__slider .owl-stage .owl-item.active .os__sliderwrapper_active').hasClass('firstActiveItem2')==true){
            $('.os__slider_prevarrow').css('display','none');
        }
        else{
            $('.os__slider_prevarrow').css('display','flex');
        }
    } /* Select operating server arrow button code end */

    /* Select server owl-carousel */
    $(".owl-carousel.server__slider").owlCarousel({
        items:1,
        loop: true,
        nav:false,
        dots:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                margin:0,
            },
            525:{
                items: 1,
                margin: 10
            },
            575:{
                items:2,
                margin: 0
            },
            800:{
                items: 3,
            },
            1024:{
                items: 4,
                margin: 0
            },
            1280:{
                items: 5,
                margin: 20
            },
            1367:{
                items: 5,
                margin: 48
            }
        }
    });

    var selectserver_owl = $('.owl-carousel.server__slider');
    selectserver_owl.owlCarousel();
    $('.server__slider_nextarrow').click(function() {
        selectserver_owl.trigger('next.owl.carousel');
    });
    $('.server__slider_prevarrow').click(function() {
        selectserver_owl.trigger('prev.owl.carousel');
    });

    checkClasses3();
    selectserver_owl.on('translated.owl.carousel', function(event){
    checkClasses3();
    });

    function checkClasses3(){
        $('.owl-carousel.server__slider .owl-stage .owl-item.active').removeClass('firstActiveItem');

        $('.owl-carousel.server__slider .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                $('.owl-carousel.server__slider .owl-stage .owl-item.active .server__slide_active').addClass('firstActiveItem');
            }
        });
        if($('.owl-carousel.server__slider .owl-stage .owl-item.active .server__slide_active').hasClass('firstActiveItem')==true){
            $('.server__slider_prevarrow').css('display','none');
        }
        else{
            $('.server__slider_prevarrow').css('display','flex');
        }
    }
});

var all_btn= document.getElementById('active_btn');
function os_btn(){
    all_btn.style.color= '#434343';
}
function os_btn_all(){
    all_btn.style.color= '#F28A49';
}
var all_btn2= document.getElementById('active_btn2');
function selectos_btn(){
    all_btn2.style.color= '#434343';
}
function selectos_btn_all(){
    all_btn2.style.color= '#F28A49';
}

$('#monthly_btn').click(function() {
        $('#move').css('transform', 'translateX(142px)');
        $('#move').css('transition', 'all 1s');
        $('.hourly_label').css('color', '#494949');
        $('.monthly_label').css('color', '#FFFFFF');
        $('.plan__block2_content').css('display', 'none');
        $('.plan__block2-content_monthly').css('display', 'flex');
});
$('#hourly_btn').click(function() {
        $('#move').css('transform', 'translateX(0px)');
        $('.monthly_label').css('color', '#494949');
        $('.hourly_label').css('color', '#FFFFFF');
        $('.plan__block2-content_monthly').css('display', 'none');
        $('.plan__block2_content').css('display', 'flex');
});