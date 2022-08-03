import { UserDetailMiddleware } from './user-detail.middleware';

describe('UserDetailMiddleware', () => {
  it('should be defined', () => {
    expect(new UserDetailMiddleware()).toBeDefined();
  });
});
