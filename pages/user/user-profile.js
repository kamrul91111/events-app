import React from 'react'

const UserProfile = ({ username }) => {
  return <div>user-profile</div>
}

// server side codes
export const getServerSideProps = async context => {
  const { params, req, res } = context

  return {
    props: {
      username: 'Kamrul'
    }
  }
}

export default UserProfile
