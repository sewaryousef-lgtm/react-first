
 function Header({title,count}) {
  return (
    <div>
        <header>
            <h1>{title}</h1>
            <p>عدد المهام :{count}</p>
        </header>
    </div>
  )
}
export default Header;