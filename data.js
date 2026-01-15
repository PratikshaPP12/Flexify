const dataTable = document.getElementById('dataTable');
const dataRow = document.getElementById('dataRow');

const fnameData = document.getElementById('fnameData');
const snameData = document.getElementById('snameData');
const emailData = document.getElementById('emailData');
const passData = document.getElementById('passData');
const addressData = document.getElementById('addressData');
const mobileNoData = document.getElementById('mobileNoData');
const genderData = document.getElementById('genderData');

fnameData.textContent = localStorage.getItem('fname');
snameData.textContent = localStorage.getItem('sname');
emailData.textContent = localStorage.getItem('email');
passData.textContent = localStorage.getItem('pass');
addressData.textContent = localStorage.getItem('address');
mobileNoData.textContent = localStorage.getItem('mobileNo');
genderData.textContent = localStorage.getItem('gender');

const doneButton = document.getElementById('doneButton');
doneButton.addEventListener('click', () => {
  window.location.href = 'pricing.html';
});