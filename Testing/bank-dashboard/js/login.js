document.getElementById('submit-btn').addEventListener('click', function(){
   let emailField = document.getElementById('user-email');
   let email = emailField.value;
   let passField = document.getElementById('user-pass');
   let pass = passField.value;

   // WARNING: this is not a proper way to verify user info!!!
   if(email === 'user@gmail.com' && pass === '12345'){
      location.href = 'dashboard.html'
   }
   else{
      alert('Invalid User!\nPlease Enter this Email & Password:\n-user@gmail.com\n-12345')
   }
})