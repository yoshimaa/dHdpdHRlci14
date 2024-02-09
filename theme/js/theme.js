// alert('hello');
function changeDayTheme() {
  document.getElementById('themecolor').href = '../theme/css/daymode.css';
  sessionStorage.setItem('color-mode', 'day');

  document.getElementById('set-day-theme-mobile').disabled = true;
  document.getElementById('set-day-theme-sidebar').disabled = true;

  document.getElementById('set-night-theme-mobile').checked = false;
  document.getElementById('set-night-theme-mobile').disabled = false;
  document.getElementById('set-night-theme-sidebar').checked = false;
  document.getElementById('set-night-theme-sidebar').disabled = false;

  document.getElementById('set-sepia-theme-mobile').checked = false;
  document.getElementById('set-sepia-theme-mobile').disabled = false;
  document.getElementById('set-sepia-theme-sidebar').checked = false;
  document.getElementById('set-sepia-theme-sidebar').disabled = false;
}
function changeNightTheme() {
  document.getElementById('themecolor').href = '../theme/css/nightmode.css';
  sessionStorage.setItem('color-mode', 'night');

  document.getElementById('set-night-theme-mobile').disabled = true;
  document.getElementById('set-night-theme-sidebar').disabled = true;

  document.getElementById('set-day-theme-mobile').checked = false;
  document.getElementById('set-day-theme-mobile').disabled = false;
  document.getElementById('set-day-theme-sidebar').checked = false;
  document.getElementById('set-day-theme-sidebar').disabled = false;

  document.getElementById('set-sepia-theme-mobile').checked = false;
  document.getElementById('set-sepia-theme-mobile').disabled = false;
  document.getElementById('set-sepia-theme-sidebar').checked = false;
  document.getElementById('set-sepia-theme-sidebar').disabled = false;
}
function changeSepiaTheme() {
  document.getElementById('themecolor').href = '../theme/css/sepiamode.css';
  sessionStorage.setItem('color-mode', 'sepia');

  document.getElementById('set-sepia-theme-mobile').disabled = true;
  document.getElementById('set-sepia-theme-sidebar').disabled = true;

  document.getElementById('set-day-theme-mobile').checked = false;
  document.getElementById('set-day-theme-mobile').disabled = false;
  document.getElementById('set-day-theme-sidebar').checked = false;
  document.getElementById('set-day-theme-sidebar').disabled = false;

  document.getElementById('set-night-theme-mobile').checked = false;
  document.getElementById('set-night-theme-mobile').disabled = false;
  document.getElementById('set-night-theme-sidebar').checked = false;
  document.getElementById('set-night-theme-sidebar').disabled = false;
}

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

  document.getElementById('set-day-theme-mobile').onclick = function () {
    document.getElementById('set-day-theme-sidebar').checked = true;
    changeDayTheme();
  };
  document.getElementById('set-night-theme-mobile').onclick = function () {
    document.getElementById('set-night-theme-sidebar').checked = true;
    changeNightTheme();
  };
  document.getElementById('set-sepia-theme-mobile').onclick = function () {
    document.getElementById('set-sepia-theme-sidebar').checked = true;
    changeSepiaTheme();
  };
  document.getElementById('set-day-theme-sidebar').onclick = function () {
    document.getElementById('set-day-theme-mobile').checked = true;
    changeDayTheme();
  };
  document.getElementById('set-night-theme-sidebar').onclick = function () {
    document.getElementById('set-night-theme-mobile').checked = true;
    changeNightTheme();
  };
  document.getElementById('set-sepia-theme-sidebar').onclick = function () {
    document.getElementById('set-sepia-theme-mobile').checked = true;
    changeSepiaTheme();
  };
});
