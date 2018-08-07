$(document).ready(function(){
    $('.slide--banner--js').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.slide-khach-hang').owlCarousel({
        loop:true,
        nav:true,
        margin: 30,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $(".question").each(function(){
        console.log("1")
        $(this).click(function(){
            $(this).parent(".cau-hoi").toggleClass("show");
        })
    })
})
