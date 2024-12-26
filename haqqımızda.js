document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.5, 
        }
    );

    const welcomeText = document.querySelector(".welcome-text");
    observer.observe(welcomeText);
});

let currentSlide = 0;
function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + step + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
}

document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const reviewerName = document.getElementById("reviewerName").value;
    const reviewStars = document.getElementById("reviewStars").value;
    const reviewText = document.getElementById("reviewText").value;
    const reviewImage = document.getElementById("reviewImage").files[0];

    let imageUrl = "";
    if (reviewImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageUrl = e.target.result; 
            appendReview(reviewerName, reviewStars, reviewText, imageUrl); 
        };
        reader.readAsDataURL(reviewImage);
    } else {
        appendReview(reviewerName, reviewStars, reviewText, null); 
    }
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    setTimeout(function() {
        successMessage.style.display = "none"; 
    }, 3000);
});

function appendReview(name, stars, text, imageUrl) {
    const reviewSection = document.querySelector(".reviews .slider");

    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("slide");

    const imageElement = imageUrl ? `<img src="${imageUrl}" alt="User Image" class="user-img" />` : "";

    reviewDiv.innerHTML = `
        ${imageElement}
        <div class="stars">${"★".repeat(stars)}${"☆".repeat(5 - stars)}</div>
        <p class="review-text">
            <span class="quote">“</span>${text}<span class="quote">”</span>
        </p>
        <p class="reviewer">${name}</p>
    `;
    
    reviewSection.appendChild(reviewDiv);
}



