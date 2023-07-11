export const fetchRandomGreeting = () => {
    return (dispatch) => {
      fetch('/api/greetings/random')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setRandomGreeting(data.greeting));
        })
        .catch((error) => {
          console.error('Error fetching random greeting:', error);
        });
    };
  };
  
  export const setRandomGreeting = (greeting) => {
    return {
      type: 'SET_RANDOM_GREETING',
      payload: greeting,
    };
  };
  