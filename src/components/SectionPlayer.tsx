import { Component } from 'preact';
import { SectionPlayerProps } from './SectionPlayerProps';
import { SectionPlayerState } from "../models/SectionPlayerState"

class SectionPlayer extends Component<SectionPlayerProps, SectionPlayerState> {
  constructor(props: SectionPlayerProps) {
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
    const cardClass = this.state.isPlaying ? 'playing' : '';

    return (
      <div class={`flex flex-row border rounded-lg px-5 ${cardClass}`}
        onClick={this.handleClick}
        style={{ cursor: 'pointer' }}>
        <div class="flex flex-col justify-center">
          {this.props.icon}
        </div>
        <div class="pl-2">
          <p class="font-bold">{this.props.playerName}</p>
        </div>
      </div>
    );
  }
}

export default SectionPlayer;
