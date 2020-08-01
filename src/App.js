import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from './containers/Blog/BlogDetails';
import CreatePost from './containers/CreatePost/CreatePost';
// import BlogDetail from './containers/Blog/BlogDetail';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/blog/:id">
            <Header />
            <BlogDetails
              id="3"
              title="The AI magically removes moving objects from videos"
              image="/images/img_3.jpg"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed
               optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro
             id est."
              date="July 19, 2020"
            />
          </Route>
          <Route path="/create/blog" exact>
            <Header />
            <CreatePost />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
