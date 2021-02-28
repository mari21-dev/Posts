import {createElement} from "../utils/util.js";

const API_KEY = "b7a9aaf7595e483981b85cb778c2902f"

const containerPostElement = document.querySelector(".container-post")
const btnNewsSearchElement = document.querySelector(".search-news")

let posts = [];

const fetchGetPopularPosts = async () => {
    const url = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`

    try {
        let response = await fetch(url);
        return await response.json();
    } catch (e) {
        alert(`Произошла ошибка в методе: ${e.message}`)
    }
}

const fetchGetQueryPosts = async (query) => {
    const url = `http://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`

    try {
        let response = await fetch(url);
        return await response.json();
    } catch (e) {
        alert(`Произошла ошибка в методе: ${e.message}`)
    }
}

const renderPosts = async () => {
    posts = await fetchGetPopularPosts();

    posts.articles.map((element) => {
            const post = {
                title: element.title,
                url: element.url,
                description: element.description,
                content: element.content,
                publishedAt: element.publishedAt
            };

            createElement(
                "div",
                "post",
                `<a href="${post.url}" target="_blank"><h2>${post.title}</h2>\</a>` +
                `<h4>${post.publishedAt}</h4>` +
                `<p>${post.content}</p>` +
                `<h3>${element.description}</h3>`,
                "",
                containerPostElement
            );
        }
    );
}

const renderGetQueryPosts = async () => {
    const inputPostNameElement = document.querySelector(".name-news")
    const name = inputPostNameElement.value

    const posts = await fetchGetQueryPosts(name)

    posts.articles.map((element) => {
            const post = {
                title: element.title,
                url: element.url,
                description: element.description,
                content: element.content,
                publishedAt: element.publishedAt
            };

            createElement(
                "div",
                "post",
                `<a href="${post.url}" target="_blank"><h2>${post.title}</h2>\</a>` +
                `<h4>${post.publishedAt}</h4>` +
                `<p>${post.content}</p>` +
                `<h3>${element.description}</h3>`,
                "",
                containerPostElement
            );
        }
    )
    ;
}

window.onload = () => renderPosts()

btnNewsSearchElement.addEventListener("click", () => {
    containerPostElement.innerHTML = ""

    renderGetQueryPosts()
})