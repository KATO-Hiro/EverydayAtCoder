// See:
// chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf/options.html#nav=2384c9de-cec2-4713-8e82-7dbe2f3d228e+editor
const gold = 'linear-gradient(135deg, #FFD325, #FDEBA6, #FFE065, #FFCC00, #F0BE00)';
const silver = 'linear-gradient(135deg, #E4E4E4, #EEEEEE, #E4E4E4, #CCCCCC, #C4C4C4)';
const red = 'rgba(255, 178, 178)';
const orange = 'rgba(255, 217, 178)';
const yellow = 'rgba(236, 236, 178)';
const blue = 'rgba(178, 178, 255)';
const lightblue = 'rgba(178, 236, 236)';
const green = 'rgba(178, 217, 178)';
const brown = 'rgba(217, 197, 178)';
const gray = 'rgba(217, 217, 217)';

const ratingBackgroundColorStyle = (rating: number) => {
  if (rating >= 3600) {
    return { backgroundImage: gold };
  } else if (rating >= 3200) {
    return { backgroundImage: silver };
  } else if (rating >= 2800) {
    return { backgroundColor: red };
  } else if (rating >= 2400) {
    return { backgroundColor: orange };
  } else if (rating >= 2000) {
    return { backgroundColor: yellow };
  } else if (rating >= 1600) {
    return { backgroundColor: blue };
  } else if (rating >= 1200) {
    return { backgroundColor: lightblue };
  } else if (rating >= 800) {
    return { backgroundColor: green };
  } else if (rating >= 400) {
    return { backgroundColor: brown };
  } else {
    return { backgroundColor: gray };
  }
};

export default ratingBackgroundColorStyle;
