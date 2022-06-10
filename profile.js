let colorBtn = document.getElementById('color');
let placeBtn = document.getElementById('place');
let ritualBtn = document.getElementById('ritual');

let favColor = 'red'
let favPlace = 'Hawaii'
let favRitual = 'praying'

let form = document.querySelector('#contact');

function clickColorBtn() {
    alert(`Carson's favorite color is ${favColor}`)
}

function clickPlaceBtn() {
    alert(`Carson's favorite place is ${favPlace}`)
}

function clickRitualBtn() {
    alert(`Carson's favorite ritual is ${favRitual}`)
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully')
}

colorBtn.addEventListener('click', clickColorBtn);
placeBtn.addEventListener('click', clickPlaceBtn);
ritualBtn.addEventListener('click', clickRitualBtn);

form.addEventListener('submit', handleSubmit)