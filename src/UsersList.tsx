import React from 'react';
import './UsersList.css';

interface User {
    id: number;
    name: string;
}

interface UsersListProps {
    usersList: User[],
    removeUMethod: (userID: number) => void,
}

function UsersList(props: UsersListProps): JSX.Element {

    let usersArray = props.usersList;
    let usersArrayElements = usersArray.map((user) => {
        return <li key={user.id} onClick={() => props.removeUMethod(user.id)}>{user.name}</li>
    });

    return (
        <ul id="list">
            {usersArrayElements}
        </ul>
    );

}


export default UsersList;

//pomyśleć sobie o budowie tej aplikacji od dołu...