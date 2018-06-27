const heading = document.querySelector("#changeThis");
document.querySelector('form').addEventListener("submit", addToList);

function addToList(ev) {
    ev.preventDefault();  //prevents page from reloading on submit
    const f = ev.target;
    
    const flickName = f.flickName.value;
    const flickYear = f.flickYear.value;

    const list = document.querySelector("#flicks");
    const newLi = document.createElement('li');
    const flickNameSpan = document.createElement("span");
    const flickYearSpan = document.createElement("span");
    flickNameSpan.textContent = flickName;
    flickNameSpan.classList.add("flickName");
    flickYearSpan.textContent = flickYear;
    flickYearSpan.classList.add("flickYear");
    newLi.appendChild(flickNameSpan);
    newLi.appendChild(flickYearSpan);
    newLi.classList.add("flick");
    list.appendChild(newLi);

    f.reset();
}