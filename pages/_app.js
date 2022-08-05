import '../styles/globals.css';
import '../styles/styles.css'
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/TheLayout';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-multi-carousel/lib/styles.css';
import { Provider } from 'react-redux';
import {store,persistor  } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
 
 

function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
         {/* <PersistGate persistor={persistor}>  */}
      <Layout>
      <Component {...pageProps} />
    </Layout>
    {/* </PersistGate> */}
    
    </Provider>
   
  )

}

export default MyApp;
