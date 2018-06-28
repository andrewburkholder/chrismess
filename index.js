class App {
    constructor() {
        this.list = document.querySelector('#flicks');

        this.flickArray = [];
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
      //  if (localStorage.getItem("flickArray")) this.flickArray = JSON.parse(localStorage.getItem("flickArray"));
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
        //create delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'delete';
        deleteButton.addEventListener('click', (_ev) => this.deleteFlick(flick, item));
        buttonSpan.appendChild(deleteButton);

        //add a favorite button
        const favoriteButton =document.createElement('button');
        favoriteButton.classList.add('favorite');
        favoriteButton.textContent = 'favorite';
        favoriteButton.addEventListener('click', (_ev) => this.toggleFavorite(flick, item));
        buttonSpan.appendChild(favoriteButton);
        item.appendChild(buttonSpan);
        

        return item
    }



    handleSubmit(ev) {
        const f = ev.target

        const flick = {
            name: f.flickName.value,
            chris: f.chrisName.value,
            favorite: false,
        }

        this.flickArray.push(flick);
        localStorage.setItem("flickArray", JSON.stringify(this.flickArray));

        const item = this.renderItem(flick)

        this.list.appendChild(item);

        f.reset()
        f.flickName.focus()
    }

    deleteFlick(flick, item) {
        this.list.removeChild(item);
        const i = this.flickArray.indexOf(flick);
        this.flickArray.splice(i, 1);
    }

    toggleFavorite(flick, item) {
        // update both the UI and the array
        flick.favorite = item.classList.toggle('favorite')
       }
    }


const app = new App()

