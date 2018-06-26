 const button = document.querySelector('button');
 button.addEventListener('click', updateHeading);
 const heading = document.querySelector('h1');

 function updateHeading() {
    heading.innerHTML = 'Too many chrisses!'
 }