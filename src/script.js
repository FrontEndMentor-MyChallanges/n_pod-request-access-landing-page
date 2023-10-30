'use strict';

const form = document.querySelector('.form');
const emailInput = document.querySelector('.inputEmail');
const btnSubmit = document.querySelector('.btnSubmit');
const error = document.querySelector('.errorMsg');

const isRequired = value => (value = '' ? false : true);

const isEmailValid = email => {
	const emailRegex = new RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	return emailRegex.test(email);
};

///////////////////////////////

const showError = function (message = '') {
	error.textContent = message;
	error.classList.remove('hidden');
};

const hideError = function () {
	error.textContent = '';
	error.classList.add('hidden');
};

const checkEmail = function () {
	let isValid = false;

	const email = emailInput.value.trim();
	const validEmail = isEmailValid(email);

	if (!validEmail) {
		showError('Oops! Please check your email');
	} else {
		isValid = true;
	}

	return isValid;
};

// Validation for future (possible more inputs)
const validateForm = () => {
	let isEmailValid = checkEmail();
	let isFormValid = isEmailValid;

	return isFormValid;
};

form.addEventListener('submit', function (e) {
	e.preventDefault();

	let formValid = validateForm();

	if (formValid) {
		console.log('Form validated, can be send to server');
		emailInput.value = '';
	} else {
		console.log('Something is wrong. Check inputs!');
	}
});

emailInput.addEventListener('input', function () {
	hideError();
});

// Oops! Please check your email
