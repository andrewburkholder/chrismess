const heading = document.querySelector("#changeThis");
document.querySelector('form').addEventListener("submit", updateHeading);

function updateHeading(ev) {
    ev.preventDefault();  //prevents page from reloading on submit
    const f = ev.target;
    
    const flickName = f.flickName.value

    const list = document.querySelector("#flicks");
    list.innerHTML += `<li>${flickName}</li>`;

    f.reset;
}