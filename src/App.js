import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'

function App() {
  const [people, setPeople] = useState([]);
  console.log("hello")

  useEffect(() => {
    axios.get('/api').then(res => setPeople(res.data));
  }, [] );

  return people.map(( p, index ) => {
    console.log("test")
    return [
      <Button>test button</Button>,
      <h1 key={index}>{p.id} {p.name} {p.age}</h1>
    ]
  })
}

export default App;