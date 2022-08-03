import { UserIndexMiddleware } from './user-index.middleware';

describe('UserIndexMiddleware', () => {
  it('should be defined', () => {
    expect(new UserIndexMiddleware()).toBeDefined();
  });
});
