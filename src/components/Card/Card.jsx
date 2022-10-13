import "./Card.scss";
import reviews from "../../data";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommenting,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Card() {
    const [index, setIndex] = useState(0);
    const { name, job, img, text } = reviews[index];
    const handleLeft = () => {
        setIndex(index < 1 ? reviews.length - 1 : index - 1);
    };
    const handleRight = () => {
        setIndex(index >= reviews.length - 1 ? 0 : index + 1);
    };
    const handleRandom = () => {
        let random = Math.floor(Math.random() * reviews.length);
        while (random === index) {
            random = Math.floor(Math.random() * reviews.length);
        }
        setIndex(random);
    };
    return (
        <div className="Card">
            <div className="pfp">
                <FontAwesomeIcon className="quote" icon={faCommenting} />
                <img className="profile" src={img} alt={name} />
            </div>
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{text}</p>
            <div className="btns">
                <FontAwesomeIcon
                    onClick={handleLeft}
                    className="left"
                    icon={faChevronLeft}
                />
                <FontAwesomeIcon
                    onClick={handleRight}
                    className="right"
                    icon={faChevronRight}
                />
            </div>
            <button onClick={handleRandom} className="random">
                Surprise Me
            </button>
        </div>
    );
}

export default Card;
