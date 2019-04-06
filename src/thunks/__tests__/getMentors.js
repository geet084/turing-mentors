import { getMentors } from '../getMentors';
import { isLoading, hasErrored, getMentorsSuccess } from '../../actions';

describe('getMentors', () => {
  let mockURL;
  let mockDispatch;

  beforeEach(() => {
    mockURL = 'http://localhost:3001';
    mockDispatch = jest.fn();
  });

  it('should call dispatch with isLoading(true) action', () => {
    const thunk = getMentors(mockURL);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch hasErrored with a message if the response is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Error',
    }));

    const thunk = getMentors(mockURL);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Error'));
  });

  it('should dispatch isLoading(false) if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }));

    const thunk = getMentors(mockURL);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it.skip('should dispatch getMentorsSuccess', async () => {
    const mockMentor = 'stuff';

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockMentor),
      ok: true
    }));

    const thunk = getMentors(mockURL);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getMentorsSuccess(mockMentor));
  });
});