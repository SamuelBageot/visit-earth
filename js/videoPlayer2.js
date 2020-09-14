const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '558',
        width: '992',
        videoId: 'T6Zl_DuRvRs'
    })
}


const modalBox = document.querySelector('#player');
const modal = document.querySelector('.modal');
const playBtn = document.querySelector('.play');
const close = document.querySelector('.modal__close');

const openModal = () => {
    modal.classList.add('active');
    modalBox.classList.add('active');
    player.playVideo();
    // document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    modal.classList.remove('active');
    modalBox.classList.remove('active');
    setTimeout(() => player.stopVideo(), 250);
    // document.body.style.overflow = 'visible';
}

playBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);