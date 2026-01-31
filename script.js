document.querySelectorAll(".timeline-summary").forEach(button => {
  button.addEventListener("click", () => {
    const detail = button.nextElementSibling;
    detail.classList.toggle("open");
  });
});

const skillBoxes = document.querySelectorAll('.skill-box');
const modal = document.getElementById('skills-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('#skills-modal .close-btn');
skillBoxes.forEach(box => {
  box.addEventListener('click', () => {
    modalTitle.textContent = box.dataset.title;
    modalText.textContent = box.dataset.content;
    modal.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});