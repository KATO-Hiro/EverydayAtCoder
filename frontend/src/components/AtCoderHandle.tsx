import ratingColorStyle from "../utils/ratingColorStyle";

// See:
// https://greasyfork.org/ja/scripts/397710-atcoder-submission-user-colorizer/code
// TODO: Enable to change color and ach rate.
// TODO: Extract a component.
const style = {
  display: 'inline-block',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  verticalAlign: 'center',
  border: '1px solid red',
  background: '-webkit-linear-gradient(bottom, red 0%, red 100%, rgba(255, 255, 255, 0.0) 100%, rgba(255, 255, 255, 0.0) 100%)',
};

const AtCoderHandle = (props: any) => (
  <div className="atcoder-handle">
    <h1 style={ratingColorStyle(props.currentRating)}>
      <span style={style}></span>
      {props.handleName}
    </h1>
  </div>
);

export default AtCoderHandle;
