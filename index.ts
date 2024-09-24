interface Resume {
    name: string;
    email: string;
    phone: string;
    experience: string[];
    education: string[];
    skills:string[];
    }
   
function displayResume(resume: Resume) {
    const resumeOutput = document.getElementById("resumeOutput")!;
    resumeOutput.innerHTML = `
    <h2>${resume.name}</h2>
    <p>Email: ${resume.email}</p>
    <p>Phone: ${resume.phone}</p>
    <h3>Experience</h3>
    <ul>
    ${resume.experience.map(exp => `<li>${exp}</li>`).join('')}
    </ul>
    <h3>Education</h3>
    <ul>
    ${resume.education.map(edu => `<li>${edu}</li>`).join('')}
    </ul>
    <h3>Skills</h3>
    <ul>
    ${resume.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
    `;
    }
   
document.getElementById("resumeForm")!.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = [
    (document.getElementById("experience1") as HTMLInputElement).value,
    (document.getElementById("experience2") as HTMLInputElement).value,
    (document.getElementById("experience3") as HTMLInputElement).value,
    ];
    const education = [
        (document.getElementById("graduation") as HTMLInputElement).value,
        (document.getElementById("intermediate") as HTMLInputElement).value,
        (document.getElementById("matriculation") as HTMLInputElement).value,
        ];
        const skills = [
        (document.getElementById("skill1") as HTMLInputElement).value,
        (document.getElementById("skill2") as HTMLInputElement).value,
        (document.getElementById("skill3") as HTMLInputElement).value,
        ];
        console.log({ name, email, phone, experience, education, skills });
        const resume: Resume = {
        name,
        email,
        phone,
        experience,
        education,
        skills,
        };
        displayResume(resume);
    });