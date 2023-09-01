const options = document.querySelectorAll('.option');
const feedback = document.querySelector('.feedback');

options.forEach((option) => {
  option.addEventListener('click', () => {
    options.forEach((btn) => btn.classList.remove('selected', 'correct', 'incorrect'));
    option.classList.add('selected');

    if (option.textContent === 'Hello') {
      option.classList.add('correct');
      feedback.textContent = 'Correto';
    } else {
      option.classList.add('incorrect');
      feedback.textContent = 'Incorreto';
    }
  });
});

const freeResponseInput = document.querySelector('.free-response');
const freeResponseFeedback = document.querySelector('.free-response-feedback');
const confirmButton = document.querySelector('.confirm-button');

confirmButton.addEventListener('click', () => {
  const answer = freeResponseInput.value.toLowerCase();

  freeResponseInput.classList.remove('correct', 'incorrect'); // Remova classes de cor anteriores

  if (answer === 'a cat' || answer === 'a muppet' || answer === 'a duck') {
    freeResponseInput.classList.add('correct');
    freeResponseFeedback.textContent = 'Correto';
  } else {
    freeResponseInput.classList.add('incorrect');
    freeResponseFeedback.textContent = 'Incorreto';
  }
});
