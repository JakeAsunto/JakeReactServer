import './Loading.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

// fetching the GET route from the Express server which matches the GET route from server.js

export default function App() {
    return (
        <Router>
            <Routes>
              <Route 
                path="/"
                element={
              <Suspense fallback={ <Loading /> }>
                <Home />
              </Suspense>
                } />
              <Route path="/about"
                element={
               <Suspense fallback={ <Loading /> }>
                 <About />
               </Suspense>
                } />
              <Route path="/loading"
                element={
                 <Loading /> } />
            </Routes>
        </Router>
    );
}

function Loading() {
  return (
    <div className="loading-container">
      <b> Jake's React Server </b>
      <h1> <strong>Loading</strong>, Please wait... </h1>
    </div>
  );
}