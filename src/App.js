import './default.scss';
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomeLayout, MainLayout} from './layouts'
import { AboutPage, EstimatorPage, HomePage, BlogPage, MediaPage, ProjectsPage, NotFoundPage } from './pages'
import { Interior, Lightening} from './pages/project/' 

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }/>

          <Route exact path="about" element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          } />

          <Route path="estimator" element={
            <MainLayout>
              <EstimatorPage />
            </MainLayout>
          } />

          <Route path="media" element={
            <MainLayout>
              <MediaPage />
            </MainLayout>
          } />
          
          <Route path="blogs" element={
            <MainLayout>
              <BlogPage />
            </MainLayout>
          } />

          <Route path="projects" element={
            <MainLayout>
              <ProjectsPage />
            </MainLayout>
          }>
            <Route path="interior" element={
                <Interior />
            } />
            <Route path="lightening" element={
                <Lightening />
            } />
          </Route>
          <Route path="*" element={
            <MainLayout>
              <NotFoundPage />
            </MainLayout>
          } />
          {/* <Navigate to="404"/> */}
        </Routes>
    </div>
  );
}

export default App;
