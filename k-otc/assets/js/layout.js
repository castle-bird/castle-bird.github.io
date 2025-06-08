$(function () {
    /* ===============================
        Header 비동기 호출 및 UI관련 함수 호출
    =============================== */
    const $header = $("#header");

    function loadHeader() {
        $header.load("/includes/header.html", function () {
            gnb();
            SearchToggle();
        });
    }

    /* ===============================
        Header 네비게이션 GNB
    =============================== */
    function gnb() {
        const $gnb = $("#gnb");
        const $depth2 = $gnb.find(".depth2");
        const $depth1Li = $gnb.find(".depth1 > li");
        const $gnbBg = $(".gnb-bg");

        // 초기너비 저장 및 설정
        // 초기너비 미지정시 width변경 이벤트에 transition이 적용 안됨
        const depth1LiWidth = $depth1Li.map((_, el) => $(el).outerWidth());
        $depth1Li.each(function (idx) {
            $(this).css("width", `${depth1LiWidth[idx]}px`);
        });

        const gnbWidth = $gnb.outerWidth();
        $gnb.css("width", `${gnbWidth}px`);

        // 이벤트 핸들러 등록
        $gnb.on("mouseenter focusin", function () {
            $(this).css("width", "100%");
            $depth1Li.each(function () {
                $(this).css("width", `calc(100% / ${$depth1Li.length})`);
            });

            $header.addClass("on");
            $depth2.stop().slideDown();
            $gnbBg.stop().slideDown();
        });

        $gnb.on("mouseleave focusout", function () {
            $(this).css("width", `${gnbWidth}px`);
            $depth1Li.each(function (idx) {
                $(this).css("width", `${depth1LiWidth[idx]}px`);
            });

            $header.removeClass("on");
            $depth2.stop().slideUp();
            $gnbBg.stop().slideUp();
        });

        // .depth2, .gnb-bg 높이 맞추기
        let maxHeight = 0;

        $depth2.each(function () {
            const thisHeight = $(this).outerHeight();

            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
        });

        $depth2.css("height", `${maxHeight}px`);
        $gnbBg.css("height", `${maxHeight}px`);
    }

    /* ===============================
        Header Search
    =============================== */
    function SearchToggle() {
        const $headerSearch = $(".header-saerch");
        const $headerSearchOpen = $(".header-saerch .search-open");
        const $headerSearchClose = $(".header-saerch .search-close");

        $headerSearchOpen.on("click", function () {
            $headerSearch.addClass("on");
        });

        $headerSearchClose.on("click", function () {
            $headerSearch.removeClass("on");
        });
    }

    /* ===============================
        Footer 비동기 호출 및 UI관련
    =============================== */
    const $footer = $("#footer");

    function loadFooter() {
        $footer.load("/includes/footer.html");
    }

    /* ===============================
        Quick Menu 비동기 호출 및 UI관련
    =============================== */
    const $quickMenu = $("#quick-menu");

    function loadQuickMenu() {
        $quickMenu.load("/includes/quick-menu.html", function () {
            quickMenuMove();
        });
    }

    /* ===============================
        Quick Menu 스크롤 이벤트
    =============================== */
    function quickMenuMove() {
        //초기 퀵 메뉴 정중앙에 위치 시키기
        const $window = $(window);
        let positon = $window.innerHeight() / 2 - $quickMenu.outerHeight() / 2 + 20; // 헤더랑 겹쳐서 20px 여유를 설정

        $quickMenu.css("top", `${positon}px`);

        $(window).on("scroll", function () {
            $quickMenu.css("top", `${positon + $(this).scrollTop()}px`);
        });

        $(window).on("resize", function () {
            positon = $window.innerHeight() / 2 - $quickMenu.outerHeight() / 2 + 20;
            
            $quickMenu.css("top", `${positon}px`);
        });
    }

    /* ===============================
   호출
   =============================== */
    loadHeader();
    loadFooter();
    loadQuickMenu();
});
