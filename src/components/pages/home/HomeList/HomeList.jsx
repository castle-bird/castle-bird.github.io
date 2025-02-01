import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import properties from "../../../../global/GlobalStyleVar";

import HomeListContainer from "./HomeList_styled";

import Loading from "../../../loading/Loading";

export default function HomeList({ gitState: { loading, data, error }, currentView }) {
    const listItems = useRef([]);

    useEffect(() => {
        listItems.current.length !== 0 && listItems.current[0].classList.add("active");
    }, [data]);

    const onClick = (e) => {
        const target = e.currentTarget;

        listItems.current.forEach((v) => v.classList.remove("active"));
        target.classList.add("active");


        // 모바일일 때 팝업 열리게
        const screenSize = window.innerWidth;
        const moScreenSize = parseInt(properties.breakpoints.mobileSmall.replace("px", ""));

        if (moScreenSize > screenSize) {
            currentView.current?.classList.add("mo-show");
        }
    };

    return (
        <HomeListContainer>
            {loading && <Loading />}
            {error && "에러"}

            {data && (
                <ul>
                    {data.map((val, idx) => (
                        <li key={idx} onClick={onClick} ref={(el) => (listItems.current[idx] = el)}>
                            <Link to={`/details/${val.id}`}>
                                <strong>{val.role}</strong>
                                <h3>{val.title}</h3>
                                <p>{val.description}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </HomeListContainer>
    );
}

HomeList.propTypes = {
    gitState: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf([null])]),
        error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    }),
    currentView: PropTypes.shape({
        current: PropTypes.oneOfType([
            PropTypes.instanceOf(Element), // HTML 요소
            PropTypes.oneOf([null, undefined]), // null 또는 undefined 허용
        ]),
    }),
};
