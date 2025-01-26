import navData from "../navData.json";

import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import NavContainer from "./Nav_styled";
import properties from "../../../../global/GlobalStyleVar";

export default function Nav({ hamburgerChecked, setHamburgerChecked }) {
    const location = useLocation();
    const navLine = useRef(); // 움직이는 선
    const navItems = useRef([]); // nav li 들
    let resizeTimer = useRef(); // debounce작업을 위함 - 리사이즈 과부화 막기
    const nav = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (navItems.current.length > 0) {
            // 새로고침 했을 때 line의 위치가 초기화 되는 상태(맨 처음으로 돌아가는)를 막기 위함
            // path받아서 위치 초기화 시킨다.
            const currentPath = location.pathname; // 현재 path
            const currentNavItem = navItems.current.find((item, idx) => {
                const href = item.querySelector("a").getAttribute("href");
                if (currentPath.startsWith("/details/")) {
                    return idx === 0;
                }
                return href === currentPath;
            });

            if (currentNavItem) {
                updateNavLine(currentNavItem);
            } else {
                // 없는 페이지 로딩시 Home으로
                updateNavLine(navItems.current[0]);
            }

            moCheck();
            // resize시 폰트크기가 달라져서 .line의 크기도 변경되어야 함
            // resize과부화를 막기위해 debounce작업
            // resize 끝나고 0.2초 후에 사이즈 재조정

            window.addEventListener("resize", () => {
                clearTimeout(resizeTimer.current);

                resizeTimer.current = setTimeout(() => {
                    moCheck();
                    updateNavLine(currentNavItem);
                }, 90);
            });
        }
    }, [location, hamburgerChecked, isMobile]);

    const moCheck = () => {
        const screenSize = window.innerWidth;
        const tabletPX = properties.breakpoints.tablet.replace("px", "");

        setIsMobile(screenSize > tabletPX ? false : true);

        if(screenSize > tabletPX) {
            setHamburgerChecked(false)
        }
    };

    // 크기/위치 잡는 함수
    const updateNavLine = (target) => {
        const targetLeft = target.offsetLeft;
        const targetWidth = target.offsetWidth;
        const targetTop = target.offsetTop;
        const targetHeight = target.offsetHeight;
        // console.log(targetTop + targetHeight)
        

        if (isMobile) {
            // Mobile위치
            
            navLine.current.style.top = `${targetTop + targetHeight}px`;
            navLine.current.style.bottom = `auto`;
            navLine.current.style.width = `${targetWidth}px`;
            navLine.current.style.left = `${targetLeft}px`;
        }else {
            navLine.current.style.top = `auto`;
            navLine.current.style.bottom = `0`;
            navLine.current.style.width = `${targetWidth}px`;
            navLine.current.style.left = `${targetLeft}px`;
        }
    };

    const navClick = (e) => {
        const target = e.currentTarget;
        updateNavLine(target);
        setHamburgerChecked(!hamburgerChecked)
    };

    if (hamburgerChecked && isMobile) {
        nav.current && nav.current.classList.add("mo-show");
    } else {
        nav.current && nav.current.classList.remove("mo-show");
    }

    return (
        <NavContainer ref={nav}>
            <span className="line" ref={navLine}></span>
            <ul>
                {navData.map((val, index) => (
                    <li key={index} onClick={navClick} ref={(el) => (navItems.current[index] = el)}>
                        {val.external ? (
                            <a
                                href={val.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-text={val.depth1}
                            >
                                <span>{val.depth1}</span>
                            </a>
                        ) : (
                            <NavLink to={val.link} data-text={val.depth1}>
                                <span>{val.depth1}</span>
                            </NavLink>
                        )}
                    </li>
                ))}

                {/* 모바일에서 목록열기 */}
                <li className="more">
                    <button >List</button>
                </li>
            </ul>
        </NavContainer>
    );
}
Nav.propTypes = {
    hamburgerChecked: PropTypes.bool,
    setHamburgerChecked :PropTypes.func
};
