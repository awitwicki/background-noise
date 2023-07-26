import SectionPlayer from 'components/SectionPlayer'

export default function () {
  return (
  <div>
    <SectionPlayer
      playerName='Rain'
      iconPath='/path/to/your/rain.png'
      soundPath='/public/sounds/rain.ogg' />
    <SectionPlayer
      playerName='City'
      iconPath='/path/to/your/city.png'
      soundPath='/public/sounds/city.ogg' />
  </div>)
}
