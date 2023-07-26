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

    return (
      <div
        onClick={this.handleClick}
        style={{ cursor: 'pointer' }}>
        <div>{icon}</div>
        <p>{playerName}</p>
      </div>
    );
  }
}

export default SectionPlayer;
