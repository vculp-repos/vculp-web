// Get the form and message elements
const form = document.getElementById('register-form');
const message = document.getElementById('register-message');

// Submit form using AJAX
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      message.textContent = 'Your details are submitted!';
      message.style.display = 'block';
      form.reset();
    } else {
      message.textContent = 'Form failed due to an error. Please retry.';
      message.style.display = 'block';
    }
  };

  xhr.send(new URLSearchParams(new FormData(form)).toString());
});

//Charcount
{
  var messageTextarea = document.getElementById("message");
  var charCount = document.getElementById("char-count");
  var maxChars = 500;

  messageTextarea.addEventListener("input", function () {
    var charLength = messageTextarea.value.length;

    if (charLength > maxChars) {
      messageTextarea.value = messageTextarea.value.substring(0, maxChars);
      charCount.textContent = "500/500";
      charCount.style.color = "red";
    } else {
      charCount.textContent = charLength + "/" + maxChars;
      charCount.style.color = "black"; // Reset color if within the limit
    }
  });
  
};
