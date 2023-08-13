import './App.css';
// import Fruits from './Componants/Fruits';
import Navbar from './Componants/Navbar';
import Textchange from './Componants/Textchange';
import Fruits from './Componants/Fruits';
import { Route, Routes } from 'react-router-dom';
import ClassCompo from './Componants/ClassCompo';

function App() {
  return (
    <>
      <Navbar title="Home" />
      <Routes>
        <Route path="/textchange" element={<Textchange />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route
          exact
          path="/general"
          element={<ClassCompo key="general" pageSize={12} category="general" country="in" />}
        />
        <Route
          exact
          path="/sports"
          element={<ClassCompo key="sports" pageSize={12} category="sports" country="in" />}
        />
        <Route
          exact
          path="/health"
          element={<ClassCompo key="health" pageSize={12} category="health" country="in" />}
        />
        <Route
          exact
          path="/business"
          element={<ClassCompo key="business" pageSize={12} category="business" country="in" />}
        />
        <Route
          exact
          path="/entertainment"
          element={
            <ClassCompo key="entertainment" pageSize={12} category="entertainment" country="in" />
          }
        />
        <Route
          exact
          path="/science"
          element={<ClassCompo key="science" pageSize={12} category="science" country="in" />}
        />
        <Route
          exact
          path="/technology"
          element={<ClassCompo key="technology" pageSize={12} category="technology" country="in" />}
        />
        <Route />
      </Routes>
    </>
  );
}

export default App;
