const articles = document.querySelectorAll(".container");
console.log(articles);
const select = document.querySelector("select");
console.log(select);
function updatedisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}
select.addEventListener("change", updatedisplay);
updatedisplay();
