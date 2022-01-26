import { Router } from "@reach/router";

//Components
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Landing from './components/Landing/Landing';
import Press from './components/Press/Press';


import Area from './components/Work/Area';
import Shoegum from './components/Work/Shoegum';
import Avgvst from './components/Work/Avgvst';
import Casetify from './components/Work/Casetify';
import NikeCrosby from './components/Work/NikeCrosby';
import Myreality from './components/Work/Myreality';

import './App.scss';


function App () {
  return (
    <div className="App">
      <Router>
        <Landing exact path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        <Work path="/work" />
        <Area path="/area-myreality" />
        <Shoegum path="/shoe-gum" />
        <Avgvst path="/avgvst" />
        <Casetify path="/casetify" />
        <NikeCrosby path="/nike-crosby" />
        <Myreality path="/my-reality" />
        <Press path="/press" />
      </Router>
    </div>
  );
}

export default App;
