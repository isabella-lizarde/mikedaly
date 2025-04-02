const emailUser = "mikedaly06";
const emailDomain = "gmail.com";

document
  .getElementById("contact__email")
  .setAttribute("href", `mailto:${emailUser}@${emailDomain}`);

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in"); // Remove class when out of view
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));
