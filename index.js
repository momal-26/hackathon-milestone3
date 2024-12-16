// Selecting the resume form element  
var resumeForm = document.getElementById('resumeForm');
// Function to handle form submission and generate resume  
var handleSubmit = function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page  
    // Collecting data from the form  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('phone').value;
    var graduation = document.getElementById('graduation').value;
    var intermediate = document.getElementById('intermediate').value;
    var matriculation = document.getElementById('matriculation').value;
    var experience1 = document.getElementById('experience1').value;
    var experience2 = document.getElementById('experience2').value;
    var experience3 = document.getElementById('experience3').value;
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    // Generating resume output  
    var resumeOutput = "  \n        <h2>Resume</h2>  \n        <p><strong>Name:</strong> ".concat(name, "</p>  \n        <p><strong>Email:</strong> ").concat(email, "</p>  \n        <p><strong>Contact:</strong> ").concat(contact, "</p>  \n        <h3>Education:</h3>  \n        <p>Graduation from: ").concat(graduation, "</p>  \n        <p>Intermediate from: ").concat(intermediate, "</p>  \n        <p>Matriculation from: ").concat(matriculation, "</p>  \n        <h3>Professional Experience:</h3>  \n        <p>1. ").concat(experience1, "</p>  \n        <p>2. ").concat(experience2, "</p>  \n        <p>3. ").concat(experience3, "</p>  \n        <h3>Skills:</h3>  \n        <p>1. ").concat(skill1, "</p>  \n        <p>2. ").concat(skill2, "</p>  \n        <p>3. ").concat(skill3, "</p>  \n    ");
    // Display the resume output in the resumeOutput div  
    var resumeOutputDiv = document.getElementById('resumeOutput');
    resumeOutputDiv.innerHTML = resumeOutput;
};
// Adding event listener for form submission  
if (resumeForm) {
    resumeForm.addEventListener('submit', handleSubmit);
}

