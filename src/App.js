import './App.css';
import Navbar from './Componants/Navbar';
import { Route, Routes } from 'react-router-dom';
import ClassCompo from './Componants/ClassCompo';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
function App() {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const pages = 20;
  return (
    <>
      <Navbar title="Home" />
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Routes>
        <Route
          exact
          path="/general"
          element={
            <ClassCompo
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pages}
              category="general"
              country="in"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <ClassCompo
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pages}
              category="sports"
              country="in"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <ClassCompo
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pages}
              category="health"
              country="in"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <ClassCompo
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={pages}
              category="business"
              country="in"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <ClassCompo
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pages}
              category="entertainment"
              country="in"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <ClassCompo
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pages}
              category="science"
              country="in"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <ClassCompo
              apiKey={apiKey}
              setProgress={setProgress}
              key="technology"
              pageSize={pages}
              category="technology"
              country="in"
            />
          }
        />
        <Route />
      </Routes>
    </>
  );
}

export default App;
