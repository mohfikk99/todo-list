import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from './Layouts/LayoutPage'
import Dashboard from './Pages/Dashboard';
import DetailDashboard from './Pages/DetailDashboard';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage/>}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/detail/:id" element={<DetailDashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
