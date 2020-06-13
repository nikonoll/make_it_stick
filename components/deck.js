
const Deck = props => (
  <div>This is sparta {props.deck}</div>
)

export default Deck

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/deck/${context.query}`)
    const data = await res.json()
    return {props: {...data}}
  }