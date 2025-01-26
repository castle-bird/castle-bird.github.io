import FooterContainer from "./Footer-styled";
import githubLogo from "../../../images/layout/github.svg";
import gmailLogo from "../../../images/layout/gmail.svg";
import notionLogo from "../../../images/layout/notion.svg";

export default function Footer() {
    return (
        <FooterContainer>
            <div className="footer-wrap">
                <ul>
                    <li>
                        <a href="https://github.com/castle-bird" target="_black">
                            <img src={githubLogo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://emphasized-derby-e32.notion.site/12d0e4e4d4fe800abd1bd801b61a7868?v=5af793f94dcf4721904da36b1b5b1445"
                            target="_black"
                        >
                            <img src={notionLogo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                alert("저의 E-Mail은: seongjo0501@gmail.com 입니다.");
                            }}
                        >
                            <img src={gmailLogo} alt="" />
                        </a>
                    </li>
                </ul>

                <p>
                &copy; 2025, castle-bird 
                </p>
            </div>
        </FooterContainer>
    );
}
