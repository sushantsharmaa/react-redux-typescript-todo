import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { App } from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
