import { createRoot, useState } from 'million/react';
import { Link, Route } from 'wouter';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <Link href="/users/1">
        <a className="link">Profile</a>
      </Link>

      <Route path="/about">About Us</Route>
      <Route path="/users/:name">Dynamic Route</Route>
    </div>
  );
}

createRoot(document.body).render(<App />);
