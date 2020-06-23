import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export default function CardAdder() {

    return (
        <div>
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
    )
}