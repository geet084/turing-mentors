import { slack } from '../slack';
import { isLoading, hasErrored, slackSuccess } from '../../actions';

describe('slack', () => {
  let mockURL;
  let mockText;
  let mockDispatch;

  beforeEach(() => {
    mockURL = 'http://localhost:3001';
    mockDispatch = jest.fn();
    mockText = 'slack message';
  });

  it('should call dispatch with isLoading(true) action', () => {
    const thunk = slack(mockURL, mockText);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch hasErrored with a message if the response is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Error',
    }));

    const thunk = slack(mockURL, mockText);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Error'));
  });

  it('should dispatch isLoading(false) if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }));

    const thunk = slack(mockURL, mockText);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it.skip('should dispatch slackSuccess', async () => {
    const mockSlack = 'stuff';

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockSlack),
      ok: true
    }));

    const thunk = slack(mockURL, mockText);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(slackSuccess(mockSlack));
  });
});