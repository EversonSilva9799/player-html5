const video = document.querySelector('#video');
const buttonPlayer = document.getElementsByClassName('button-player')[0];
const boxProgressVideo = document.getElementsByClassName('progress-video')[0];
const progressVideo = document.getElementById('progress');

// Controla o play e a pausa do vídeo
buttonPlayer.addEventListener('click', function() {
	if (video.paused) {
		video.play();

		buttonPlayer.children[0].classList.add('fa-pause');
		buttonPlayer.children[0].classList.remove('fa-play');
		//this.textContent = 'Pause';
	} else if (video.play) {
		video.pause();
		buttonPlayer.children[0].classList.remove('fa-pause');
		buttonPlayer.children[0].classList.add('fa-play');
	}
});

let updateProgressScroll = function() {
	let value = 100 / video.duration * video.currentTime;

	progressVideo.style.width = `${value}%`;
};

video.addEventListener('timeupdate', updateProgressScroll);

// Exibi o tempo do vídeo no instante que o cursor passa por cima do scroll de progress
boxProgressVideo.addEventListener('mousemove', function(event) {
	let scrollProgressWidth = boxProgressVideo.offsetWidth;
	let clicado = event.offsetX;

	let value = clicado * 100 / scrollProgressWidth;

	let duration = video.duration;
	let current = parseInt(duration * value / 100);
});

function alterCurrentTimeVideo(event) {
	console.log(video.currentTime);
	let clicado = event.offsetX;
	let scrollProgressWidth = boxProgressVideo.offsetWidth;

	let value = clicado * 100 / scrollProgressWidth;

	let duration = video.duration;
	let current = duration * value / 100;

	progressVideo.style.width = `${value}%`;

	//video.currentTime += 5;
	video.currentTime = parseInt(current);
}

//Função para adicionar e carregar um novo vídeo
document.getElementsByClassName('new-video')[0].addEventListener('change', function() {
	var urlVideo = this.value;
	urlVideo += '.mp4';
	document.getElementsByTagName('source')[0].setAttribute('src', urlVideo);
	this.value = '';
	video.load();
	// myVideo.play();
});
