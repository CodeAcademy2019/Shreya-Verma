const roll = (pins, index, arr, frameIndex) => {
  if (pins === 10 && frameIndex === 0) {
    return [10 + arr[index + 1] + arr[index + 2], 'strike'];
  }
  if (pins + arr[index + 1] === 10 && frameIndex === 0) {
    return [10 + arr[index + 2], 'spare'];
  }
  if (pins < 10 && frameIndex === 0) {
    return [pins + arr[index + 1], 'open'];
  }
  return [0, 'done'];
};

const score = scoreArr => scoreArr.reduce((result, val) => result + val, 0);

const bowling = (...rolls) => {
  const storeScore = [];
  let temp = [];
  let fIndex = 0;
  let numFrames = 0;
  rolls.forEach((val, index) => {
    if (numFrames < 10) {
      temp = roll(val, index, rolls, fIndex);
      if (temp[1] === 'strike') {
        fIndex = 0;
        numFrames += 1;
        storeScore.push(temp[0]);
      } else if (temp[1] === 'spare' || temp[1] === 'open') {
        fIndex = 1;
        storeScore.push(temp[0]);
      } else if (temp[1] === 'done') {
        fIndex = 0;
        numFrames += 1;
      }
    }
  });
  return score(storeScore);
};
module.exports = { bowling, roll, score };
