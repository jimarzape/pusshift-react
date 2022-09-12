import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "../src/assets/custom.css"

const Loading = lazy(() => import('./components/Loading'))
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
