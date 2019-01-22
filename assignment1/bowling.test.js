const bowl = require('./bowling');

const arrBowling = [['should give score for 10 open frames', [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 90],
  ['should give score for 10th frame with fill ball', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], 30],
  ['should give score for spare in first frame', [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 16],
  ['should give score for strike, spare and open', [10, 5, 5, 9, 0], 48]];

const arrRoll = [['should give score for open frame', [3, 2, [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 0], [9, 'open']],
  ['should give score for 10th frame with fill ball', [10, 18, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], 0], [30, 'strike']],
  ['should give score for spare', [6, 0, [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0], [13, 'spare']]];

const arrScore = [['should give total score for open frames', [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 90],
  ['should give score for 10th frame with fill ball', [0, 0, 0, 0, 0, 0, 0, 0, 0, 30], 30]];

describe('bowling()', () => {
  arrBowling.forEach((val) => {
    it(val[0], () => expect(bowl.bowling(...val[1])).toEqual(val[2]));
  });
});

describe('roll()', () => {
  arrRoll.forEach((val) => {
    it(val[0], () => expect(bowl.roll(...val[1])).toEqual(val[2]));
  });
});

describe('score()', () => {
  arrScore.forEach((val) => {
    it(val[0], () => expect(bowl.score(val[1])).toEqual(val[2]));
  });
});
