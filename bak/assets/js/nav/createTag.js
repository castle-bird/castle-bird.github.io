/*
 * ex)
 * const btn = createTag("button", {
 *     class: "btn primary",
 *     attrs: { id: "submitBtn", "data-action": "submit" },
 *     text: "제출"
 * });
 * document.body.appendChild(btn);
 */

const createTag = (tagName, options = {}) => {
    const tag = document.createElement(tagName);

    // 클래스 추가
    if (options.class) {
        tag.classList.add(...options.class.split(" "));
    }

    // 속성 추가 (예: { id: "myId", "data-role": "button" })
    for (const [key, value] of Object.entries(options.attrs || {})) {
        tag.setAttribute(key, value);
    }

    // 텍스트 추가
    if (options.text) {
        tag.innerText = options.text;
    }

    return tag;
};

export default createTag;
