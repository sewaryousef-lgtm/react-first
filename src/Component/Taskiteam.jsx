
 function Taskiteam({ task, onToggle, onDelete }) {
  const iteamstyle = {
    textDecoration : task.complete ? "line-through":"none",
    color: task.complete ? "gray":"#333",
    opacity: task.complete ? 0.6:1,
  };
   console.log(task);
  console.log(task.completed);
  return (
    <li className={'task-iteam ' + (task.complete ? 'completed' : '')}>
      <span className='task-text' style={iteamstyle} onClick={()=> onToggle(task.id)}>
        <span>{task.complete ? '✅' : "⭕" }</span>
        <span>{task.name}</span>
        <span className='Priority0badge'>
          {task.priority === "high"&& '❤️ عالية'}
          {task.priority === "medium"&& '🐣 متوسطة'}
          {task.priority === "low"&& '❄️ منخفضة'}
        </span>
      </span>
      {task.complete && <button className='delete-btn' onClick={()=> onDelete(task.id)}>حذف</button>}

    </li>
  )
}
export default Taskiteam;