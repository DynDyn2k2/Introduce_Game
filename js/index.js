document.addEventListener('DOMContentLoaded', function() {
// ======================== THAY ĐỔI HÌNH NỀN ===================================
    var images = ['images/demo/backgrounds/game_pad.jpg', 'images/demo/backgrounds/images_background.jpg', 'images/demo/backgrounds/002.jpg'];
    var currentImage = 0;
    var bgSlider = document.getElementById('bg-slider');

    function changeBackground() {
      currentImage = (currentImage + 1) % images.length;
      bgSlider.style.backgroundImage = 'url(' + images[currentImage] + ')';
    }

    setInterval(changeBackground, 5000);
    
    
// ======================== SCROLL MENU ===================================
    // Lấy phần tử wrapper
    var wrapper = document.querySelector('.wrapper');

    // Lấy chiều cao của thanh menu
    var navHeight = document.getElementById("nav").offsetHeight;

    //Lấy chiều cao của thanh header
    var header = document.getElementById('header');

    // Thêm hoặc loại bỏ lớp small, fixed-header khi cuộn trang
    window.addEventListener("scroll", function() {
        if (window.scrollY > navHeight) {
            wrapper.classList.add("fixed-header");
            header.classList.add("small"); // Thêm lớp small cho header
        } else {
            wrapper.classList.remove("fixed-header");
            header.classList.remove("small"); // Loại bỏ lớp small cho header
        }
    });

    //============ Set màu Menu khi Scroll========
    // Lấy phần tử wrapper row1
    var wrapperRow1 = document.querySelector('.wrapper.row1');

    // Lấy chiều cao của thanh menu
    var navHeight = document.getElementById("nav").offsetHeight;

    // Thêm hoặc loại bỏ lớp dark-bg khi cuộn trang
    window.addEventListener("scroll", function() {
        if (window.scrollY > navHeight) {
            wrapperRow1.classList.add("dark-bg");
        } else {
            wrapperRow1.classList.remove("dark-bg");
        }
    });
});