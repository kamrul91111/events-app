import React from 'react'

const SingleUser = ({ id }) => {
  return <div>{id}</div>
}


// no need for any functions for dynamic paths as the pages get rendered on the server
export const getServerSideProps = async context => {
  const { params } = context
  const uid = params.uid
  return {
    props: {
      id: `userid-${uid}`
    }
  }
}

export default SingleUser
