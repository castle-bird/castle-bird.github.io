import { useEffect, useState } from "react";
import HistoryContainer from "./History_styled";
import HistoryData from "./HistoryData.json";

export default function History() {
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        // 년도별 최신순으로sort
        const sortedResults = Object.entries(HistoryData).sort(
            ([yearA], [yearB]) => Number(yearB) - Number(yearA)
        );
        setSortedData(sortedResults);
    }, []);

    return (
        <HistoryContainer>
            <div className="history-wrap">
                {sortedData.map(([year, events]) => (
                    <article key={year} className="item">
                        <div className="content">
                            
                                <strong>{year}</strong>
                                <ul>
                                    {events.data.map((event, idx) => (
                                        <li key={idx}>
                                            <span className="date">{event.date.split("-")[1]}</span>
                                            <span className="description">{event.description}</span>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                        
                        <div className="thumb">
                            <img src={events.thumb.src} alt={events.thumb.alt}/>
                        </div>
                    </article>
                ))}
            </div>
        </HistoryContainer>
    );
}
