// Dark / Light mode toggle
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    toggleBtn.textContent = 'Dark Mode';
  } else {
    toggleBtn.textContent = 'Light Mode';
  }
});

// Card click animation (pulse effect)
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('pulse');
    setTimeout(() => {
      card.classList.remove('pulse');
    }, 600);
  });
});
const notes = document.querySelectorAll('.note');
const displayBox = document.getElementById('note-display');
const noteTitle = document.getElementById('note-title');
const noteContent = document.getElementById('note-content');
const pdfLink = document.getElementById('pdf-link');

notes.forEach(note => {
  note.addEventListener('click', () => {
    const title = note.getAttribute('data-title');
    const content = note.getAttribute('data-content');
    const pdf = note.getAttribute('data-pdf');

    noteTitle.textContent = title;
    noteContent.textContent = content;
    pdfLink.href = pdf;
    pdfLink.textContent = "📄 Open " + title;

    displayBox.classList.add('active');
  });
});

