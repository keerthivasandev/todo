
import { useEffect } from 'react';
import '../css/Card.css'
export const AddValue = ({hidden, setHidden, color, setColor, tasks, setTasks}) => {


  const handleSubmit = (e) => {
    const date = new Date();
      e.preventDefault();
     const newTask = {
        id: date.getTime(),
        category : e.target.platform.value,
        title: e.target.task.value,
        description : e.target.description.value,
        color: color,
        time: date.toLocaleDateString()
      }
      setTasks([...tasks, newTask]);
      setHidden(!hidden)
  }

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(tasks));
  }, [tasks]);

  return <div className="addvalue" style={{display: hidden ? "none" : "flex"}}>
   <div id="darksoul-modal">
      <div className="darksoul-modal-content">
        <div className="darksoul-modal-content-header">
          <div className="header" style={{ marginLeft: '-4px' }}>
            <h5 className={color} id="preview" style={{ marginTop: '0px'}}>
              Insert - Task
            </h5>
            <button
              className="color-picker purple"
              onClick={() => setColor("purple")}
            ></button>
            <button
              className="color-picker grey"
              onClick={() => setColor("grey")}
            ></button>
            <button
              className="color-picker green" 
              onClick={() => setColor("green")}
            ></button>
            <button
              className="color-picker blue"
              onClick={() => setColor("blue")}
            ></button>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => setHidden(!hidden)}
          >
            X
          </button>
        </div>
        <div className="darksoul-modal-content-main">
          <form className="darksoul-form" onSubmit={handleSubmit}>
            <label>Platform</label>
            <input
              id="platform"
              type="text"
              name="platform"
              required
            />
            <label>Task</label>
            <input
              id="task"
              type="text"
              name="task"
              required
            />
            <label>Description</label>
            <textarea
              id="description"
              name="description"
            />
            <div className="darksoul-modal-content-footer">
              <div className="darksoul-glowing-button2">
                <button className="darksoul-button2" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
};
