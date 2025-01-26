import { Link } from "react-router-dom";
import Error404Container from "./Error404_styled";

export default function Error404() {
    return (
        <Error404Container>
            <h1><span>404</span> Error</h1>
            <p>
                죄송합니다. 요청하신 페이지를 찾을 수 없습니다. <br />
                메인 페이지로 돌아가시려면 아래 버튼을 클릭하세요.
            </p>
            <Link to="/" className="button">메인 바로가기</Link>
        </Error404Container>
    );
}
