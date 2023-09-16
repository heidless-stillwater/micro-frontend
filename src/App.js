import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState([]);

  console.log("hello")

  useEffect(() => {
    axios.get('/api').then(res => setPeople(res.data));
  }, [] );

  return people.map(( p, index ) => {
    console.log("test")
    return <h1 key={index}>{p.id} {p.name} {p.age}</h1>
  })
}

export default App;