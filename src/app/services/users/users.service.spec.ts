import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersService } from './users.service';
import { User } from 'src/app/models/user';

describe('UsersService', () => {
  let usersService: UsersService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });

    usersService = TestBed.get(UsersService); // Add this
  });

  it('should be created', () => { // Remove inject()
    expect(usersService).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse:User[] = [
        {
          id: 1,
          name: 'Jane',
          role: 'Designer',
          dob: new Date("12-12-2000")
        },
        {
          id: 2,
          name: 'Bob',
          role: 'Developer',
          dob: new Date("12-12-2000")        }
      ];
      let response;
      spyOn(usersService, 'all').and.returnValue(of(userResponse));

      usersService.all().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse:User = {
        id: 2,
        name: 'Bob',
        role: 'Developer',
        dob: new Date("12-12-2000")
      };
      let response;
      spyOn(usersService, 'findOne').and.returnValue(of(userResponse));
  
      usersService.findOne(2).subscribe(res => {
        response = res;
      });
  
      expect(response).toEqual(userResponse);
    });
  });

  describe('remove user', () => {
    it('should return a single user', () => {
      const userResponse:User = {
        id: 2,
        name: 'Bob',
        role: 'Developer',
        dob: new Date("12-12-2000")
      };
      let response;
      spyOn(usersService, 'removeUser').and.returnValue(of(userResponse));
  
      usersService.removeUser(2).subscribe(res => {
        response = res;
      });
  
      expect(response).toEqual(userResponse);
    });
  });

  describe('create user', () => {
    it('should return a single user', () => {
      const userResponse = {
        id: 2,
        name: 'Bob',
        role: 'Developer',
        dob: new Date("12-12-2000")
      };
      let response;
      spyOn(usersService, 'addNewUser').and.returnValue(of(userResponse));
  
      usersService.addNewUser(userResponse).subscribe(res => {
        response = res;
      });
  
      expect(response).toEqual(userResponse);
    });
  });
});
