document.addEventListener('DOMContentLoaded', () => {
  const colorMode = sessionStorage.getItem('color-mode');
  if (colorMode === null) {
    document.getElementById('themecolor').href = '../theme/css/nightmode.css';
    sessionStorage.setItem('color-mode', 'night');
  } else if (colorMode === 'day') {
    document.getElementById('themecolor').href = '../theme/css/daymode.css';
  } else if (colorMode === 'night') {
    document.getElementById('themecolor').href = '../theme/css/nightmode.css';
  } else if (colorMode === 'sepia') {
    document.getElementById('themecolor').href = '../theme/css/sepiamode.css';
  }

  // setTimeout(function () {
  //     console.log("done");
  //     const body = document.querySelector("#body");
  //     body.style.visibility = "visible"
  //   }, 3000);
});
