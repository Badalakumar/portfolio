// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Form submission feedback
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page refresh
      alert("Thank you! Your message has been sent.");
      form.reset(); // Clear the form
    });
  }

  // Add hover effect to project cells
  const cells = document.querySelectorAll(".skills-section .cells .cell");
  cells.forEach(cell => {
    cell.style.transition = "transform 0.3s ease";
    cell.addEventListener("mouseover", () => {
      cell.style.transform = "scale(1.05)";
    });
    cell.addEventListener("mouseout", () => {
      cell.style.transform = "scale(1)";
    });
  });

  // Animate hero links on hover
  const heroLinks = document.querySelectorAll(".hero-section .links a");
  heroLinks.forEach(link => {
    link.style.transition = "all 0.3s ease";
    link.addEventListener("mouseover", () => {
      link.style.backgroundColor = "var(--link-color)";
      link.style.color = "#fff";
    });
    link.addEventListener("mouseout", () => {
      link.style.backgroundColor = "transparent";
      link.style.color = "var(--link-color)";
    });
  });

  // Toggle about section text
  const aboutText = document.querySelector(".testimony-section .text");
  if (aboutText) {
    aboutText.style.cursor = "pointer";
    aboutText.title = "Click to collapse/expand";
    let expanded = true;
    aboutText.addEventListener("click", () => {
      if (expanded) {
        aboutText.style.maxHeight = "50px";
        aboutText.style.overflow = "hidden";
      } else {
        aboutText.style.maxHeight = "none";
        aboutText.style.overflow = "visible";
      }
      expanded = !expanded;
    });
  }
});
