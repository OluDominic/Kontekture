import './default.scss';
import { Routes, Route } from 'react-router-dom'
import { HomeLayout, MainLayout, SubLayout} from './layouts'
import { AboutPage, EstimatorPage, HomePage, BlogPage, MediaPage, ProjectsPage, NotFoundPage } from './pages'
import { Interior, Lightening} from './pages/project/' 
import { Interiors, Facade, Civil, Concrete, Container, Lightenings } from './components/home/interior';
//import ScrollTop from './components/scrollToTop/scrollToTop';
import Form from './components/form/form'
function App() {
  return (
    <div className="App">
      {/* <ScrollTop> */}
        <Routes>
          <Route exact path="/" element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }>
            <Route path="/" element={
                <Facade />
            } />
            <Route path="container" element={
                <Container />
            } />
            <Route path="interiors" element={
                <Interiors />
            } />
            <Route path="concrete" element={
                <Concrete />
            } />
            <Route path="civilworks" element={
                <Civil />
            } />
            <Route path="lightening" element={
                <Lightenings />
            } />
          </Route>

          <Route exact path="about" element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          } />

          <Route path="estimator" element={
            <SubLayout>
              <EstimatorPage />
            </SubLayout>
          }>
            <Route path="bungalows" element={
                <Form />
            } />
          </Route>

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
      {/* </ScrollTop> */}
    </div>
  );
}

export default App;
