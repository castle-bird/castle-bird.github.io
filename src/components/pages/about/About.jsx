import AboutContainer from "./About_styled";

export default function About() {
    return (
        <AboutContainer>
            <div className="about-wrap">
                <h2>자기소개</h2>
                <p>
                    안녕하세요. 4년 차 퍼블리셔 박성조입니다. 
                    <br />
                    퍼블리셔로 일하면서 자연스럽게 <span>JavaScript</span>를 많이 접하게 되었고, 그 활용성과 중요성을 깊이 느껴왔습니다. 
                    <br />
                    사용자가 편리하게 이용할 수 있는 <span>UI/UX 설계</span>부터, 웹 개발에서 중요한 <span>성능 최적화</span>까지 이 모든 것이 JavaScript로 해결될 수 있다고 생각합니다. 
                    <br />
                    또한, <span>JavaScript</span>는 웹과 앱에서 모두 활용할 수 있어 그만큼 확장성이 뛰어난 기술입니다. 
                    <br />
                    최근 <span>AI 기술의 발전</span>과 함께, 개발자로서 안주하지 않고 지속적으로 성장해야 한다는필요성을 절감하고 있습니다.
                    <br />
                    이에 따라 웹 개발을 본격적으로 공부하기 시작했습니다.
                    <br />
                    아직 부족한 점이 많지만, 그동안 <span>웹 접근성</span>과 관련된 업무를 꾸준히 다뤄왔기에 다른 프론트엔드 신입 개발자보다 빠르게 실력을 쌓을 수 있다고 생각합니다. 
                    <br />
                    현재에 안주하지 않고 계속해서 발전하는 개발자가 되겠습니다. 
                    <br />
                    감사합니다.
                </p>

                <h2>기술 스택</h2>
                <ul>
                    <li>
                        HTML
                        <img src="/images/about/html.png" alt="html 로고" />
                    </li>
                    <li>
                        CSS
                        <img src="/images/about/css.png" alt="css 로고" />
                    </li>
                    <li>
                        Javascript Pure
                        <img src="/images/about/js.png" alt="javascript 로고" />
                    </li>
                    <li>
                        Javascript React
                        <img src="/images/about/react.webp" alt="React 로고" />
                    </li>
                    <li>
                        Git
                        <img src="/images/about/git.png" alt="Git 로고" />
                    </li>
                    <li>
                        GitHub
                        <img src="/images/about/github.png" alt="Github 로고" />
                    </li>
                    <li>
                        Tortoise SVN
                        <img src="/images/about/svn.png" alt="Tortoise SVN 로고" />
                    </li>
                    <li>
                        XD
                        <img src="/images/about/xd.png" alt="XD 로고" />
                    </li>
                    <li>
                        Figma
                        <img src="/images/about/figma.png" alt="Figma 로고" />
                    </li>
                    <li>
                        Nexacro
                        <img src="/images/about/nexacro.png" alt="Nexacro 로고" />
                    </li>
                </ul>
            </div>
        </AboutContainer>
    );
}
