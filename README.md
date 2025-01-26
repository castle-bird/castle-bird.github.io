# 개인 포트폴리오 홈페이지

## 프로젝트 소개
이 프로젝트는 개인 포트폴리오를 위한 웹사이트입니다. React를 사용하여 개발되었으며, 다양한 외부 라이브러리와 API를 활용하여 기능을 구현하였습니다.

## 사용한 외부 라이브러리 및 API
- GitHub RESTful API: 작업 목록을 사용하기 위함
- react-helmet-async: 브라우저의 크롤링(SEO)을 원활하게 하기 위함
- Styled Components: 컴포넌트별 스타일 관리를 편하게 하기 위함
- Axios: 원활한 RESTful API 사용을 위함
- prop-types : props로 전달되는 요소의 type을 명확히 지정

## 사용한 주요 React Hooks
- useState: 상태 관리를 위함 / 상태(변수) 변경 시 실시간 리렌더링
- useEffect: 함수 호출 및 상태 변경을 효율적으로 하기 위함 (예: 컴포넌트가 마운트될 때와 언마운트될 때, 그리고 특정 상태나 props가 변경될 때 실행)
- useContext: 전역 상태 관리를 위함 / API 등을 효율적으로 props 중복 없이 사용하기
- useRef: DOM 접근 및 변수 관리를 위함
