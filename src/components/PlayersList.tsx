import SectionPlayer from 'components/SectionPlayer'
import { FaCloudRain, FaCity } from 'react-icons/fa';

export default function () {
  return (
  <div class="flex flex-col gap-5">
    <SectionPlayer
      playerName='Rain'
      icon={<FaCloudRain />}
      soundPath='/sounds/rain.ogg' />
    <SectionPlayer
      playerName='City'
      icon={<FaCity />}
      soundPath='/sounds/city.ogg' />
  </div>)
}
