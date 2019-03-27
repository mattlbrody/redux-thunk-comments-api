import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchComments = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/comments');

    dispatch({ type: 'FETCH_COMMENTS', payload: response.data})
  }
}