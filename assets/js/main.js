(function ($) {
    "use strict";
    var cursor = document.querySelector(".cursor");
    var cursorinner = document.querySelector(".cursor2");
    var a = document.querySelectorAll("a");
    document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
    $("a").hover(
        function () {
            $(".cursor2").css({ "background-color": "transparent" });
        },
        function () {
            $(".cursor2").css({ "background-color": "#D90A2C" });
        }
    );
    jQuery(window).on("load", function () {
        $(".preloader").delay(1600).fadeOut("slow");
    });
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header-section");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    $(".drop-down").on("click", function (e) {
        e.preventDefault();
    });
    $(".mobile-menu-btn").on("click", function () {
        $(".main-menu").addClass("show-menu");
    });
    $(".menu-close-btn").on("click", function () {
        $(".main-menu").removeClass("show-menu");
    });
    $(".drop-down").on("click", function () {
        $(this).toggleClass("active").next("ul").slideToggle();
        $(this).parent().siblings().children("ul").slideUp();
        $(this).parent().siblings().children(".active").removeClass("active");
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
            $(".scroll-btn").addClass("show");
        } else {
            $(".scroll-btn").removeClass("show");
        }
    });
    $(".scroll-btn").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
    });
    $(".search-btn").on("click", function () {
        $(".mobile-search").addClass("slide");
    });
    $(".search-cross-btn").on("click", function () {
        $(".mobile-search").removeClass("slide");
    });
    var toggleIcon = document.querySelectorAll(".menu-sidebar-btn");
    var closeIcon = document.querySelectorAll(".cross-icon");
    var searchWrap = document.querySelectorAll(".menu-toggle-btn-full-shape");
    toggleIcon.forEach((element) => {
        element.addEventListener("click", () => {
            document.querySelectorAll(".menu-toggle-btn-full-shape").forEach((el) => {
                el.classList.add("show-sidebar");
            });
        });
    });
    closeIcon.forEach((element) => {
        element.addEventListener("click", () => {
            document.querySelectorAll(".menu-toggle-btn-full-shape").forEach((el) => {
                el.classList.remove("show-sidebar");
            });
        });
    });
    window.onclick = function (event) {
        searchWrap.forEach((el) => {
            if (event.target === el) {
                el.classList.remove("show-sidebar");
            }
        });
    };
    var swiper = new Swiper(".banner1", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        loop: false,
        effect: "fade",
        fadeEffect: { crossFade: true },
        centeredSlides: true,
        roundLengths: true,
        navigation: { nextEl: ".banner-next", prevEl: ".banner-prev" },
        coverflowEffect: { rotate: 30, slideShadows: false },
        direction: "horizontal",
        pagination: { clickable: true, el: ".swiper-pagination" },
    });
    var swiper = new Swiper(".banner2", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        loop: false,
        effect: "fade",
        fadeEffect: { crossFade: true },
        centeredSlides: true,
        roundLengths: true,
        navigation: { nextEl: ".banner2-next", prevEl: ".banner2-prev" },
        coverflowEffect: { rotate: 30, slideShadows: false },
        direction: "horizontal",
        pagination: { clickable: true, el: ".swiper-pagination" },
    });
    var swiper = new Swiper(".expert-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        autoplay: { delay: 9000 },
        navigation: { nextEl: ".expert-next", prevEl: ".expert-prev" },
        breakpoints: {
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1400: { slidesPerView: 4 },
            1600: { slidesPerView: 4 },
        },
    });
    var sponsor = new Swiper(".sponsor-slider-dark", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        autoplay: { delay: 9000 },
        navigation: { nextEl: ".winner-next", prevEl: ".winner-prev" },
        breakpoints: {
            480: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 5 },
            1600: { slidesPerView: 5 },
        },
    });
    var sponsor2 = new Swiper(".sponsor-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        autoplay: { delay: 9000 },
        navigation: { nextEl: ".winner-next", prevEl: ".winner-prev" },
        breakpoints: {
            480: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 5 },
            1600: { slidesPerView: 5 },
        },
    });
    var swiper = new Swiper(".feedback-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        loop: false,
        effect: "fade",
        fadeEffect: { crossFade: true },
        centeredSlides: true,
        roundLengths: true,
        navigation: { nextEl: ".banner2-next", prevEl: ".banner2-prev" },
        coverflowEffect: { rotate: 30, slideShadows: false },
        direction: "horizontal",
        pagination: { clickable: true, el: ".swiper-pagination" },
    });
    $(".video-open").magnificPopup({ type: "iframe" });
    $(".circle_percent").each(function () {
        var $this = $(this),
            $dataV = $this.data("percent"),
            $dataDeg = $dataV * 3.6,
            $round = $this.find(".round_per");
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        $this.append(
            '<div class="circle_inbox"><span class="percent_text"></span></div>'
        );
        $this.prop("Counter", 0).animate(
            { Counter: $dataV },
            {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                    $this.find(".percent_text").text(Math.ceil(now) + "%");
                },
            }
        );
        if ($dataV >= 51) {
            $round.css("transform", "rotate(" + 360 + "deg)");
            setTimeout(function () {
                $this.addClass("percent_more");
            }, 1000);
            setTimeout(function () {
                $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
            }, 1000);
        }
    });
    $(".counter-item").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (
                    var i = 0;
                    i < document.querySelectorAll(".odometer").length;
                    i++
                ) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    $(".image-open").magnificPopup({ type: "image" });
    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
        callback: function (box) { },
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();
})(jQuery);
