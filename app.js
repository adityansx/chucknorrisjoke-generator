const btn = document.querySelector('#get-joke');
const txtArea = document.querySelector('#joke');
const xhr = new XMLHttpRequest();

addEventListener('DOMContentLoaded', getRandomJoke);

btn.addEventListener('click', getRandomJoke);

function getRandomJoke() {
    txtArea.innerHTML = 'Please Wait...';
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 200) {
                txtArea.innerHTML = JSON.parse(this.responseText).value;
            } else {
                txtArea.innerHTML = 'Error! Unable to fetch joke.'
            }
        }
    }
    xhr.send();
}