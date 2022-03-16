import vector from "./Vector.svg";
import "./main.css";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

type headerProps =  {
    items: (title: string) => {}
}

function Header({items}: headerProps) {
    const [title, setTitle] = useState('')

    const handleGetPostButton = useCallback(async () => {
      items(title)
    },[items, title]) 
    return (
        <header className="container">
        <div className="content">
            <div className="content-link">
                <Link to="/">CodeLandia</Link>
                <Link to="/create">Criar Post</Link>
            </div>
                
            <div className="content-search">
                <img src={vector} alt="" onClick={handleGetPostButton}/>
                <input type="text" name="title" id="title" placeholder="Pesquisar no Blog" value={title}
          onChange={(e) => setTitle(e.target.value)}/>
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;
  