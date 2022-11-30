export function titleTag(tag) {
    const titleTag = `
        <p class="sub">${tag}</p>
        <span class="subBtn" role="button"><img src="./images/icon-remove.svg" alt="" aria-hidden="true"></span>
    `
    return titleTag;
}