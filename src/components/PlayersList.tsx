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

import soundBirds from '/sounds/birds.ogg'
import soundCity from '/sounds/city.ogg'
import soundCoffee from '/sounds/coffee-shop.ogg'
import soundFireplace from '/sounds/fireplace.ogg'
import soundNight from '/sounds/summer-night.ogg'
import soundPinkNoice from '/sounds/pink-noise.ogg'
import soundRain from '/sounds/rain.ogg'
import soundStorm from '/sounds/storm.ogg'
import soundWaves from '/sounds/waves.ogg'
import soundWhiteNoice from '/sounds/white-noise.ogg'

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
