import ReactDOM from 'react-dom';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <h1>User Research</h1>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
