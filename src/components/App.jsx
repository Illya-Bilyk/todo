import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home/Home';
// import { NotesList } from './NotesList/NotesList';
import { Notes } from 'pages/Notes/Notes';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notes" element={<Notes />} />
          <Route path="about" element={<div>ABOUT US</div>} />
        </Route>
      </Routes>
    </>
  );
};
