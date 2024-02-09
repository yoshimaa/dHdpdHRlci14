function modalLayerOff() {
  document.getElementById('modal-layer').style.display = 'none';
}

function modalLayerOn() {
  document.getElementById('modal-layer').style.display = 'block';
}

function mobileTabContentOff() {
  document.getElementById('mobiletab-content-a').style.display = 'none';
  document.getElementById('mobiletab-content-b').style.display = 'none';
  document.getElementById('mobiletab-content-c').style.display = 'none';
  document.getElementById('mobiletab-content-d').style.display = 'none';
  document.getElementById('mobiletab-content-e').style.display = 'none';

  document.getElementById('mobiletab-a').checked = false;
  document.getElementById('mobiletab-b').checked = false;
  document.getElementById('mobiletab-c').checked = false;
  document.getElementById('mobiletab-d').checked = false;
  document.getElementById('mobiletab-e').checked = false;
}

/** **********************************************
** スクロール・クリック時のメニューの表示・非表示
*********************************************** */

let lastScrollValue = 0;
document.getElementById('top-menu').style.top = '0';
document.getElementById('bottom-menu').style.bottom = '0';

window.addEventListener('scroll', () => {
  const scrollValue = window.pageYOffset;
  // var scrollValue = window.pageYOffset || document.documentElement.scrollTop
  if (scrollValue > lastScrollValue) {
    document.getElementById('top-menu').style.top = '-100%';
    document.getElementById('bottom-menu').style.bottom = '-100%';
    mobileTabContentOff();
    modalLayerOff();
  } else {
    document.getElementById('top-menu').style.top = '0';
    document.getElementById('bottom-menu').style.bottom = '0';
  }
  lastScrollValue = scrollValue;
}, false);

// document.getElementById("body").onclick = function(){
document.getElementById('click-anywhere').onclick = function () {
  // console.log('クリックされた', document.getElementById("bottom-menu").style.bottom);
  if (document.getElementById('bottom-menu').style.bottom === '0px') {
    document.getElementById('top-menu').style.top = '-100%';
    document.getElementById('bottom-menu').style.bottom = '-100%';
  } else {
    document.getElementById('top-menu').style.top = '0';
    document.getElementById('bottom-menu').style.bottom = '0';
  }
};

/** **********************************************
** スクロール・クリック時のメニューの表示・非表示
*********************************************** */

document.getElementById('mobiletab-a').onclick = function () {
  document.getElementById('top-menu').style.top = '-100%';
  document.getElementById('bottom-menu').style.bottom = '-100%';
  mobileTabContentOff();
  modalLayerOff();
};
document.getElementById('mobiletab-b').onclick = function () {
  document.getElementById('mobiletab-content-b').style.display = 'block';
  document.getElementById('mobiletab-content-c').style.display = 'none';
  document.getElementById('mobiletab-content-d').style.display = 'none';
  document.getElementById('mobiletab-content-e').style.display = 'none';
  document.getElementById('mobiletab-content-a').style.display = 'none';
  modalLayerOn();
};
document.getElementById('mobiletab-c').onclick = function () {
  document.getElementById('mobiletab-content-c').style.display = 'block';
  document.getElementById('mobiletab-content-d').style.display = 'none';
  document.getElementById('mobiletab-content-e').style.display = 'none';
  document.getElementById('mobiletab-content-a').style.display = 'none';
  document.getElementById('mobiletab-content-b').style.display = 'none';
  modalLayerOn();
};
document.getElementById('mobiletab-d').onclick = function () {
  document.getElementById('mobiletab-content-d').style.display = 'block';
  document.getElementById('mobiletab-content-e').style.display = 'none';
  document.getElementById('mobiletab-content-a').style.display = 'none';
  document.getElementById('mobiletab-content-b').style.display = 'none';
  document.getElementById('mobiletab-content-c').style.display = 'none';
  modalLayerOn();
};
document.getElementById('mobiletab-e').onclick = function () {
  document.getElementById('mobiletab-content-e').style.display = 'block';
  document.getElementById('mobiletab-content-a').style.display = 'none';
  document.getElementById('mobiletab-content-b').style.display = 'none';
  document.getElementById('mobiletab-content-c').style.display = 'none';
  document.getElementById('mobiletab-content-d').style.display = 'none';
  modalLayerOn();
};
function closeTabContert() {
  document.getElementById('mobiletab-content-b').style.display = 'none';
  modalLayerOff();
}
document.getElementById('pageTop').onclick = function () {
// document.getElementById('pageTop').addEventListener('click',function(){
  closeTabContert();
// })
};
document.getElementById('indexList').onclick = function () {
  closeTabContert();
};
document.getElementById('modal-layer').onclick = function () {
  mobileTabContentOff();
  modalLayerOff();
};
