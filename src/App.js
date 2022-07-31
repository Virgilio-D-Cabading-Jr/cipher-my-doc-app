import { Route, Switch } from 'react-router-dom';
import './App.css';

////////////////////////////////////////////////////
//  cipher-my-doc-app App.js
////////////////////////////////////////////////////

const App = () => {
  return (
    <Switch>
      <Route exact path="/cipher-my-doc-app/">
        <h1>
          Cipher My Doc
        </h1>
      </Route>
    </Switch>
  );
}

export default App;
