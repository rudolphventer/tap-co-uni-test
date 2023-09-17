import { parseInput } from "../../src/InputHandling/parserClient";
import { emptyInput } from "../../src/customErrors";

let consoleSpy: jest.SpyInstance;

const invalidInputs = [
  '', '5',
  `5
  s
  l 68 81 81 60 78`,
  `5
  s 70 78 82 57 74
  l 68 81 81 60 78`
];

const validInputs = [
  {
    input: `5\ns 70 78 82 57 74\nl 68 81 81 60 78`, 
    output: {count: '5', students: [{
      faculty: 's',
      marks: ['70', '78', '82', '57', '74']
    },
    {
      faculty: 'l',
      marks: ['68', '81', '81', '60', '78']
    }
  ]}
  },
  {
    input: `5\ns 70 78`, 
    output: {count: '5', students: [{
      faculty: 's',
      marks: ['70', '78']
    }
  ]}
  },
];

describe('testing input parsing', () => {

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error')
    .mockImplementation(() => {});
  })

  test('empty string should result in empty input error thrown', () => {
    expect(() => {
      parseInput('')
    }).toThrow(emptyInput);
    expect(consoleSpy).toBeCalledWith(`Input parsing failed on input `);
  });

  test('incorrectly formatted strings should throw errors', () => {
    invalidInputs.map(input => {
      expect(() => {
        parseInput(input);
      }).toThrowError;
    })
  });

  test('correctly formatted input should return correctly parsed responses', () => {
    validInputs.map(input => {
      expect(parseInput(input.input)).toEqual(input.output);
    })
  });
});