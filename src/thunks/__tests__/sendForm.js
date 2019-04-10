import { sendForm } from '../sendForm';
import { isLoading, hasErrored, postMentorSuccess } from '../../actions';

describe('sendForm', () => {
  let mockURL;
  let mockDispatch;

  beforeEach(() => {
    mockURL = 'http://localhost:3001';
    mockDispatch = jest.fn();
  });

  it('should call dispatch with isLoading(true) action', () => {
    const thunk = sendForm(mockURL);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch hasErrored with a message if the response is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Error',
    }));

    const thunk = sendForm(mockURL);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Error'));
  });

  it('should dispatch isLoading(false) if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }));

    const thunk = sendForm(mockURL);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it.skip('should dispatch postMentorSuccess', async () => {
    const mockForm = {name: 'aa', location: 'denver'};

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockForm),
      ok: true
    }));

    const thunk = sendForm(mockURL);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(postMentorSuccess(mockForm));
  });
});