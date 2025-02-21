import {BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import { Navegacion } from './components/Navegacion';
import {HomePage} from './pages/HomePage';
import {ProjectsPage} from './pages/ProjectsPage';
import { FormacionPage } from './pages/FormacionPage';
//import { PostulacionesPage } from './pages/Postulaciones';
import { ErrorPostulaciones } from './errors/ErrorPostulaciones';
import { BlogPage } from './pages/BlogPage';
import { Footer } from './components/Footer';

import { FormacionDetail } from './pages/FormacionDetail';
import { PostDetail } from './pages/PostDetail';

function App() {
  return (
        <BrowserRouter>
          <div  >
            <Navegacion />
            <Routes>

              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/formacion" element={<FormacionPage />} />
              <Route path="/formacion/:id" element={<FormacionDetail />} />
              <Route path="/postulaciones" element={<ErrorPostulaciones />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<PostDetail />} />


            </Routes>
            <Footer />

          </div>
        </BrowserRouter>
    );
}

export default App;