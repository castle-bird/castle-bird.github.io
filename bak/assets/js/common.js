import navGallery from "./nav/navGallery.js"; // 갤러리 LEFT 메뉴
import navChart from "./nav/navChart.js"; // 차트별 LEFT 메뉴
import navProperties from "./nav/navProperties.js"; // 속성별 LEFT 메뉴

// 공통 함수 js
// 헤더, 네비 등등 레이아웃 관련

const headerMenu = () => {
    const currentPath = window.location.pathname;
    const isGallery = currentPath.startsWith("/pages/gallery");
    const isManual = currentPath.startsWith("/pages/manual");

    const menus = document.querySelectorAll("header .util li a");

    if (isGallery) {
        menus[0].classList.add("on");
    }

    if (isManual) {
        menus[1].classList.add("on");
    }
};

// 헤더 불러오기
const headerFetch = async () => {
    try {
        const header = document.querySelector("header");
        if (!header) {
            console.error("헤더 태그 없음");
            return;
        }

        const response = await fetch("/portals/header.html");

        if (!response.ok) {
            throw new Error("헤더 불러오기 실패. 파일경로 확인");
        }

        const data = await response.text();
        header.innerHTML = data;

        headerMenu();
    } catch (error) {
        console.error("헤더 불러오기 실패:");
    }
};

headerFetch();
navGallery();
navChart();
navProperties();
