import "./Rating.scss";

const Rating = ({ value, text, color }) => {
  return (
    <div className='Rating'>
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fa-solid fa-star"
              : value >= 0.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fa-solid fa-star"
              : value >= 1.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fa-solid fa-star"
              : value >= 2.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fa-solid fa-star"
              : value >= 3.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fa-solid fa-star"
              : value >= 4.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span className='ps-2'>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#EEBC1D",
};

export default Rating;
