import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

// TODO: Render deck meta info and all cards of a given deck id
export default function DeckWrapper() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.deck && `/api/deck/${query.deck}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="container">

<p>{query.deck}</p>
      <h1>{ data[0].name } </h1>
      <p>{ data[0].description }</p>

      <p>lalall</p>
    </div>
  )
}