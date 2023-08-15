import './App.css';
import Navbar from './Componants/Navbar';
import Textchange from './Componants/Textchange';
import Fruits from './Componants/Fruits';
import { Route, Routes } from 'react-router-dom';
import ClassCompo from './Componants/ClassCompo';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
function App() {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <>
      <Navbar title="Home" />
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Routes>
        <Route path="/textchange" element={<Textchange />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route
          exact
          path="/general"
          element={
            <ClassCompo
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={12}
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
              pageSize={12}
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
              pageSize={12}
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
              pageSize={12}
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
              pageSize={12}
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
              pageSize={12}
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
              pageSize={12}
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
