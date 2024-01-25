import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const titleInput = document.getElementById('headerInput');
  const bodyInput = document.getElementById('bodyInput');
  const footerInput = document.getElementById('footerInput');

  const titleText = document.getElementById('headerText');
  const bodyText = document.getElementById('bodyText');
  const footerText = document.getElementById('footerText');

  if (titleInput && titleText) {
    titleInput.addEventListener('input', function() {
      titleText.textContent = this.value;
    });
  }

  if (bodyInput && bodyText) {
    bodyInput.addEventListener('input', function() {
      bodyText.textContent = this.value;
    });
  }

  if (footerInput && footerText) {
    footerInput.addEventListener('input', function() {
      footerText.textContent = this.value;
    });
  }
});
