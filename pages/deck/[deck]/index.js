import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'
import { Field, Formik, Form } from 'formik';
import Deck from '../../../components/deck';

// TODO: Render deck meta info and all cards of a given deck id
const DeckWrapper = () => {
  const router = useRouter()
  const { deck } = router.query

  return (
    <>

       <div className="container">
        <Header />
        <h1>Deck: {deck} number </h1>
        <p>Deck meta info to be fetched from backend and shown here</p>
        <Deck deck={deck}/>
        <h2>Add another card to the deck:</h2>
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

export default DeckWrapper