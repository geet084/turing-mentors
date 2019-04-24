export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
});

export const updateForm = (form) => ({
  type: 'UPDATE_FORM',
  form
});

export const resetForm = () => ({
  type: 'RESET_FORM',
})

export const getMentorsSuccess = (mentors) => ({
  type: 'GET_MENTORS_SUCCESS',
  mentors
});

export const slackSuccess = (message) => ({
  type: 'SLACK_SUCCESS',
  message
});

export const postMentorSuccess = (mentor) => ({
  type: 'POST_MENTOR_SUCCESS',
  mentor
});