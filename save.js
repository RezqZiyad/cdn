document.querySelector("#bookmarks").classList.add("active", "in");
function num(n){
  return n.toString().padStart(2, "0")
}

//remove elemnts we don't need
let removed = document.querySelectorAll(
  "button, cite, script, .form-control, .ng-hide, #about, #styles, #advanced, .header, .row-buttons"
);
for (let el of removed) {
  el.parentNode.removeChild(el);
}
//remove all ids as we don't need
removed = document.querySelectorAll("li");
for (let el of removed) {
  el.removeAttribute("id");
}
//modify all titles to inculde only the words
let titles = document.querySelectorAll(".page-title a");
for (let t of titles){
  t.innerHTML = t.innerHTML.split(/ \|| -| dictionary/)[0];
}
document.querySelector(".col-xs-2 ul").remove();

//creating a modified body with all unnecessary attributes removed
let modifiedBody = document.body.innerHTML.replace(
  /(title|(data-)?ng-(\w*)?)="(.*?)"|<!--[\s\S]*?-->/g,
  ""
);
let styles = `<link rel="stylesheet" type="text/css" href="https://s.zyad.ml/s.css">`;
let script = `<script src="https://s.zyad.ml/words.js"></script>`
let date = new Date();
let fileName = `${num(date.getMonth() + 1)} - ${num(date.getDate())}`;
let down = document.createElement("a");
down.href =
  "data:text/html;charset=utf-8,<html><head>" +
  styles + script +
  "</head><body>" +
  modifiedBody +
  "</body></html>";
down.setAttribute("download", fileName);
down.click();
//Statstics from console :)
function z() {
  return (
    document.querySelectorAll(".page-text-list").length +
    "\n" +
    document.querySelectorAll(".page-text-list-item").length
  );
}