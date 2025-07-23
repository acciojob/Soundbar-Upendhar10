//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function(){

	const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
	const buttonsCont = document.getElementById('buttons');
	
	DisplayButtons(buttonsCont, sounds);

	StopBtn(buttonsCont);
})

function DisplayButtons(buttonsCont, sounds){

	sounds.forEach((sound) => {
		const btn = document.createElement('button');
		btn.classList.add('btn');
		btn.innerText = sound;

		SoundBtnClick(btn, sound);
		buttonsCont.appendChild(btn);
	})
}

function SoundBtnClick(btn,sound){
	btn.addEventListener("click", () => {
		StopAllSounds();
		const audio = new Audio(`sounds/${sound}.mp3`);
		audio.play();
		audio.appendChild(audio);
	})
}

function StopAllSounds(){
	const allAudios = document.querySelectorAll('audio');

	allAudios.forEach((audio) => {
		audio.pause();
		audio.currentTime = 0;
		audio.remove();
	})
}

function StopBtn(buttonsCont){
	const stopBtn = document.createElement('button');
	stopBtn.classList.add('stop');
	stopBtn.innerText = "Stop";

	stopBtn.addEventListener("click", () => {
		StopAllSounds();
	})

	buttonsCont.appendChild(stopBtn);
}
