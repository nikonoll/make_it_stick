import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'
import { Field, Formik, Form } from 'formik';
import { PrismaClient } from '@prisma/client';

const Deck = ({ cards }) => {
  const router = useRouter()
  const { deck } = router.query

  return (
    <>
      <div className="container">
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
        <div>
          {cards.map((card) => (
            <div key={card.id}>
              <p>Question: {card.question}</p>
              <p>Answer: {card.answer}</p>
              <p>Score: {card.score}</p>
            </div>
          ))}
        </div>
        <Formik
          initialValues={{
            question: '',
            answer: '',
            score: 0,
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
            <label>
              Enter the Score
              <Field name="score" type="number"></Field>
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
  const prisma = new PrismaClient();
  const cards = await prisma.card.findMany();
  return { props: { cards } };
};