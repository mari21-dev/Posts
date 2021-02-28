export const createElement = (tagName, className, html, id, ship) => {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = html;
    element.id = id;
    ship.append(element);
}