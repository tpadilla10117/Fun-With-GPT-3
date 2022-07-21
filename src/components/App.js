import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Spinner
} from './utils';

const Home = lazy( () => import('../pages/home/Home.jsx') );

function App() {

  return (
      <Suspense fallback={<Spinner />}>
        <div className='App'>
            <Routes>

              <Route exact path='/' element={<Home />} />

            </Routes>
        </div>
      </Suspense>
  );
}

export default App;
