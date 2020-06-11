import { useRouter } from 'next/router'
import Header from '../../../../components/header'

const Card = () => {
  const router = useRouter()
  const { deck, card } = router.query

  return (
    <>
      <Header />
      <h1>Deck: {deck}</h1>
      <h1>Card: {card}</h1>
    </>
  )
}

export default Card