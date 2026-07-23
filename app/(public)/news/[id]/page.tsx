import React from 'react'

const NewsByIdPage = async ({params,}: {params: Promise<{ id: string }>}) => {
   const { id } = await params
  return (
    <div>NewsById Page {id}</div>
  )
}

export default NewsByIdPage