/* eslint-disable react/prop-types */

const Card = ({img, title, description, progressLevel}) => {
    return (
        <div className="card w-80 h-96 glass m-8 hover:bg-green-400 hover:scale-105">
            <figure>
                <img src={img} alt="car!" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Mehr Infos</button>
                    <progress
                        className="progress progress-warning w-56"
                        value={progressLevel}
                        max="100"
                    ></progress>
                </div>
            </div>
        </div>
    );
}

export default Card;