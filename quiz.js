// JavaScript logic for the quiz

// Correct answers for each quiz
const correctAnswers = {
    'c-quiz': {
      'c-q1': 'myVar',
      'c-q2': 'printf',
      'c-q3': '1 byte',
      'c-q4': 'stdio.h',
    },
    'java-quiz': {
      'java-q1': 'false',
      'java-q2': 'Java Virtual Machine',
      'java-q3': 'start()',
      'java-q4': '0',
    },
    'javascript-quiz': {
      'javascript-q1': 'let',
      'javascript-q2': 'const',
      'javascript-q3': 'parseInt()',
      'javascript-q4': 'function myFunction()',
    },
    'python-quiz': {
      'python-q1': 'str',
      'python-q2': 'def',
      'python-q3': 'import',
      'python-q4': '[]',
    },
    'html-quiz': {
      'html-q1': '<h1>',
      'html-q2': '<a>',
      'html-q3': 'src',
      'html-q4': '<link rel="stylesheet" href="styles.css">',
    },
  };
  
  // Add event listeners to each form
  Object.keys(correctAnswers).forEach((quizId) => {
    const form = document.getElementById(quizId);
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Iterate through each question in the quiz
      const questions = correctAnswers[quizId];
      Object.keys(questions).forEach((questionName) => {
        const selectedOption = form.querySelector(`input[name="${questionName}"]:checked`);
        const feedbackElement = form.querySelector(`input[name="${questionName}"]`).parentElement.parentElement;
  
        // Clear previous feedback
        feedbackElement.querySelectorAll('.feedback').forEach((feedback) => feedback.remove());
  
        if (selectedOption) {
          const isCorrect = selectedOption.value === questions[questionName];
          const feedback = document.createElement('span');
          feedback.className = 'feedback';
          feedback.style.marginLeft = '10px';
          feedback.style.fontWeight = 'bold';
          feedback.style.color = isCorrect ? 'green' : 'red';
          feedback.textContent = isCorrect ? 'Correct!' : 'Wrong!';
  
          // Add feedback after the selected option
          selectedOption.parentElement.appendChild(feedback);
        }
      });
    });
  });
  