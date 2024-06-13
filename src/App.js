import './App.css';
import { AddTask } from './components/AddTask';
import { Card } from './components/Card';
import { AddValue } from './components/AddValue';
import { useState } from 'react';

function App() {

  const [hidden, setHidden] = useState(true);  

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("todolist")) || []);

  
  const [color, setColor] = useState('blue');
  
  return (
    <div className="App">
      <main style={{filter: hidden ? "" : "blur(2px)"}}>
     <AddTask hidden={hidden} setHidden={setHidden}/>
      <Card
          tasks={tasks}
          setTasks={setTasks}
          color={color}
       />
     </main>
     <AddValue hidden={hidden} setHidden={setHidden} color={color} setColor={setColor} tasks={tasks} setTasks={setTasks}/>
    </div>
    
  );
}

export default App;
