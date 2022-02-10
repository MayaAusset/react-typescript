import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h1>User Search</h1>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button onClick={onClick}>Find User</button>
      <div>
        <h2>
          {user && user.name} <br />
        </h2>
        <h3>{user && user.age}</h3>
      </div>
    </div>
  );
};

export default UserSearch;
