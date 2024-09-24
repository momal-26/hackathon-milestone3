function displayResume(resume) {
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "\n    <h2>".concat(resume.name, "</h2>\n    <p>Email: ").concat(resume.email, "</p>\n    <p>Phone: ").concat(resume.phone, "</p>\n    <h3>Experience</h3>\n    <ul>\n    ").concat(resume.experience.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "\n    </ul>\n    <h3>Education</h3>\n    <ul>\n    ").concat(resume.education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "\n    </ul>\n    <h3>Skills</h3>\n    <ul>\n    ").concat(resume.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n    </ul>\n    ");
}
document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = [
        document.getElementById("experience1").value,
        document.getElementById("experience2").value,
        document.getElementById("experience3").value,
    ];
    var education = [
        document.getElementById("graduation").value,
        document.getElementById("intermediate").value,
        document.getElementById("matriculation").value,
    ];
    var skills = [
        document.getElementById("skill1").value,
        document.getElementById("skill2").value,
        document.getElementById("skill3").value,
    ];
    console.log({ name: name, email: email, phone: phone, experience: experience, education: education, skills: skills });
    var resume = {
        name: name,
        email: email,
        phone: phone,
        experience: experience,
        education: education,
        skills: skills,
    };
    displayResume(resume);
});
