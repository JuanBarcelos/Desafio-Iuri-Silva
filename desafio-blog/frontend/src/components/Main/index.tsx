import { IPost } from "../../interface/IPost";
import Card from "../Card";
import "./main.css";

type CardProps =  {
    items:IPost[];
}


function Main({items}:CardProps) {


    return (
        <main>
        <div className="container-main">
            {
                items.map((item,index) =>(
                    <Card key={index} title={item.title} description={item.description} date={item.create_at} />
                ))
            }
        </div>
    </main>
    );
  }
  
  export default Main;