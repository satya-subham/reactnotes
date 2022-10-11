import React from 'react'
import { useParams } from 'react-router-dom'

export function Content() {
    const { id } = useParams();
  return (
    <>
    <p>This is page content {id}</p>
    </>
  )
}
