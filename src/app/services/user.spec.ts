import { TestBed } from '@angular/core/testing';
import { UserStore} from './user.store';

describe('UserStore', () => {
  let store: UserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStore],
    });
    store = TestBed.inject(UserStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should start with empty user', () => {
    expect(store.users()).toEqual([]);
  });
});
