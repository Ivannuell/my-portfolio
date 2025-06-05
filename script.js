// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

window.scrollTo({
  top: 20,
  behavior: "smooth",
});
window.scrollBy({
  top: 20,
  behavior: "smooth",
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling for nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.remove("active");
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ block: "center", behavior: "smooth" });
  });
});

// Contact form submission simulation with glowing feedback
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name && email && message) {
    formMessage.style.color = "#00ffea";
    formMessage.textContent = "Message received! I will get back to you ASAP.";
  } else {
    formMessage.style.color = "#ff00c8";
    formMessage.textContent = "Please fill out all fields.";
  }

  setTimeout(() => {
    formMessage.textContent = "";
  }, 5000);
});

document.querySelectorAll('.skill').forEach((skill)=> {
  skill.addEventListener('click', () => {
    skill.querySelector('p').classList.remove('hidden')
    const div = document.createElement('div')

    div.innerHTML = skill.innerHTML
    div.classList.add(`expanded`)
    div.classList.add([...skill.classList])

    document.querySelector('.skills').append(div)

    div.addEventListener('click', () => {
      skill.querySelector('p').classList.add('hidden')
      div.remove()
      // window.d
      div.removeEventListener(click)
    })
  })


})



