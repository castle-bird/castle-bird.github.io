$(function () {
    /* ===============================
        메인 비쥬얼/슬라이드
    =============================== */
    function mainVisual() {
        const $slider = $(".main-visual .main-visual-list");
        const $controller = $(".main-visual .controller");
        const $power = $controller.find(".power");
        const $numCur = $controller.find(".page-num .cur");
        const $numTotal = $controller.find(".page-num .Total");
        let isPlaying = true;

        // 카운트
        $slider.on("init afterChange", (e, slick) => {
            $numCur.text(slick.currentSlide + 1);
            $numTotal.text(slick.slideCount);
        });

        // 슬릭 옵션
        $slider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: $controller.find(".prev"),
            nextArrow: $controller.find(".next"),
        });

        // 시작,정지 버튼
        $power.on("click", function () {
            isPlaying = !isPlaying;
            $slider.slick(isPlaying ? "slickPlay" : "slickPause");
            $power
                .toggleClass("play", !isPlaying)
                .toggleClass("stop", isPlaying)
                .find("span")
                .text(isPlaying ? "정지" : "재생");
        });
    }

    /* ===============================
        메인 탭 버튼
    =============================== */
    function mainTab() {
        const $tab = $(".main-tab-wrap");

        $tab.each(function () {
            // 초기 설정 - 첫 번째 버튼에 .on
            $(this).find(".main-tab-btns a").first().addClass("on");

            $(this)
                .find(".main-tab-btns a")
                .on("click", function (e) {
                    const href = $(this).attr("href");

                    if (!href.startsWith("http://") && !href.startsWith("https://")) {
                        e.preventDefault();
                    }

                    $(this).closest(".main-tab-btns").find("a").removeClass("on");
                    $(this).toggleClass("on");
                });
        });
    }

    /* ===============================
        참여증권사 슬라이드
    =============================== */
    function mainSponsor() {
        const $slider = $(".main-sponsor-list");
        const $dots = $(".main-sponsor-dots");
        const $power = $(".main-sponsor .controller .power");
        let isPlaying = true;

        // 슬라이드 옵션
        $slider.slick({
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 6,
            slidesToScroll: 1,
        });

        // 슬라이드 개수(클론 제외)
        const slideCount = $slider.find(".slick-slide").not(".slick-cloned").length;

        // 커스텀 dots 생성
        // 시작,정지 버튼 위치를 dots 바로 옆으로 위치 시키기위함
        $dots.html(
            Array.from(
                { length: slideCount },
                (_, i) =>
                    `<li${i === 0 ? ' class="active"' : ""}><button><span class="blind">${
                        i + 1
                    }</span></button></li>`
            ).join("")
        );

        // 슬라이드 변경 시 dot 활성화
        $slider.on("afterChange", (e, slick, current) => {
            $dots.find("li").removeClass("active").eq(current).addClass("active");
        });

        // dot 클릭 시 슬라이드 이동
        $dots.on("click", "li", function () {
            $slider.slick("slickGoTo", $(this).index());
        });

        // 시작,정지 토글
        $power.on("click", function () {
            isPlaying = !isPlaying;
            $slider.slick(isPlaying ? "slickPlay" : "slickPause");
            $power
                .toggleClass("play", !isPlaying)
                .toggleClass("stop", isPlaying)
                .find("span")
                .text(isPlaying ? "정지" : "재생");
        });
    }

    mainVisual();
    mainTab();
    mainSponsor();
});
