import {createElement} from "../utils/util.js";

let postsArray = [];

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