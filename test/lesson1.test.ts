import { myFunction1 } from '../src/lesson1';

describe('lesson1', () => {
  describe('myFunction1', () => {
    test('Returns a 10, 20と呼び出されたことを確認する', () => {
      const logSpy = jest.spyOn(console, 'log');
      myFunction1();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(2);
      expect(logSpy).toHaveBeenNthCalledWith(1, 10);
      expect(logSpy).toHaveBeenNthCalledWith(2, 20);
    });
  });
});
