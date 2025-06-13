// 서브 페이지 관련 함수
// iframe에서 불러오는 페이지들 관련 함수

// 차트속성/다른샘플 버튼
const chartOptions = () => {
    const chartOptionBtns = document.querySelectorAll(".chart-options > li > button");
    if (chartOptionBtns.length === 0) return;

    chartOptionBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const options = e.target.closest("li").querySelector(".options");

            options.classList.toggle("on");
        });
    });
};

// 차트속성 버튼
const chartProperties = () => {
    const hartPropertyBtns = document.querySelectorAll(".chart-options .properties button");
    if (hartPropertyBtns.length === 0) return;

    hartPropertyBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("on");
        });
    });
};

// 다른샘플 버튼들
const chartSample = () => {
    const chartSampleBtns = document.querySelectorAll(".chart-options .sample button");
    if (chartSampleBtns.length === 0) return;

    chartSampleBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            chartSampleBtns.forEach((item) => item.classList.remove("on"));
            btn.classList.add("on");
        });
    });
};

// SOURCE/DATA 탭 부분
const resTab = () => {
    const resTabBtns = document.querySelectorAll("#chart-res .res-btns > li > button");
    if (resTabBtns.length === 0) return;

    const resTabs = document.querySelectorAll("#chart-res .res-contents > div");

    resTabBtns[0].classList.add("on");
    resTabs[0].classList.add("on");

    resTabBtns.forEach((btn, idx) => {
        btn.addEventListener("click", (e) => {
            resTabBtns.forEach((item) => item.classList.remove("on"));
            btn.classList.add("on");

            resTabs.forEach((item) => item.classList.remove("on"));
            resTabs[idx].classList.add("on");
        });
    });
};

// 적용 버튼
const apllyBtn = () => {
    const apllyBtn = document.querySelector("#chart-res .res-util > li > .apply");
    if (!apllyBtn) return;

    apllyBtn.addEventListener("click", () => {
        apllyBtn.classList.add("on");
        apllyBtn.textContent = "적용중";

        setTimeout(() => {
            apllyBtn.classList.remove("on");
            apllyBtn.textContent = "적용";
        }, 1000);
    });
};

chartOptions();
chartProperties();
chartSample();
resTab();
apllyBtn();
