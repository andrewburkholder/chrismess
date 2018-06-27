const heading = document.querySelector("#changeThis");
document.querySelector('form').addEventListener("submit", addToList);

function addToList(ev) {
    ev.preventDefault();  //prevents page from reloading on submit
    const f = ev.target;
    
    const flickName = f.flickName.value;
    const flickYear = f.flickYear.value;

    const list = document.querySelector("#flicks");
    const newLi = document.createElement('li');
    newLi.textContent = flickName + " (" + flickYear + ")";
    list.appendChild(newLi);

    f.reset();
}