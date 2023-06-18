import './App.css';
import CakeConainer from './Component/CakeConainer';
import { Provider } from 'react-redux';
import store from './redux/cake/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">     
      <CakeConainer/>
    </div>
    </Provider>
  );
}

export default App;
