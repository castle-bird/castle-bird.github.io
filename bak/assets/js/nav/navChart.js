import createTag from "./createTag.js";
import { clickNav1 } from "./clickNav.js";

// 갤러리 메뉴
const navChart = async () => {
    const chartMenu = document.querySelector(".chart-menu");
    if (!chartMenu) return;

    try {
        const response = await fetch("/data/chart.json");
        if (!response.ok) throw new Error("데이터를 불러오지 못했습니다.");

        const data = await response.json();

        // 차트별/속성별 구분 버튼
        const categoryDiv = createTag("div", { class: "menu-category" });
        const a1 = createTag("a", {
            text: "차트별",
            attrs: {
                href: "/pages/manual/chart/index.html",
                class: "on",
            },
        });

        const a2 = createTag("a", {
            text: "속성별",
            attrs: {
                href: "/pages/manual/properties/index.html",
            },
        });

        categoryDiv.appendChild(a1);
        categoryDiv.appendChild(a2);
        chartMenu.appendChild(categoryDiv);

        // 메뉴들 담을 ul 생성 = depth1
        const depth1 = createTag("ul", { class: "depth1" });

        data.forEach((item) => {
            // 1차 depth들 생성
            const li1 = createTag("li");
            const btn1 = createTag("button");

            btn1.textContent = item.depth1.text;
            btn1.classList.add(`${item.depth1.text}`);
            li1.appendChild(btn1);

            // 2차 depth가 존재하는 경우에만 depth2생성
            if (item.depth2 && item.depth2.length > 0) {
                const depth2 = createTag("ul", { class: "depth2" });

                item.depth2.forEach((item2) => {
                    const li2 = createTag("li");
                    const btn2 = createTag("button");

                    btn2.textContent = item2.text;
                    li2.appendChild(btn2);
                    depth2.appendChild(li2);
                });

                li1.appendChild(depth2);
            }

            depth1.appendChild(li1);
        });

        chartMenu.appendChild(depth1);

        // 초기에 첫 번 째 메뉴들 "on"시키기
        menuReset();

        // 클릭 이벤트 호출
        clickNav1(chartMenu, data);
    } catch (error) {
        console.error("갤러리 데이터를 불러오는 중 오류 발생:", error);
    }
};

function menuReset() {
    const btn1 = document.querySelector(".depth1 > li > button");
    const depth2 = document.querySelector(".depth2");
    const depth2Btn = document.querySelector(".depth2 > li > button");

    btn1.classList.add("on");
    depth2.classList.add("on");
    depth2Btn.classList.add("on");
}

export default navChart;
