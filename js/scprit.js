// humburger dey here
function  showsidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="flex";
}
function hidesidebar(){
    const hidesidebar=document.querySelector(".sidebar");
    hidesidebar.style.display="none";
}
 

const navoptions = document.querySelectorAll(".navoptions"); 
navoptions.forEach((navoptions) => {
  navoptions.addEventListener("click", () => {
    hideSidebar(); // Hide the sidebar on click
  });
});


//humburger dey end



document.querySelectorAll("image-slider img"). forEach(images =>{
    images.onclick =() => {
        var src = images.getAttribute("src");
        document.queryselector(".main-home-image").src = src;

    };
});


var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    pagination: {
        el: ".Swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});
