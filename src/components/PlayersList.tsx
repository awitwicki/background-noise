import {
  FaBolt,
  FaCity,
  FaCloudRain,
  FaCoffee,
  FaCrow,
  FaFire,
  FaMoon,
  FaWater,
  FaWaveSquare,
} from 'react-icons/fa'
import SectionPlayer from 'components/SectionPlayer'

export default function () {
  return (
    <div class="flex flex-col gap-5">
      <SectionPlayer
        playerName="Rain"
        icon={<FaCloudRain />}
        soundPath="/sounds/rain.ogg"
      />
      <SectionPlayer
        playerName="Storm"
        icon={<FaBolt />}
        soundPath="/sounds/storm.ogg"
      />
      <SectionPlayer
        playerName="Night"
        icon={<FaMoon />}
        soundPath="/sounds/summer-night.ogg"
      />
      <SectionPlayer
        playerName="Fire"
        icon={<FaFire />}
        soundPath="/sounds/fireplace.ogg"
      />
      <SectionPlayer
        playerName="City"
        icon={<FaCity />}
        soundPath="/sounds/city.ogg"
      />
      <SectionPlayer
        playerName="Birds"
        icon={<FaCrow />}
        soundPath="/sounds/birds.ogg"
      />
      <SectionPlayer
        playerName="Ocean"
        icon={<FaWater />}
        soundPath="/sounds/waves.ogg"
      />
      <SectionPlayer
        playerName="Coffee shop"
        icon={<FaCoffee />}
        soundPath="/sounds/coffee-shop.ogg"
      />
      <SectionPlayer
        playerName="White noise"
        icon={<FaWaveSquare />}
        soundPath="/sounds/white-noise.ogg"
      />
      <SectionPlayer
        playerName="Pink noise"
        icon={<FaWaveSquare />}
        soundPath="/sounds/pink-noise.ogg"
      />
    </div>
  )
}
