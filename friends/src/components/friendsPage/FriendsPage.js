import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { Link } from 'react-router-dom';
import NewFriend from '../newFriend/NewFriend';
import './styles.css'

const FriendsPage = () => {
    const [friends, setFriends] = useState()
    const [addNew, setAddNew] = useState(false)

    const getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(resp=> {
        setFriends(resp.data)
    })
    .catch(err=> {
    console.log(err);
  })
    }

    useEffect(() => {
        if (!addNew) {
            getFriends()
        }
    }, [addNew])


      const handleClick = () => {
        setAddNew(!addNew)
      }
      const FriendsList = () => {
          return (
            <div className="main-container">
            <div className="cards">
              <div className="card card-1 add-new" onClick={handleClick}>
              <h2 className="card__title">Add New Friend</h2>
              </div>
              {
                  friends ? friends.map(friend => (
                      <div className="card card-1" key={friend.id}>
                          <h2 className="card__title">{`Name: ${friend.name} Age: ${friend.age}`}</h2>
                          <h3 className='card__apply'>{friend.email}</h3>
                      </div>
                  )) : null
              }
            </div>
          </div>
          )
      }
    // Final Return
    return (
        addNew ?
        <NewFriend handleClick={handleClick} /> : <FriendsList />
    )
}

export default FriendsPage