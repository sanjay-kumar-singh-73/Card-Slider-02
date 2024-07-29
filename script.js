const swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween:30,
    grabCursor:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
        pauseOnmouseEnter:true,
    },
    slidesPerGroup:1,
    loop:true,
    loopFillGroupWithBlank:true,
    pagination:{
        el:".swiper-paganation",
        clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  