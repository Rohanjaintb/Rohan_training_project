const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Account created")

  // Form validation code here

  // Redirect to index.html if form is valid
  window.location.assign('index.html');
});
