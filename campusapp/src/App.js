import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Agrega la extensión .js
import Home from './componentes/Home.js'; // Agrega la extensión .js
import RestaurantRouters from './componentes/RestaurantRouters.js'; // Agrega la extensión .js
import Header from './componentes/Header.js'; // Agrega la extensión .js
import Footer from './componentes/Footer.js'; // Agrega la extensión .js
import Login from './componentes/Login.js'; // Agrega la extensión .js
import UserRouters from './componentes/UserRouters.js'; // Agrega la extensión .js
import HomesRouters from './componentes/HomesRouters.js'; // Agrega la extensión .js

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurantes" component={RestaurantRouters} />
          <Route path="/login" component={Login} />
          <Route path="/usuarios" component={UserRouters} />
          <Route path="/hogares" component={HomesRouters} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
