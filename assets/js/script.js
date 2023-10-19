const btnList = document.querySelectorAll(".my-icon");
const overlayList = document.querySelectorAll('.overlay');
const modalList = document.querySelectorAll('.my-modal');
const closeList = document.querySelectorAll(".close");

for (let i = 0; i < btnList.length; i++) {
     btnList[i].addEventListener('click', () => {
          overlayList[i].classList.add('showoverlay');
          modalList[i].classList.add('showmodal');
     })
     closeList[i].addEventListener('click', () => {
          overlayList[i].classList.remove('showoverlay');
          modalList[i].classList.remove('showmodal');
     })
     overlayList[i].addEventListener('click', () => {
          overlayList[i].classList.remove('showoverlay');
          modalList[i].classList.remove('showmodal');
     })
}


