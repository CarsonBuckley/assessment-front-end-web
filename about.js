console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully')
}

function mouseOverPic() {
    alert("You are so cute and intelligent it's crazy")
}



let form = document.querySelector('#contact');
let pic = document.getElementById('duck-pic')

form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', mouseOverPic)
