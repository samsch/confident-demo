/* eslint-env jest */
import { allMatch, findWinner, checkCellForWin } from './connectFour';

// Copy from here to make tests

// Bottom left                  top left
// eslint-disable-next-line
const baseBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];
// Bottom right                 top right

describe('allMatch logic', () => {
  test('Should match set of vectors against board', () => {
    // four characters for text alignment
    const blak = 'black';
    const redd = 'red';
    // Board isn't possible in actual game, but winning positions are.
    const winningSets = [
      [blak, null, redd, redd, redd, redd],
      [null, blak, null, null, null, null],
      [null, null, blak, null, null, null],
      [null, redd, redd, blak, null, blak],
      [null, redd, redd, null, blak, null],
      [null, redd, redd, blak, null, null],
      [null, redd, blak, null, null, null],
    ];
    const testSets = [
      [true, blak, [
        [0, 0],
      ]],
      [false, blak, [
        [0, 1],
      ]],
      [true, blak, [
        [0, 0], [1, 1], [2, 2], [3, 3],
      ]],
      [false, redd, [
        [-1, -1],
      ]],
      [true, redd, [
        [0, 2], [0, 3], [0, 4], [0, 5],
      ]],
      [false, redd, [
        [0, 3], [0, 4], [0, 5], [0, 6],
      ]],
      [false, redd, [
        [3, 2], [4, 2], [5, 2], [6, 2],
      ]],
      [true, redd, [
      ]],
    ];
    testSets.forEach(([shouldBe, color, vectors]) => {
      const result = allMatch(winningSets, color, vectors);
      expect(result).toBe(shouldBe);
    });
  });
});

describe('findWinner logic', () => {
  test('Should find winner', () => {
    // four characters for text alignment
    const blak = 'black';
    const redd = 'red';
    // Board isn't possible in actual game, but winning positions are.
    const winningSet = [
      [blak, null, redd, redd, redd, redd],
      [null, blak, null, null, null, null],
      [null, null, blak, null, null, null],
      [null, redd, redd, blak, null, blak],
      [null, redd, redd, null, blak, null],
      [null, redd, redd, blak, null, null],
      [null, redd, blak, null, null, null],
    ];
    expect(checkCellForWin(winningSet, 2, 2)).toBe(false);
    expect(checkCellForWin(winningSet, 0, 0)).toBe(true);
    expect(checkCellForWin(winningSet, 0, 2)).toBe(true);
    expect(findWinner(winningSet)).toBe('black');

    const winningSet2 = [
      [null, null, redd, redd, null, redd],
      [null, blak, null, null, null, null],
      [null, null, null, null, null, null],
      [null, redd, redd, blak, null, blak],
      [null, redd, redd, null, blak, null],
      [null, redd, redd, blak, null, null],
      [null, redd, blak, null, null, null],
    ];
    expect(findWinner(winningSet2)).toBe('red');
  });
});