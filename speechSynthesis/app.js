const msg= new speechSynthesis();
const values=[];
const voiceDrown= document.querySelector('name'=value);
const options=document.querySelectorAll('[type="range"], [name="text"]');
const speakButton= document.querySelector('#start');
const stop=document.querySelector('#stop');
msg.text= document.querySelector('name="text"]').value;


function populateVoices() {
voices = this.getVoices();
voicesDropdown.innerHTML = voices
  .filter(voice => voice.lang.includes('en'))
  .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
  .join('');
}

function setVoice() {
msg.voice = voices.find(voice => voice.name === this.value);
toggle();
}

function toggle(startOver =true){
  speechSynthesis.cancel();

  if(startOver){
      speechSynthesis.speak(msg);
  }
}

function setOption(){
console.log(this.name, this.value);
msg[this.name]=this.value;
toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));


