import React, { Fragment } from 'react';
import './styles/global';
import { Layout } from './components/Layout/Layout';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
        <Layout />
    </Fragment>
  );
}

export default App;
