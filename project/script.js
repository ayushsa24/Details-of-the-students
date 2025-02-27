function showDetails(roll, name, job, course, email, phone, address, imgSrc) {
    document.getElementById("modalRoll").textContent = roll;
    document.getElementById("modalName").textContent = name;
    document.getElementById("modalJob").textContent = job;
    document.getElementById("modalCourse").textContent = course;
    document.getElementById("modalEmail").textContent = email;
    document.getElementById("modalPhone").textContent = phone;
    document.getElementById("modalAddress").textContent = address;
    document.getElementById("modalImage").src = imgSrc;

    const modal = document.getElementById("studentModal");
    modal.style.display = "flex";


    modal.classList.add("fade-in");
    setTimeout(() => {
        modal.classList.remove("fade-in");
    }, 300);
}


function closeModal() {
    document.getElementById("studentModal").style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("studentModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function searchStudent() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const studentCards = document.querySelectorAll(".student-card");

    studentCards.forEach(card => {
        const name = card.getAttribute("data-name").toLowerCase();
        const roll = card.getAttribute("data-roll").toLowerCase();


        if (name.includes(searchInput) || roll.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}