import {
  BrowserRouter as Router,
} from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import { NotAuth } from "./router/notauth";
import { PrivateRoute } from "./router/private";
import store from "./store";
import { Provider } from 'react-redux'
import Me from "./pages/me";


function App() {
  return (
    <Router>
      <Provider store={store}>
        <NotAuth path="/" component={Index} exact></NotAuth>
        <NotAuth path="/login" component={Login} exact></NotAuth>
        <NotAuth path="/register" component={Register} exact></NotAuth>
        <PrivateRoute path="/me" component={Me} exact></PrivateRoute>
      </Provider>
    </Router>
  );
}



export default App;
