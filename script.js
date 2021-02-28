let postsArray = [];

function createElement(tagName, className, html, id, ship) {
  let element = document.createElement(tagName);
  element.className = className;
  element.innerHTML = html;
  element.id = id;
  ship.append(element);
}

async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  postsArray = posts;
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

getPosts();