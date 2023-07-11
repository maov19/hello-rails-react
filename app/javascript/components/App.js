import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Greeting from './Greeting';

function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchMissions());
//     dispatch(fetchRockets());
//   }, [dispatch]);

  return (
    <>
      {/* <View /> */}
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
