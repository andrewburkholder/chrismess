class App {
    constructor() {
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    }

    renderProperty(name, value) {
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }

    renderItem(flick) {
        const item = document.createElement('li')
        item.classList.add('flick')

        // get the list of properties
        const properties = Object.keys(flick)

        // loop over the properties
        properties.forEach((propertyName) => {
            // build a span, and append it to the list
            const span = this.renderProperty(propertyName, flick[propertyName])
            item.appendChild(span)
        })
        const buttonSpan = document.createElement("span");
        buttonSpan.classList.add("buttons");
        buttonSpan.innerHTML = "<img onclick='deleteFlick(event)' src='delete.png' alt='Delete this flick'><img onclick='favoriteFlick(event)' src='heart.png' alt='favorite this flick'>";
        item.appendChild(buttonSpan);
        item.setAttribute("flickNumber", i);
        i++

        return item
    }



    handleSubmit(ev) {
        const f = ev.target

        const flick = {
            name: f.flickName.value,
            chris: f.chrisName.value,
        }

        flickArray.push(flick);

        const item = this.renderItem(flick)

        const list = document.querySelector('#flicks')
        list.appendChild(item)

        f.reset()
        f.flickName.focus()
    }
}

const app = new App()

const flickArray = [];
let i = 0;

function deleteFlick(ev) {
    const target = ev.target.parentNode.parentNode;
    let flickToDelete = target.getAttribute('flickNumber');
    flickArray.splice(flickToDelete, 1);
    target.parentNode.removeChild(target);
}

function favoriteFlick(ev) {
    const target = ev.target.parentNode.parentNode
    let flicktoFavorite = target.getAttribute('flickNumber');
     if (flickArray[flicktoFavorite].favorite == true) {
        flickArray[flicktoFavorite].favorite = false;
        target.classList.remove("favorite");
        console.log(flickArray[flicktoFavorite]);

    }
    else { 
    target.classList.add("favorite");
    flickArray[flicktoFavorite].favorite = true;
    console.log(flickArray[flicktoFavorite]);
   }
}
