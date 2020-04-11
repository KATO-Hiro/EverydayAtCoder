// See:
// https://codesandbox.io/embed/github/tannerlinsley/react-table/tree/master/examples/basic
const range = len => {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(i)
  }

  return arr
};

const newConstestResult = (round) => {
  // Note: dummy values
  const contestType = Math.random();
  const contestRound = Math.floor(Math.random() * 200);
  const contestPerformance = contestType > 0.85
                              ? Math.floor(Math.random() * 4500)
                              : contestType > 0.6
                              ? Math.floor(Math.random() * 3200)
                              : Math.floor(Math.random() * 2400);
  const oldRating = Math.floor(1500 * Math.log10(round + 1));
  const diff = Math.floor((contestPerformance - oldRating) / 10);
  const newRating = oldRating + diff;

  return {
    ContestName:
      contestType > 0.85
        ? 'AtCoder Grand Conest ' + contestRound
        : contestType > 0.6
        ? 'AtCoder Regular Contest ' + contestRound
        : 'AtCoder Beginner Contest ' + contestRound,
    Performance: contestPerformance,
    OldRating: oldRating,
    NewRating: newRating,
    Diff: diff,
  };
};

export default function GenerateData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];

    return range(len).map(d => {
      return {
        ...newConstestResult(d),
        subRows: len[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    });
  };

  return makeDataLevel()
}
