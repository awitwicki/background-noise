import { Suspense } from 'preact/compat'
import { FaGithub } from "react-icons/fa";
import PlayersList from 'components/PlayersList'

export default function () {
  return (
    <div className="container mx-auto max-w-prose p-10 prose">
        <div className="flex items-center mb-8">
            <h1 className="font-normal mr-2 mb-0">Chill</h1>
            <a
                href="https://github.com/awitwicki/background-noise"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={30} />
            </a>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <PlayersList />
        </Suspense>
    </div>
  )
}
