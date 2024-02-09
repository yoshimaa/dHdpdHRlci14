document.getElementById('opentoc').addEventListener('click', () => {
  document.getElementById('tab-toc').checked = true;

  document.getElementById('modalBg').style.display = 'block';
});
function closeModal() {
  document.getElementById('opentoc').checked = false;
  document.getElementById('modalBg').style.display = 'none';
}
document.getElementById('pageTop').addEventListener('click', () => {
  closeModal();
});
document.getElementById('indexList').addEventListener('click', () => {
  closeModal();
});
document.getElementById('modalBg').addEventListener('click', () => {
  closeModal();
});
// document.getElementById('opentoc').addEventListener('click',function(){
//   console.log('opentocをクリック')
//   if(document.getElementById('opentoc').checked === false){
//     closeModal();
//   }else{
//     console.log('opentocはfalseです')
//   }
// });

// const clickLabel = document.getElementsByClassName("tab-switch").checked
// clickLabel = document.getElementById("tab-chapter").checked;
// console.log('ポップアップクリック', clickLabel)
// if(clickLabel) {
//   console.log('ラベルがクリックされました')
//   return;
// }

// addEventListener("click", (e) => {
//   console.log('クリックされました')
//   if (e.target == modal) {
//     console.log('背景を閉じます')
//     document.getElementById("opentoc").checked = false;
//     modal.style.display = "none";
//   }

//     if (e.target == modal) {
//       console.log('背景を閉じます')
//       document.getElementById("opentoc").checked = false;
//       modal.style.display = "none";
//     }
//   });
