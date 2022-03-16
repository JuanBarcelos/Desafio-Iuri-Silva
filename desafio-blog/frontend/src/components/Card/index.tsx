import like from "./Like.svg";

export type ItemCard = {
    title:string;
    description:string;
    date:string
}

function Card({title,description,date}:ItemCard) {
    return (
        <div className="card">
            <div className="date-like">
                <p>{date}</p>
                <img src={like} alt="" />
            </div>
            <div className="conteudo">
                <h1 className="title">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;