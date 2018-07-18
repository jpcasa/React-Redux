import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'algo', firstName: 'algo', lastName: 'algo'},
        {id: 'algo2', firstName: 'algo2', lastName: 'algo2'}
      ];

      const expected = [
        { value: 'algo', text: 'algo algo' },
        { value: 'algo2', text: 'algo2 algo2' }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
