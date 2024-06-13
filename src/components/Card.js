import '../css/Card.css';
import { RiDeleteBin6Fill } from "react-icons/ri";

export const Card = ({tasks, setTasks}) => {

    const handleDelete = (id) => {
        const removeItem = tasks.filter((todo) => {
        console.log("hello");
            return todo.id !== id;
          });
        
          setTasks(removeItem)
    }
    
    
  return (
      <div className="cards">
          {tasks.map((todo) =>
                        <div className="wrapper" id="div1" key={todo.id}>
                
                <div className={`darksoul-gradient-card-${todo.color}`} id="1" draggable="true" >
                  
                    <div className="card">

                        <div className="header">
                            <h5 className={todo.color}>{todo.category}</h5>
                            <button style={{all : "unset"}} onClick={() => handleDelete(todo.id)}>
                            <RiDeleteBin6Fill
                            className='delete-icon'
                            style={{
                                width: "25px",
                                height: "25px",
                                padding: "10px",
                                cursor: "pointer"
                            
                            }}
                            />
                            </button>
                        </div>
                        <div className="content">
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                        </div>
                        <div className="footer">
                            <div className="date">
                                <img width="25" height="25" src="https://img.icons8.com/sf-black-filled/64/BFBFFC/calendar-plus.png" alt="calendar-plus"/>
                                <p>{todo.time}</p>
                                </div>
    
                        </div>
                
                    </div>
                </div>
              </div>
)};
              
          </div> 
  )
}
