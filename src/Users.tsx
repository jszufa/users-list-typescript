import React, { useState } from 'react';
import './Users.css';

import UsersList from './UsersList';

// po pierwsze przepisać jako funkcyjny komponent

function Users(): JSX.Element {

    interface User {
        id: number;
        name: string;
    }

    let inputRef: HTMLInputElement | null;

    const [users, setUsers] = useState<User[]>([]);


    const updateUsers = (text: string) => {

        /* console.log('Uruchomiono updateUsers') */
        let index: number = Date.now();

        setUsers(
            /* console.log('Uruchomiono setState') */
            users.concat({ id: index, name: text }));

        if (inputRef) {
            inputRef.value = '';
        }
    }

    const removeUser = (userID: number) => {
        /* console.log('removeUser function'); */
        console.log(userID);

        setUsers(
            users.filter(user => user.id !== userID)
        )

    }



    return (
        <div className='users'>
            <h1>Users' List</h1>

            <input ref={(data) => { inputRef = data }} type="text" placeholder='Enter name' />

            <button onClick={() => { if (inputRef) { updateUsers(inputRef.value) } }}>Add user</button>

            <UsersList usersList={users} removeUMethod={removeUser} />
        </div>

    )

}

export default Users;