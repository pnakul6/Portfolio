const burger = document.querySelector(".burger");
const nav = document.getElementById("nav");
if (burger) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
}
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const from = form.email.value.trim();
    const msg = form.message.value.trim();
    const body = msg + "\n\nFrom: " + name + " (" + from + ")";
    window.location.href = "mailto:pnakul6@gmail.com?subject=" + encodeURIComponent("Portfolio message from " + name) + "&body=" + encodeURIComponent(body);
  });
}
