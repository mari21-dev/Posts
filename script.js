let postsArray = [];

function createElement(tagName, className, html, id, ship) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = html;
    element.id = id;
    ship.append(element);
}

async function fetchGetPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return await response.json();
    } catch (e) {
        alert(`Произошла ошибка в методе: ${e.message}`)
    }
}

const renderPosts = async () => {
    postsArray = await fetchGetPosts();
    postsArray.map((element) => {
        const post = {
            title: element.title,
            body: element.body,
        };

        createElement(
            "div",
            "post",
            `<h2>${post.title}</h2><p>${post.body}</p>`,
            "",
            document.querySelector(".container-post")
        );
    });
}

window.onload = () => renderPosts()