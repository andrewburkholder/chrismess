 const button = document.querySelector('button');
 button.addEventListener('click', updateHeading);
 const heading = document.querySelector('#changeThis');

 function updateHeading() {
    heading.innerHTML = 'Too many chrisses!'
 }