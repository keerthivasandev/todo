import "../css/AddTask.css";

export const AddTask = ({hidden, setHidden}) => {

  const handleOpen = () => {
    setHidden(!(hidden));
    console.log("hello");
  }

  
  return (
    <div>
      <div className="heading">
        <h4 id="heading">To Do</h4>
        <button onClick={handleOpen} style={{all: "unset"}}>
        <img
          id="plus"
          width="32"
          height="32"
          src="https://img.icons8.com/sf-black-filled/64/FFFFFF/plus.png"
          alt="plus"
        />
        </button>
      </div>
    </div>
  );
};
