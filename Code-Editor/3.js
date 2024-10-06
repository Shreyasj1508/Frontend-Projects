let html = document.querySelector(".html-editor textarea");
let css = document.querySelector(".css-editor textarea");
let js = document.querySelector(".js-editor textarea");
let save = document.querySelector("#save");
let output = document.querySelector("#out");
let outputContainer = document.querySelector(".output-container");
let full = document.querySelector("#full");
let copy = document.querySelectorAll(".copy");
save.addEventListener("click", () => {
  output.contentDocument.body.innerHTML = html.value;
  output.contentDocument.head.innerHTML = `<style> ${css.value}</style>`;
  output.contentWindow.eval(js.value);
});

full.addEventListener("click", () => {
  outputContainer.classList.toggle("output-full-active");
  if (outputContainer.classList.contains("output-full-active")) {
    full.style.transform = "rotate(180deg)";
  } else {
    full.style.transform = "rotate(0deg)";
  }
});

copy.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("copy1")) {
      navigator.clipboard.writeText(html.value);
    } else if (e.classList.contains("copy2")) {
      navigator.clipboard.writeText(css.value);
    } else {
      navigator.clipboard.writeText(js.value);
    }
  });
});
