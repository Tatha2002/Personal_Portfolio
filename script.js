document.addEventListener("DOMContentLoaded", () => {
  // ✅ Typing effect (leave unchanged)
  const words = ["Web Development", "Machine Learning", "Java Development"];
  let i = 0;
  let j = 0;
  let isDeleting = false;
  const dynamicText = document.querySelector('.dynamic-text');
  const speed = 150;

  function type() {
    const word = words[i];
    if (isDeleting) {
      dynamicText.textContent = word.substring(0, j - 1);
      j--;
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }
    } else {
      dynamicText.textContent = word.substring(0, j + 1);
      j++;
      if (j === word.length) {
        isDeleting = true;
      }
    }
    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();

  // ✅ Footer year auto-update (if you have it)
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // ✅ Highlight nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // ✅ Updated fix for last section
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    current = "hobbies";
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

  });
});
