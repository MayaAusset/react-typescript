import { useState } from 'react';

const GustList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };
  

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}> Add Guest</button>
    </div>
  );
};

export default GustList;
