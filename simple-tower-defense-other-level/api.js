
// login and registration
// Add event listeners for the login and registration forms

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('registration-form');
const passwordValidationMessage = document.getElementById('password-validation');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Send a POST request to your login API endpoint
  fetch('https://ets-pemrograman-web-f.cyclic.app/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
        // Handle successful login (e.g., redirect to the game)
        window.location.href = '/game.html';
      } else {
        // Handle login error (e.g., display an error message)
        console.error('Login failed');
      }
    })
    .catch((error) => {
      console.error('Error: ' + error);
    });
});

// registerForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const nama = document.getElementById('register-name').value; 
//   const email = document.getElementById('register-email').value;
//   const password = document.getElementById('register-password').value;

//   // Send a POST request to your registration API endpoint
//   fetch('https://ets-pemrograman-web-f.cyclic.app/users/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ nama, email, password }),
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Handle successful registration (e.g., display a success message)
//         console.log('Registration successful');
//       } else {
//         // Handle registration error (e.g., display an error message)
//         console.error('Registration failed');
//       }
//     })
//     .catch((error) => {
//       console.error('Error: ' + error);
//     });
// });

// // submit score
// const submitButton = document.getElementById("submit-score");
// submitButton.addEventListener("click", () => {
//   const playerName = document.getElementById("player-name").value;
//   const playerScore = document.getElementById("final-score").textContent;

//   const data = {
//     nama: playerName,
//     score: playerScore,
//   };

//   // Use the Fetch API or another library to send a POST request to your API endpoint.
//   fetch("https://ets-pemrograman-web-f.cyclic.app/scores/score", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Score submitted successfully, you can provide feedback to the player.
//         console.log("Score submitted successfully.");
//       } else {
//         // Handle errors if the submission fails.
//         console.error("Score submission failed.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error: " + error);
//     });
// });

// Add event listener for the registration form

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nama = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  // Implement password validation here
  if (!isPasswordValid(password)) {
    // Display a password validation message
    passwordValidationMessage.textContent = 'Password must meet the validation criteria.';
    return;
  }

  // If password is valid, clear the validation message
  passwordValidationMessage.textContent = '';

  // Send a POST request to your registration API endpoint
  fetch('https://ets-pemrograman-web-f.cyclic.app/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nama, email, password }),
  })
    .then((response) => {
      if (response.ok) {
        // Handle successful registration (e.g., display a success message)
        console.log('Registration successful');
      } else {
        // Handle registration error (e.g., display an error message)
        console.error('Registration failed');
      }
    })
    .catch((error) => {
      console.error('Error: ' + error);
    });
});

// Password validation function
function isPasswordValid(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
  
