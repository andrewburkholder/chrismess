class App {
    constructor() {
        this.list = document.querySelector('#flicks');

        this.flickArray = [];
        this.load();
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    }

    handleSubmit(ev) {
        const f = ev.target

        const flick = {
            name: f.flickName.value,
            chris: f.chrisName.value,
            favorite: false,
        }

        this.addFlick(flick);
        this.save();

        f.reset();
        f.flickName.focus();
    }

    addFlick (flick) {
        this.flickArray.push(flick);

        const item = this.renderItem(flick)

        if (flick.favorite) {
            item.classList.add('favorite')
        }

        this.list.appendChild(item);
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
        deleteButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
        deleteButton.addEventListener('click', (_ev) => this.deleteFlick(flick, item));
        buttonSpan.appendChild(deleteButton);

        //add a favorite button
        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('favorite');
        favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
        favoriteButton.addEventListener('click', (_ev) => this.toggleFavorite(flick, item));
        buttonSpan.appendChild(favoriteButton);
        item.appendChild(buttonSpan);


        return item
    }

    deleteFlick(flick, item) {
        this.list.removeChild(item);
        const i = this.flickArray.indexOf(flick);
        this.flickArray.splice(i, 1);
        this.save()
    }

    toggleFavorite(flick, item) {
        // update both the UI and the array
        flick.favorite = item.classList.toggle('favorite');

        this.save();
    }

    save() {
        localStorage.setItem('flicks', JSON.stringify(this.flickArray));
    }

    load() {
        const flicks = JSON.parse(localStorage.getItem('flicks'));

        if (flicks) {
            flicks.forEach(flick => this.addFlick(flick));
        }
    }
}


const app = new App()

