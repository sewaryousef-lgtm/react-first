import Taskiteam from './Taskiteam' // استيراد المكون الصغير

function Tasklist({ tasks, onToggle, onDelete }) {
  console.log("قائمة المهام الحالية:", tasks);
  
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Taskiteam 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  )
}

export default Tasklist;