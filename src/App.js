import './default.scss';
import { Switch, Route } from 'react-router-dom'
import { HomeLayout, MainLayout} from './layouts'
import { AboutPage, EstimatorPage, HomePage, BlogPage, MediaPage, ProjectsPage } from './pages'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" render={()=> (
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          )} />

          <Route path="/about" render={()=> (
            <MainLayout>
              <AboutPage />
            </MainLayout>
          )} />

          <Route path="/estimator" render={()=> (
            <MainLayout>
              <EstimatorPage />
            </MainLayout>
          )} />

          <Route path="/media" render={()=> (
            <MainLayout>
              <MediaPage />
            </MainLayout>
          )} />
          
          <Route path="/blogs" render={()=> (
            <MainLayout>
              <BlogPage />
            </MainLayout>
          )} />

          <Route path="/blogs/blogId" render={()=> (
            <MainLayout>
              <BlogPage />
            </MainLayout>
          )} />

          <Route path="/projects" render={()=> (
            <MainLayout>
              <ProjectsPage />
            </MainLayout>
          )} />
        </Switch>
    </div>
  );
}

export default App;
