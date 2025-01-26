import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = ({
    title = "Castle Bird Blog - CBB",
    subject = "나만의 작은 블로그",
    description = "이 사이트는 GitHub API를 이용한 사이트입니다.",
    author = "castle-bird",
    keyword = "개발, 블로그, 개인, 기술, GitHub, API, React",
    copy = "Copyright © 2025 castle-bird. All rights reserved.",
}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* SEO관련 */}
                <meta name="description" content={description} />
                <meta name="keywords" content={keyword} />
                <meta name="author" content={author} />
                <meta name="subject" content={subject} />
                <meta name="copyright" content={copy} />
                <meta name="content-language" content="ko" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />

                <title>{title}</title>

                {/* "Poppins" */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

                {/* "Pretendard Variable", Pretendard */}
                <link rel="stylesheet" as="style" crossOrigin="" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
            </Helmet>
        </HelmetProvider>
    );
};

// PropTypes로 props 타입 검증 추가
Meta.propTypes = {
    title: PropTypes.string,
    subject: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    keyword: PropTypes.string,
    copy: PropTypes.string,
};

export default Meta;
