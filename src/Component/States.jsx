function States({tasks}){
    const total=tasks.length;
    const complete=tasks.filter(task => task.complete).length;
    const pending=total - complete;
    const percentage=total === 0 ? 0:Math.round((complete/total)*100)
    return(
        <div className="stats">
            <h3>احصائيات المهام</h3>
            <div className="classes">
                <span>الكل: <strong>{total}</strong></span>
                <span>المكتمل: <strong>{complete}</strong></span>
                <span>المعلق: <strong>{pending}</strong></span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{width: `${percentage}%`}}></div>
            </div>
            <p className="percentage-text">{percentage}% مكتمل</p>
            {
                percentage === 100 ? <p className="sucess"> 🎉 مبروك انتهيت من المهام</p>:<p className="kepp-going">كويس كمل 💪</p>
            }
            {
                pending > 5 && <p className="warning">⚠️ عندك لسا كتير</p>
            }
        </div>
    )
}
export default States;