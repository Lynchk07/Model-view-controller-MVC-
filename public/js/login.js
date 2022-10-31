const loginForm = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-field').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.signin-form').addEventListener('submit', loginForm);