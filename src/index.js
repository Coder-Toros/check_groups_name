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
  'FR2033-',
];

// debugger

function checkGroupName(names) {
  const regEx = /^(FD|FM|FE|fd|fm|fe)20\d{2}(-\d+)?$/g;
  
  return regEx.test(names) ? 'Succsess' : 'Error';
}

arrGroups.forEach((name) => {
  console.log(`${name} - ${checkGroupName(name)}`)
})