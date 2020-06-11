import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Deck = () => {
  const router = useRouter()
  const { deck } = router.query

  return (
    <>
      <Header />
      <h1>Deck: {deck}</h1>
      <ul>
        <li>
          <Link href="/deck/[deck]/[card]" as={`/deck/${deck}/first-card`}>
            <a>First card</a>
          </Link>
        </li>
        <li>
          <Link href="/deck/[deck]/[card]" as={`/deck/${deck}/second-card`}>
            <a>Second card</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Deck
