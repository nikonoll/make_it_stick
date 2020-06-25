import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Header from '../../../components/header';
import Link from 'next/link';

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

// TODO: Render deck meta info and all cards of a given deck id
function DeckWrapper() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.deck && `/api/deck/${query.deck}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="container">
      <Header></Header>
      <h1>{data.title} </h1>
      <p>{data.description}</p>
      <p>Includes {data.cardCount} cards.</p>
      <p>Author:</p>
      <Link href="/deck/[id]/study" as={`/deck/${data.id}/study`}>
      <a>
        <button>Start Learning</button>
      </a>
      </Link>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default DeckWrapper