// Get the form and message elements
const form = document.getElementById('register-form');
const message = document.getElementById('register-message');

// Submit form using AJAX
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      message.textContent = 'You details are submitted!';
      message.style.display = 'block';
      form.reset();
    } else {
      message.textContent = 'Form failed due to an error. Please retry.';
      message.style.display = 'block';
    }
  };

  xhr.send(new URLSearchParams(new FormData(form)).toString());
});
