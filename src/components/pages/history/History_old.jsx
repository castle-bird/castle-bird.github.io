import { useEffect, useState } from "react";
import HistoryContainer from "./History_styled";
import HistoryData from "./HistoryData.json";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function History() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        // 우측 목록들

        // 방법 1. reduce로 배열 합치고 sort
        // const results = Object.values(HistoryData).reduce((acc, cur) => acc.concat(cur), []);
        // const sortedResults = results.sort((a, b) => new Date(b.date) - new Date(a.date));

        // 방법 2. flat()으로 배열 합치고 sort
        // flat()은 기본적으로 배열 1개만 펼친다
        // 파라미터로 숫자를 넣어주던 Infinity를 하던 해야한다
        const sortedResults = Object.values(HistoryData)
            .flat()
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        setDatas(sortedResults);
    }, []);

    return (
        <HistoryContainer>
            <div className="history-wrap">
                <ul className="description">
                    {(() => {
                        // 값이 있는지 없는지 체크하기 위해 new Set()을 사용한다
                        // 값 추가는 add()
                        // 있는지 없는지는 has()
                        // new Set()을 선언후 has()로 있는지 없는지 체크
                        const firstYear = new Set();
                        return datas.map((data, idx) => {
                            const year = data.date.split("-")[0];
                            const isFirstYear = !firstYear.has(year); // 연도별 첫 항목인지 확인
                            isFirstYear && firstYear.add(year); // 첫 번째 연도만 추가
                            return (
                                <li key={idx} {...(isFirstYear && { "data-year": year })}>
                                    <span className="date">{data.date}</span>
                                    <span className="text">{data.description}</span>
                                </li>
                            );
                        });
                    })()}
                </ul>
            </div>
        </HistoryContainer>
    );
}
