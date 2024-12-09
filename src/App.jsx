import { lazy, React, Suspense, useEffect } from 'react'
import AOS from 'aos'
import './App.css'
import "aos/dist/aos.css";
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';

const HomeComponent = lazy(() => import("./pages/Home"));
const LayoutComponent = lazy(() => import('./components/Layout'))
function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return <>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <LayoutComponent>
          <HomeComponent />
        </LayoutComponent>
      </Suspense>
    </ErrorBoundary>

  </>
}

export default App
