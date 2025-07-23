//your JS code here. If required.
let activeAudio = null;

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
		if (activeAudio) {
			activeAudio.pause();
			activeAudio.currentTime = 0;
		}
		activeAudio = new Audio(`sounds/${sound}.mp3`);
		activeAudio.play();
	})
}

function StopBtn(buttonsCont){
	const stopBtn = document.createElement('button');
	stopBtn.classList.add('stop');
	stopBtn.innerText = "Stop";

	stopBtn.addEventListener("click", () => {
		if (activeAudio) {
			activeAudio.pause();
			activeAudio.currentTime = 0;
			activeAudio = null;
		}
	})

	buttonsCont.appendChild(stopBtn);
}
