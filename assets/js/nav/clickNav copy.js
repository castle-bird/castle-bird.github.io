import createTag from "./createTag.js";

let currentIdx = 0;
export let currentPath = "";

// 댑스1 클릭 이벤트
export const clickNav1 = (target, data) => {
    const depth1Btns = target.querySelectorAll(".depth1 > li > button");
    const depth2 = document.querySelectorAll(".depth2");

    depth1Btns.forEach((btn, idx) => {
        btn.addEventListener("click", (e) => {
            const target = btn.closest("li").querySelector(".depth2");
            if (!target) return; // depth2없으면 리턴

            const isOn = target.classList.contains("on");

            // 현재 선택한 depth1 인덱스 업데이트
            currentIdx = idx;

            depth1Btns.forEach((item) => item.classList.remove("on"));
            depth2.forEach((item) => item.classList.remove("on"));

            if (!isOn) {
                btn.classList.add("on");
                target.classList.add("on");
            }
        });

        // depth2가 있는 경우에만 호출
        if (data[idx].depth2.length !== 0) {
            clickNav2(btn, data);
        }
    });
};

// 댑스2 클릭 이벤트
const clickNav2 = (btn, data) => {
    const depth2Btns = btn.closest("li").querySelectorAll(".depth2 >li > button");
    const iframe = document.querySelector("#page-view");

    depth2Btns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            const path = data[currentIdx].depth2[idx].path;

            iframe.src = path;

            depth2Btns.forEach((item) => item.classList.remove("on"));
            btn.classList.add("on");

            
        });
    });
};
