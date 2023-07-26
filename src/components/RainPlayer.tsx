let isPlaying = false;
const audioUrl = '/public/sounds/rain.ogg';
const audio = new Audio(audioUrl);
audio.loop = true;

function handleClick() {
  if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    isPlaying = !isPlaying;
}

export default function () {
    return <div 
    onClick={handleClick} 
    style={{ cursor: 'pointer' }}>
    <img src="/path/to/your/rain/icon.png" alt="Rain Icon" />
    <p>Rain</p>
  </div>
}
