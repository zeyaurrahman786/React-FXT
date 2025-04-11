// Props as Objects or Arrays

function UserList({ users }) {
    return (
        <ol>
            {users.map(user => (
                <li key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </li>
            ))}
        </ol>
    );
}

export default UserList;