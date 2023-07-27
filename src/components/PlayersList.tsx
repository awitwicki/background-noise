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

import soundBirds from '/sounds/birds.mp3'
import soundCity from '/sounds/city.mp3'
import soundCoffee from '/sounds/coffee-shop.mp3'
import soundFireplace from '/sounds/fireplace.mp3'
import soundNight from '/sounds/summer-night.mp3'
import soundPinkNoice from '/sounds/pink-noise.mp3'
import soundRain from '/sounds/rain.mp3'
import soundStorm from '/sounds/storm.mp3'
import soundWaves from '/sounds/waves.mp3'
import soundWhiteNoice from '/sounds/white-noise.mp3'

export default function () {
  return (
    <div class="flex flex-col gap-5">
      <SectionPlayer
        playerName="Rain"
        icon={<FaCloudRain />}
        soundPath={soundRain}
      />
      <SectionPlayer
        playerName="Storm"
        icon={<FaBolt />}
        soundPath={soundStorm}
      />
      <SectionPlayer
        playerName="Night"
        icon={<FaMoon />}
        soundPath={soundNight}
      />
      <SectionPlayer
        playerName="Fire"
        icon={<FaFire />}
        soundPath={soundFireplace}
      />
      <SectionPlayer
        playerName="City"
        icon={<FaCity />}
        soundPath={soundCity}
      />
      <SectionPlayer
        playerName="Birds"
        icon={<FaCrow />}
        soundPath={soundBirds}
      />
      <SectionPlayer
        playerName="Ocean"
        icon={<FaWater />}
        soundPath={soundWaves}
      />
      <SectionPlayer
        playerName="Coffee shop"
        icon={<FaCoffee />}
        soundPath={soundCoffee}
      />
      <SectionPlayer
        playerName="White noise"
        icon={<FaWaveSquare />}
        soundPath={soundWhiteNoice}
      />
      <SectionPlayer
        playerName="Pink noise"
        icon={<FaWaveSquare />}
        soundPath={soundPinkNoice}
      />
    </div>
  )
}
