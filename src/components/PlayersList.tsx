import SectionPlayer from 'components/SectionPlayer'
import { FaCloudRain, FaCity, FaKiwiBird, FaShip, FaCoffee } from 'react-icons/fa';

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
    <SectionPlayer
      playerName='Birds'
      icon={<FaKiwiBird />}
      soundPath='/sounds/birds.ogg' />
    <SectionPlayer
      playerName='Boat'
      icon={<FaShip />}
      soundPath='/sounds/boat.ogg' />
    <SectionPlayer
      playerName='Coffee shop'
      icon={<FaCoffee />}
      soundPath='/sounds/coffee-shop.ogg' />
  </div>)
}
