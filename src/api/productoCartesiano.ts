const flatten = (arr) => [].concat.apply([], arr);

export const product = (...sets) =>
  sets.reduce((acc, set) =>
    flatten(acc.map(x => set.map(y => [ ...x, y ]))),
    [[]]);