//getting access to the form elements
const name = document.getElementById('name');
const email = document.getElementById('email');
const userMessage = document.getElementById('message');
const form = document.getElementById('form');

//console.log(name, email, userMessage);

//error handling function 

const setError = (element , message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('#error');

    errorDisplay.innerHTML = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');


};

//Success handling function

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const successDisplay = inputControl.querySelector('#error');

	successDisplay.innerHTML = '';
	inputControl.classList.remove('error');
	inputControl.classList.add('success');
}

//regular expression for checking our email input

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(email).toLowerCase());
}

//prevent form from submitting data if it can 
form.addEventListener('submit',e => {
	e.preventDefault();

	validateInputs();
});

validateInputs = () => {
	//trimming the values to remove white spaces 
	nameValue = name.value.trim();
	emailValue = email.value.trim();
	userMessageValue = userMessage.value.trim();

	if(nameValue === ''){
      setError(name, 'Please enter your name here!');
	} else {
      setSuccess(name);
	}

	if(emailValue === ''){
		setError(email,'You are kindly required to enter your email!');
	}else if(!validateEmail(emailValue)){
        setError(email, 'Sorry Invalid format here');
		document.querySelector('.warning-icon').style.display = 'initial';
	}
	else {
		setSuccess(email);
		document.querySelector('.warning-icon').style.display = 'none';
	}

    
}
