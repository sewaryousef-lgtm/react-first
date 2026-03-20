import React, { useState } from 'react'
 function Addtaskfrom({ onAdd }) {
  const [text , setText] = useState('');
  const [priority , setpriority] = useState('low');
  const handlesubmit = (e)=>{
    e.preventDefault();
    if (text.trim() === ''){
      alert("الرجاء إدخال نص المهمة")
      return;

    }
    const newtask={
      id: Date.now(),
      name:text,
      complete:false,
      priority:priority
    }
    onAdd(newtask);
    setText('');
    setpriority('low')
  }
  return(
    <form onSubmit={handlesubmit} className='task-form'>
      <input 
        type="text" 
        placeholder='أدخل مهمة جديدة...' 
        value={text} 
        className='task-input' 
        onChange={(e)=>setText(e.target.value)}>
      </input>
      <select 
        value={priority}
        onChange={(e)=>setpriority(e.target.value)} 
        className='task-select'>
        <option value="low">منخفضة ❄️</option>
        <option value="medium">متوسطة 🐣</option>
        <option value="high">عالية ❤️</option>
      </select>
      <button type="submit" className="add-btn">+ أضف مهمة</button>
    </form>
  )

  
}
export default Addtaskfrom;