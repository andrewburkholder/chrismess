const heading = document.querySelector("#changeThis");
document.querySelector('form').addEventListener("submit", updateHeading);

function updateHeading(ev) {
    ev.preventDefault();  //prevents page from reloading on submit
    const f = ev.target;
    
    const flickName = f.flickName.value

    const list = document.querySelector("#flicks");
    const newLi = document.createElement('li');
    newLi.textContent = `${flickName}`;
    list.appendChild(newLi);

    f.reset();
}