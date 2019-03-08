import { User } from './user';

describe('User', () => {
  
  it('should create an instance', () => {
    expect(new User(1,"xname","xprof",new Date("20-12-2000"))).toBeTruthy();
  });

  it('should create an instance and checking each parameter', () => {
    let user = new User(1,"xname","xprof",new Date("20-12-2000"))
    expect(user.id).toBe(1);
    expect(user.name).toBe("xname");
  });
});
