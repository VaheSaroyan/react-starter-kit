import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import loadable from '@loadable/component';
import Provider from 'react-redux/es/components/Provider';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  const Routes = loadable(() => import('./routes'));
  const LoadingIndicator = loadable(() =>
    import('components/LoadingIndicator/LoadingIndicator'),
  );

  const [isLoading, setIsLoading] = React.useState(true);
  const [{store, persistor}, setStore] = React.useState({
    store: {},
    persistor: {},
  });

  React.useEffect(() => {
    (async () => {
      const {store, persistor} = await import('./store/configureStore');
      setStore({store, persistor});
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <LoadingIndicator
        loading
        background="rgba(255,255,255,.5)"
        loaderColor="#3498db"
      />
    );
  }

  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </Router>
  );
}
