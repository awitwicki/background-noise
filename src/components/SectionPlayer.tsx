import { Component } from 'preact'
import { IconContext } from 'react-icons'
import { SectionPlayerProps } from 'components/SectionPlayerProps'
import { SectionPlayerState } from 'models/SectionPlayerState'

class SectionPlayer extends Component<SectionPlayerProps, SectionPlayerState> {
  private fadeIntervalId: number | null = null
  private fadeStep = 0.02
  private fadeDuration = 500 // Milliseconds for the fade-in and fade-out effect

  constructor(props: SectionPlayerProps) {
    super(props)
    this.state = {
      isPlaying: false,
      audio: new Audio(this.props.soundPath),
    }
  }

  handleFadeIn = () => {
    const { audio } = this.state

    audio.volume += this.fadeStep

    if (audio.volume < 1) {
      this.fadeIntervalId = requestAnimationFrame(this.handleFadeIn)
    } else {
      audio.volume = 1.0
      this.fadeIntervalId = null
    }
  }

  handleFadeOut = () => {
    const { audio } = this.state

    audio.volume -= this.fadeStep

    if (audio.volume > 0) {
      this.fadeIntervalId = requestAnimationFrame(this.handleFadeOut)
    } else {
      audio.pause()
      audio.volume = 1.0
      this.fadeIntervalId = null
    }
  }

  handleClick = () => {
    const { audio, isPlaying } = this.state

    if (!isPlaying) {
      this.setState({ isPlaying: true })
      audio.loop = true

      if (this.fadeIntervalId !== null) {
        cancelAnimationFrame(this.fadeIntervalId)
      }

      audio.volume = 0 // Start with zero volume for fade-in
      audio.play()

      this.fadeIntervalId = requestAnimationFrame(this.handleFadeIn)
    } else {
      this.setState({ isPlaying: false })

      if (this.fadeIntervalId !== null) {
        cancelAnimationFrame(this.fadeIntervalId)
      }

      this.fadeIntervalId = requestAnimationFrame(this.handleFadeOut)
    }
  }

  componentWillUnmount() {
    const { audio } = this.state
    audio.pause() // Pause the audio when the component unmounts
  }

  render() {
    const cardClass = this.state.isPlaying ? 'playing' : ''

    return (
      <div
        class={`flex flex-row border rounded-lg px-5 player ${cardClass}`}
        onClick={this.handleClick}
        style={{ cursor: 'pointer' }}
      >
        <div class="flex flex-col justify-center">
          <IconContext.Provider value={{ size: '2em' }}>
            {this.props.icon}
          </IconContext.Provider>
        </div>
        <div class="pl-4">
          <p>{this.props.playerName}</p>
        </div>
      </div>
    )
  }
}

export default SectionPlayer
