// Selecting the resume form element  
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;  

// Function to handle form submission and generate resume  
const handleSubmit = (event: Event): void => {  
    event.preventDefault(); // Prevent the form from submitting and refreshing the page  

    // Collecting data from the form  
    const name = (document.getElementById('name') as HTMLInputElement).value;  
    const email = (document.getElementById('email') as HTMLInputElement).value;  
    const contact = (document.getElementById('phone') as HTMLInputElement).value;  
    const graduation = (document.getElementById('graduation') as HTMLInputElement).value;  
    const intermediate = (document.getElementById('intermediate') as HTMLInputElement).value;  
    const matriculation = (document.getElementById('matriculation') as HTMLInputElement).value;  
    const experience1 = (document.getElementById('experience1') as HTMLInputElement).value;  
    const experience2 = (document.getElementById('experience2') as HTMLInputElement).value;  
    const experience3 = (document.getElementById('experience3') as HTMLInputElement).value;  
    const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;  
    const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;  
    const skill3 = (document.getElementById('skill3') as HTMLInputElement).value;  

    // Generating resume output  
    const resumeOutput: string = `  
        <h2>Resume</h2>  
        <p><strong>Name:</strong> ${name}</p>  
        <p><strong>Email:</strong> ${email}</p>  
        <p><strong>Contact:</strong> ${contact}</p>  
        <h3>Education:</h3>  
        <p>Graduation from: ${graduation}</p>  
        <p>Intermediate from: ${intermediate}</p>  
        <p>Matriculation from: ${matriculation}</p>  
        <h3>Professional Experience:</h3>  
        <p>1. ${experience1}</p>  
        <p>2. ${experience2}</p>  
        <p>3. ${experience3}</p>  
        <h3>Skills:</h3>  
        <p>1. ${skill1}</p>  
        <p>2. ${skill2}</p>  
        <p>3. ${skill3}</p>  
    `;  

    // Display the resume output in the resumeOutput div  
    const resumeOutputDiv = document.getElementById('resumeOutput') as HTMLDivElement;  
    resumeOutputDiv.innerHTML = resumeOutput;  
};  

// Adding event listener for form submission  
if (resumeForm) {  
    resumeForm.addEventListener('submit', handleSubmit);  
}
