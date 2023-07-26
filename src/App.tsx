import { Suspense } from 'preact/compat'
import PlayersList from 'components/PlayersList'

export default function () {
  return (
    <div className="container mx-auto max-w-prose p-10 prose">
      <h1>Chill</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <PlayersList />
      </Suspense>
    </div>
  )
}
