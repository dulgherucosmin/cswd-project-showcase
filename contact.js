const commentForm = document.querySelector("main .comments .comment-form");
const nameInput = document.querySelector("main .comments .comment-form #name-input");
const subjectInput = document.querySelector("main .comments .comment-form #subject-input");
const emailInput = document.querySelector("main .comments .comment-form #email-input");
const contentInput = document.querySelector("main .comments .comment-form #content-input");

const responseParagraph = document.getElementById("response");

function checkValidEmail(email) {

    // Regex for valid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is a valid one (test it using the regex)
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;

}

commentForm.addEventListener('submit', (e) => {

    // Prevent form submission before values are entered
    e.preventDefault();

    // Reset errorParagraph each submission
    responseParagraph.classList.remove('active');

    // Trim input values to avoid trailing whitespace
    let name = nameInput.value.trim();
    let content = contentInput.value.trim();

    // Name must be at least 2 characters
    if (name.length < 2) {
        responseParagraph.classList.add('active');
        responseParagraph.innerHTML = "Sorry! The name is too short.";
        return;
    };

    // Name must be less than 32 characters
    if (name.length > 32) {
        responseParagraph.classList.add('active');
        responseParagraph.innerHTML = "Sorry! The name is too long.";
        return;
    };

    responseParagraph.classList.add('active');
    responseParagraph.innerHTML = "Form Submitted! Thank you for your feedback.";
    
})
