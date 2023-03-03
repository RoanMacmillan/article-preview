import React, { useState } from "react";
import "./Article.css";
import Icon from "../Icons/Icon";

const Article = () => {
  const [isActive, setIsActive] = useState(false);

  const handleShareClick = () => {
    setIsActive(!isActive);
  };

  return (
    <main className="articleContainer">
      <div className="imgWrapper">
        <div className="imageSection"></div>
      </div>
      <div className="bottomWrapper">
        <div className="textSection">
          <header>
            <h1>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </header>
        </div>

        <div className="bottomSection">
          <div className="avatar"></div>
          <div className="bottomChild">
            <h2>Michelle Appleton</h2>
            <span>28 Jun 2020</span>
          </div>
          <button
            type="button"
            className={`icon-container ${isActive ? "iconChange" : ""}`}
            onClick={handleShareClick}
          >
            <Icon name="arrow" className="arrowIcon" />
          </button>
        </div>
        <div className={`activeSection ${isActive ? "active" : ""}`}>
          <div className="triangle"></div>

          <span>share</span>
          <div className="iconWrapper">
            <Icon name="facebook" className="icon" />
            <Icon name="twitter" className="icon" />
            <Icon name="pinterest" className="icon" />
          </div>
          <button
            type="button"
            className="icon-container active"
            onClick={handleShareClick}
          >
            <Icon name="arrow" className="arrowIcon active" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Article;
