document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      // Close all other accordions
      accordions.forEach((otherAccordion) => {
        const otherHeader = otherAccordion.querySelector(".accordion-header");
        const otherContent = otherAccordion.querySelector(".accordion-content");

        if (otherAccordion !== accordion) {
          otherHeader.classList.remove("active");
          otherContent.classList.remove("open");
        }
      });

      // Toggle the clicked accordion
      header.classList.toggle("active");
      content.classList.toggle("open");
    });
  });
});
