import React from 'react'

const UserProfile = ({ username }) => {
  return <div>User-Profile</div>
}

// server side codes
export const getServerSideProps = async context => {
  return {
    props: {
      username: 'Kamrul'
    }
  }
}

export default UserProfile
