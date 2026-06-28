/* 
   Form validation
   Collects the form values, validates them, and reports to the console:
     - any problems  - console.log("errors", errors)
     - a clean form  - console.log("collected data", data) and reset
*/

// Declaring Variables
// References to the form controls.
var submitButton = document.getElementById("submit-button");
var fullnameInput = document.getElementById("fullname");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

// Regular expression used to validate the email address.
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleSubmit() {

  //Start with initially 2 "Empaty buckets" (data/errors)
  // Object that will store the collected form-data.
  var data = {};
  // Collection that will store the error messages, keyed by field
  // (fn / em / msg) to match the expected console output.
  var errors = {};

  /* Full name */
  var fullnameValue = fullnameInput.value.trim();
  if (fullnameValue !== "") {
    // Pass the collected value to "data".
    data.fullname = fullnameValue;
  } else {
    // Create a corresponding error-message and add it to "errors".
    errors.fn = "Full name is missing";
  }

  /*Email*/
  var emailValue = emailInput.value.trim();
  if (emailValue !== "") {
    // Check if email is valid.
    if (emailPattern.test(emailValue)) {
      // Pass the collected value to "data".
      data.email = emailValue;
    } else {
      // Create a corresponding error-message and add it to "errors".
      errors.em = "Email is invalid";
    }
  } else {
    // Create a corresponding error-message and add it to "errors".
    errors.em = "Email is missing";
  }

  /* Message */
  var messageValue = messageInput.value.trim();
  if (messageValue !== "") {
    // Pass the collected value to "data".
    data.message = messageValue;
  } else {
    // Create a corresponding error-message and add it to "errors".
    errors.msg = "Message name is missing";
  }

  /* Feedback/error */
  if (Object.keys(errors).length > 0) {
    // There is at least one problem: report the errors.
    console.log("ERRORS", errors);
  } else {
    // Everything checks out: report the data and clear the fields.
    console.log("COLLECTED DATA", data);
    fullnameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Register the submit button to the click event.
submitButton.addEventListener("click", handleSubmit);
