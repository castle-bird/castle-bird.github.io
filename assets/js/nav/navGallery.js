import createTag from "./createTag.js";
import { clickNav1 } from "./clickNav.js";

// 갤러리 메뉴
const navGallery = async () => {
    const galleryMenu = document.querySelector(".gallery-menu");
    if (!galleryMenu) return;

    try {
        const response = await fetch("/data/gallery.json");
        if (!response.ok) throw new Error("데이터를 불러오지 못했습니다.");

        const data = await response.json();

        // 메뉴들 담을 ul 생성 = depth1
        const depth1 = createTag("ul", { class: "depth1" });

        data.forEach((item) => {
            // 1차 depth들 생성
            const li1 = createTag("li");
            const btn1 = createTag("button");

            btn1.textContent = item.depth1.text;
            btn1.classList.add(`${item.depth1.text}`);
            // aria 속성 추가
            //btn1.setAttribute("aria-label", `${item.depth1.text}차트 타입별 메뉴 보기 버튼`);
            li1.appendChild(btn1);

            // 2차 depth가 존재하는 경우에만 depth2생성
            if (item.depth2 && item.depth2.length > 0) {
                const depth2 = createTag("ul", { class: "depth2" });

                item.depth2.forEach((item2) => {
                    const li2 = createTag("li");
                    const btn2 = createTag("button");

                    btn2.textContent = item2.text;
                    // aria 속성 추가
                    //btn2.setAttribute("aria-label", `${item2.text}페이지 이동 버튼`);
                    li2.appendChild(btn2);
                    depth2.appendChild(li2);
                });

                li1.appendChild(depth2);
            }

            depth1.appendChild(li1);
        });

        galleryMenu.appendChild(depth1);

        // 클릭 이벤트 호출
        clickNav1(galleryMenu, data);
    } catch (error) {
        console.error("갤러리 데이터를 불러오는 중 오류 발생:", error);
    }
};

export default navGallery;
