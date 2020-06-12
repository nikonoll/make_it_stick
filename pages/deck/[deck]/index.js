import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'
import { Field, Formik, Form } from 'formik';

const Deck = props => {
  const router = useRouter()
  const { deck } = router.query

  return (
    <>
      <h1>All existing decks</h1>
      <ul>
        {props.decks.map(deck => (
            <div key={deck.id} className="deck">
              <li deck={deck}>{deck.name}</li> <li/>
            </div>
          ))}
        </ul>
       <div className="container">
        <Header />
        <h1>Deck: {deck} number </h1>
        <ul>
          <li>
            <Link href="/deck/[deck]" as={`/deck/${deck}`}>
              <a>First deck</a>
            </Link>
          </li>
          <li>
            <Link href="/deck/[deck]" as={`/deck/${deck}`}>
              <a>Second deck</a>
            </Link>
          </li>
        </ul>
 

        <Formik
          initialValues={{
            question: '',
            answer: '',
          }}
          onSubmit={(values) => {
            fetch('http://localhost:3000/api/cards', {
              method: 'POST',
              body: JSON.stringify({ ...values }),
            });
          }}
        >
          <Form>
            <label>
              Enter the question
              <Field name="question" type="text"></Field>
            </label>
            <label>
              Enter the Answer
              <Field name="answer" type="text"></Field>
            </label>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default Deck

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/decks')
  const decks = await res.json();
  return { props: { decks }}
}