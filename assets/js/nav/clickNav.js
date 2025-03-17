import createTag from "./createTag.js";

let currentIdx = 0;
export let currentPath = "";

const clearClass = (target, className) => {
    target.forEach((item) => item.classList.remove(className));
};

// 댑스1 클릭 이벤트
export const clickNav1 = (target, data) => {
    const depth1Btns = target.querySelectorAll(".depth1 > li > button");
    const depth2 = document.querySelectorAll(".depth2");

    depth1Btns.forEach((btn, idx) => {
        clickNav2(btn, data); // depth2 버튼들 클릭 이벤트 호출 -> 각각의 버튼들 index를 사용하여 json 데이터 호출할거임

        btn.addEventListener("click", (e) => {
            const depth1Path = data[idx].depth1.path;
            //console.log(depth1Path)

            if (!depth1Path) {
                // depth1에 path가 없을 때 -> 하위 메뉴 없을 때
                const target = btn.closest("li").querySelector(".depth2");
                const isOn = target.classList.contains("on");

                // 현재 선택한 depth1 인덱스 업데이트
                currentIdx = idx;

                // 모든 버튼과 depth2의 "on" 클래스 제거
                clearClass(depth1Btns, "on");
                clearClass(depth2, "on");

                if (!isOn) {
                    btn.classList.add("on");
                    target.classList.add("on");
                }
            } else {
                // depth1에 path가 있을 때 -> 하위 메뉴 있을 때
                const iframe = document.querySelector("#page-view");
                iframe.src = depth1Path;

                // 모든 버튼과 depth2의 "on" 클래스 제거
                clearClass(depth1Btns, "on");
                clearClass(depth2, "on");

                btn.classList.add("on");
            }
        });
    });
};

// 댑스2 클릭 이벤트
const clickNav2 = (btn, data) => {
    const depth2Btns = btn.closest("li").querySelectorAll(".depth2 >li > button");
    const iframe = document.querySelector("#page-view");

    depth2Btns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            const path = data[currentIdx].depth2[idx].path;
            //console.log(path)
            iframe.src = path;

            // 모든 버튼과 depth2의 "on" 클래스 제거
            clearClass(depth2Btns, "on");
            btn.classList.add("on");
        });
    });
};
