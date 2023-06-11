const submitButton = document.querySelector('.subscribe');
const newsLetterInfo = document.querySelector('.info');
let successMessage = document.querySelector('.success');
const imageSection1 = document.querySelector('.image');
let dismissMessage = document.querySelector('.dismissMessage');
const emailInput = document.querySelector('.input');
const verificationResult = document.querySelector('.error');
const dynamicEmail = document.querySelector('#user')

function submitbuttons() {
  submitButton.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission by default

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  dynamicEmail.textContent = `${email}`
    // Check if the email matches the regex
    if (email.match(emailRegex)) {
      // Hide newsletter info and image section
      console.log('hello')
      newsLetterInfo.style.display='none';
      imageSection1.style.display='none';
        successMessage.style.display="block";
     
    } else {
      verificationResult.textContent = 'Valid email required.';
      verificationResult.style.color = 'hsl(4, 100%, 67%)';
      emailInput.style.borderColor = "hsl(4, 80%, 67%)";
      emailInput.style.color="hsl(4, 100%, 67%)";
      emailInput.style.opacity = "2";
      emailInput.style.backgroundColor = "hsl(4, 30%, 67%)";

    }
  });

  dismissMessage.addEventListener('click', function(e) {
    newsLetterInfo.style.display='block';
    imageSection1.style.display='block';
    successMessage.style.display="none"
     
    
  });
  emailInput("")
}

submitbuttons();
