import { Component, render } from 'preact';

class SectionPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      audio: new Audio(this.props.soundPath)
    };
  }

  handleClick = () => {
    const { audio, isPlaying } = this.state;

    if (!isPlaying) {
      this.setState({ isPlaying: true });
      audio.loop = true;
      audio.play();
    } else {
      this.setState({ isPlaying: false });
      audio.pause();
    }
  };

  render() {
    const { playerName, icon, soundPath } = this.props;
    // Define CSS classes based on the isPlaying state
    const cardClass = this.state.isPlaying ? 'playing' : '';

    return (
      <div class={`flex flex-row border rounded-lg px-5 ${cardClass}`}
        onClick={this.handleClick}
        style={{ cursor: 'pointer' }}>
        <div class="flex flex-col justify-center">
          {icon}
        </div>
        <div class="pl-2">
          <p class="font-bold">{playerName}</p>
        </div>
      </div>
    );
  }
}

export default SectionPlayer;
