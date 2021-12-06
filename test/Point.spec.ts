// @ts-nocheck
import { expectCt } from 'helmet';
import { Point } from '../src/point';

const notImplementedError = new Error('Method not implemented.');
const invalidArgumentError = new Error('Invalid arguments');

describe('Point', () => {
  it('should not fail to be created', () => {
    expect(new Point(0, 0).toString()).toEqual('(0, 0)');
    expect(new Point(1, 2).toString()).toEqual('(1, 2)');
  });

  it('should calculate distance to other points', () => {
    expect(new Point(3, 4).distance(7, 7)).toEqual(5);
    expect(new Point(1, 2).distance(new Point(-1, 2))).toEqual(2);
  });

  it('should calculate distance to center if no point is provided', () => {
    expect(new Point(3, 4).distance()).toEqual(5);
  });

  describe('distance method', () => {
    it('should throw error if 1 argument is provided but not the instance of Point', () => {
      try {
        new Point(10, 10).distance({});
        expect(true).toEqual(false);
      } catch (error) {
        expect(error.message).toEqual(invalidArgumentError.message);
      }
    });

    it('should throw error if 2 arguments is provided but those are not integer', () => {
      try {
        new Point(10, 10).distance(10, {});
        expect(true).toEqual(false);
      } catch (error) {
        expect(error.message).toEqual(invalidArgumentError.message);
      }
    });

    it('should throw error if number of arguments is invalid', () => {
      try {
        new Point(10, 10).distance(10, 10, 10);
        expect(true).toEqual(false);
      } catch (error) {
        expect(error.message).toEqual(notImplementedError.message);
      }
    });
  });
});
