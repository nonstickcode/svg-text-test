import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Function to update SVG text style
  function updateSvgTextStyle(textElement, fontStyle, fontSize, fontFamily) {
    textElement.style.fontStyle =
      fontStyle.value === 'italic' ? 'italic' : 'normal';
    textElement.style.fontWeight =
      fontStyle.value === 'bold' ? 'bold' : 'normal';
    textElement.style.fontSize = fontSize.value + 'px';
    textElement.style.fontFamily = fontFamily.value;
  }

  // Function to populate font size options
  function populateFontSizeOptions(selectorId, defaultSize) {
    const selector = document.getElementById(selectorId);
    for (let i = 4; i <= 40; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      selector.appendChild(option);
      if (i === defaultSize) {
        option.selected = true;
      }
    }
  }

  // Populate font size options for Header, Body, and Footer
  populateFontSizeOptions('headerFontSize', 24);
  populateFontSizeOptions('bodyFontSize', 20);
  populateFontSizeOptions('footerFontSize', 16);

  // Setup and event listeners for Header
  const headerInput = document.getElementById('headerInput');
  const headerText = document.getElementById('headerText');
  const headerFontStyle = document.getElementById('headerFontStyle');
  const headerFontSize = document.getElementById('headerFontSize');
  const headerFontFamily = document.getElementById('headerFontFamily');

  headerInput.addEventListener('input', function () {
    headerText.textContent = this.value;
  });

  [headerFontStyle, headerFontSize, headerFontFamily].forEach((element) => {
    element.addEventListener('change', () => {
      updateSvgTextStyle(
        headerText,
        headerFontStyle,
        headerFontSize,
        headerFontFamily,
      );
    });
  });

  // Setup and event listeners for Body
  const bodyInput = document.getElementById('bodyInput');
  const bodyText = document.getElementById('bodyText');
  const bodyFontStyle = document.getElementById('bodyFontStyle');
  const bodyFontSize = document.getElementById('bodyFontSize');
  const bodyFontFamily = document.getElementById('bodyFontFamily');

  bodyInput.addEventListener('input', function () {
    bodyText.textContent = this.value;
  });

  [bodyFontStyle, bodyFontSize, bodyFontFamily].forEach((element) => {
    element.addEventListener('change', () => {
      updateSvgTextStyle(bodyText, bodyFontStyle, bodyFontSize, bodyFontFamily);
    });
  });

  // Setup and event listeners for Footer
  const footerInput = document.getElementById('footerInput');
  const footerText = document.getElementById('footerText');
  const footerFontStyle = document.getElementById('footerFontStyle');
  const footerFontSize = document.getElementById('footerFontSize');
  const footerFontFamily = document.getElementById('footerFontFamily');

  footerInput.addEventListener('input', function () {
    footerText.textContent = this.value;
  });

  [footerFontStyle, footerFontSize, footerFontFamily].forEach((element) => {
    element.addEventListener('change', () => {
      updateSvgTextStyle(
        footerText,
        footerFontStyle,
        footerFontSize,
        footerFontFamily,
      );
    });
  });
});
