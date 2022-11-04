import React from 'react'
import {useState, useEffect} from 'react'
import {readUsers} from '../utils'

const ReadUsers = () => {
    //stores out usernames array as state
    const [usernames, setUsernames] = useState()

    useEffect(()=>{
        loadUsers()
    }, [])

    const loadUsers = async () => {
        let users = await readUsers()
        console.log(users)
        setUsernames(users)
    }

    return (
        <div className='container'>
            {usernames?.length > 0 
            //if usernames array exists AND length is greater than 0
                ?(
                    <div className='usernames'>
                        {/* loop through the array using .map mathod and display a h3 of each username */}
                        {usernames.map((user) => (
                            <h3>{user}</h3>
                        ))}
                    </div>
                    //else usernames array doesn't exist AND is less than zero
                ) : (
                    <div className='empty'>
                        {/* display no users found */}
                        <h3>No users found</h3>
                    </div>
                )
            }
        </div>
    )
}

export default ReadUsers; 