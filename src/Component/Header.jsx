import React from 'react'

export default function Header((title,count)) {
  return (
    <div>
        <Header>
            <h1>{title}</h1>
            <p>عدد المهام :{count}</p>
        </Header>
    </div>
  )
}
