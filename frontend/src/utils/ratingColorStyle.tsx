import {
  red,
  orange,
  yellow,
  blue,
  lightblue,
  green,
  brown,
  gray,
} from "./ratingColors";

const ratingColorStyle = (rating: number) => {
  if (rating >= 2800) {
    return { color: red };
  } else if (rating >= 2400) {
    return { color: orange };
  } else if (rating >= 2000) {
    return { color: yellow };
  } else if (rating >= 1600) {
    return { color: blue };
  } else if (rating >= 1200) {
    return { color: lightblue };
  } else if (rating >= 800) {
    return { color: green };
  } else if (rating >= 400) {
    return { color: brown };
  } else {
    return { color: gray };
  }
};

export default ratingColorStyle;