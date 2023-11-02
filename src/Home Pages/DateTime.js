import React from 'react'

export default function DateTime() {
  const date=new Date()
  let d=date.getDate()
  let m=date.getMonth()
  let y=date.getFullYear()
  return (
    <div>DateTime</div>
  )
}
