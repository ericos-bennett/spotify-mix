import axios from 'axios';

const userAuthRedirect = async () => {
  const res = await axios.get('/api/auth/code');
  window.location.href = res.data;
}

export default function App() {
  return (
    <div className="App">
      <button onClick={userAuthRedirect}>Sign In</button>
    </div>
  );
}
