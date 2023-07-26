import { Suspense } from 'preact/compat'
import UserCount from 'components/UserCount'
import PlayersList from 'components/PlayersList'

export default function () {
  return (
    <div className="container mx-auto max-w-prose p-10 prose">
      <h1>Frontend template</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserCount />
        <PlayersList />
      </Suspense>
    </div>
  )
}
