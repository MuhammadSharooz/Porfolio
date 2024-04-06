let cross = document.querySelector(".cross");
let menuicon = document.querySelector("#menuicon")
let menu = document.querySelector('.menu');
let active = window.location.href;
let navlist = document.querySelectorAll('#navlist a');
let darktheme = document.querySelector('#dark-icon')
let darkTheme = document.querySelector('.darktheme');


function sendMail() {
    var params = {
     from_name : document.getElementById("Full_Name").value,
     email_id : document.getElementById("Email").value,
     message : document.getElementById("message").value,
     phone_number : document.getElementById("Phone_Number").value,
     company_name : document.getElementById("Company_Name").value,
    };
    var serviceId = "service_6ytlt1q";
    var templateId = "template_479g2hq";

    emailjs.send(serviceId, templateId, params).then(function (res){
        Swal.fire({
            title: "Congratulation",
            text: "Your Email was  sent Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer:2500,
          } + res.status)
    })
}




function getActiveSection() {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + 150; // Adjusted scroll position to account for navigation height
    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            return sectionId;
        }
    }
    return null;
}
function setActiveLink(activeSection) {
    const navLinks = document.querySelectorAll('#navlist a');


    navLinks.forEach(link => {
        if (link.getAttribute('href').slice(1) === activeSection) {
            link.classList.add('active');
            menu.style.display = "none"
        } else {
            link.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', function () {
    const activeSection = getActiveSection();
    setActiveLink(activeSection);
});
document.addEventListener('DOMContentLoaded', function () {
    const activeSection = getActiveSection();
    setActiveLink(activeSection);
});


cross.addEventListener("click", () => {
    menu.style.display = "none"
})
menuicon.addEventListener("click", () => {
    menu.style.display = "flex"

})

darktheme.addEventListener('click', () => {
    document.body.classList.toggle("darkMode");
    let mydarkMode = document.body.classList.contains("darkMode");
    if (mydarkMode) {
        darktheme.src = "./Dark theme icon/moon.png";
        darktheme.src = "../Dark theme icon/moon.png";

    } else {
        darktheme.src = "./Dark theme icon/sun.png"
        darktheme.src = "../Dark theme icon/sun.png"
    }

    localStorage.setItem("darkMode darktheme", mydarkMode);

});
let mydarkMode = localStorage.getItem("darkMode darktheme")
if (mydarkMode === "true") {
    document.body.classList.add('darkMode');
    darktheme.src = "./Dark theme icon/moon.png";
    darktheme.src = "../Dark theme icon/moon.png";

} else {
    darktheme.src = "./Dark theme icon/sun.png";
    darktheme.src = "../Dark theme icon/sun.png"

}

function darkicon() {
    document.body.classList.toggle("darkMode");
    let isdarkMode = document.body.classList.contains("darkMode");
    if (isdarkMode) {
        darkTheme.src = "./Dark theme icon/moon.png";
        darkTheme.src = "../Dark theme icon/moon.png";
    } else {
        darkTheme.src = "./Dark theme icon/sun.png";
        darkTheme.src = "../Dark theme icon/sun.png";

    }
    localStorage.setItem("darkMode darkTheme", isdarkMode)
}

let isdarkMode = localStorage.getItem("darkMode darkTheme")
if (isdarkMode === "true") {
    document.body.classList.add('darkMode');
    darkTheme.src = "./Dark theme icon/moon.png";
    darkTheme.src = "../Dark theme icon/moon.png";
} else {
    darkTheme.src = "./Dark theme icon/sun.png";
    darkTheme.src = "../Dark theme icon/sun.png"
}


