const heading = document.querySelector("#changeThis");
document.querySelector('form').addEventListener("submit", addToList);

function addToList(ev) {
    ev.preventDefault();  //prevents page from reloading on submit
    const f = ev.target;

    const nameSpan = renderProperty("name", f.flickName.value);
    const yearSpan = renderProperty("year", f.flickYear.value);


    const list = document.querySelector("#flicks");
    const newLi = document.createElement('li');
    
    newLi.appendChild(nameSpan);
    newLi.appendChild(yearSpan);
    newLi.classList.add("flick");
    list.appendChild(newLi);

    f.reset();
}

function renderProperty(name, value) {
    const span = document.createElement("span");
    span.classList.add(name);
    span.textContent = value;
    return span;
}