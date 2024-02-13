document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var password = document.getElementById('password').value;
  
    if (password === 'munu') {
      document.getElementById('message').innerText = 'Login successful!';
      // Redirect user to another page
      window.location.href = 'https://www.google.com'; 
    } else {
      document.getElementById('message').innerText = 'Invalid password. Please try again.';
    }
  });
  