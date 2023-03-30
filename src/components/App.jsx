import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Tasks } from 'pages/Tasks/Tasks';
import { About } from 'pages/About/About';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};
