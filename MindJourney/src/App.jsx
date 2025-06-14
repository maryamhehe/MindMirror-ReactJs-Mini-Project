import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import DailyQuotes from './pages/quote';
import TasksPage from './pages/mentaltasks';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quotes" element={<DailyQuotes />} />
          <Route path="tasks" element={<TasksPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
