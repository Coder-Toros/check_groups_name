'use strict';

const arrGroups = [
  'FE2021-5',
  'Fe2020-2',
  'FD2021',
  'fD2022-1',
  'FE2020-3',
  'FD2020/2',
  'fe2021-3',
  'FD2020$5',
  'FE2008-52',
  'Fm2008-23',
  'FM2022-1',
];

// debugger

function checkGroupName(names) {
  const regEx = /^([A-Z]|[a-z]){2}20\d{2}(-\d+)?$/g;
  const res = {};
  for (let groups of names) {
    res[`${groups}`] = `${regEx.test(groups) ? 'Succsess' : 'Error'}`;
  }
  return res;
}

console.log(checkGroupName(arrGroups));