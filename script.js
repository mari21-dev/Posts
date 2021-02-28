let postsArray = [];

function createElement(tagName, className, html, id, ship) {
  let element = document.createElement(tagName);
  element.className = className;
  element.innerHTML = html;
  element.id = id;
  ship.append(element);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    console.log(posts);
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
  });
