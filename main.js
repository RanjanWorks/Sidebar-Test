
let loader = document.querySelector(".loading");
function loadPage(url) {
  loader.style.display = "block"
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
  loader.style.display = "none"
        document.getElementById("main").innerHTML = xhr.responseText;
      } else {
        // Handle any errors, such as 404 page not found
        console.error("Failed to load content:", xhr.status, xhr.statusText);
      }
    }
  };
  xhr.send();
}

let main = document.querySelector("#main");
let sidebar = document.getElementById("bar");
let overlay = document.querySelector(".overlay");
let allUrls = document.querySelectorAll("[data-url");
function openBox() {
  // main.style.marginLeft = '200px'
  main.classList.toggle("show");
  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
}

setTimeout(()=>{
openBox()
},500)

allUrls.forEach((ur) => {
  ur.addEventListener("click", () => {
    allUrls.forEach(e=>{
        e.classList.remove("active")
    })
    let path = ur.dataset.url;
    loadPage(path);
    let ttl = path.split(".")

    ur.classList.add('active')
    document.title = ttl[0]
  });
});
loadPage("main.html")