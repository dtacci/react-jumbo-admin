import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';


const rootEl = document.getElementById('app-site');

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '5c5107739b0ec152a3d4d328',
    //normally leave out user object, which we could then run identify later 
    //this could also be the point where we could bootstrap from our Server-side code
    user: {
      "key": "aa0ceb",
      "name": "Dan Tacci React Demo",
      "email": "daniel@launchdarkly.com"
    },
    options: { /* ... */ }
  });

// Create a reusable render method that we can call more than once
let render = () => {
  // Dynamically import our main App component, and render it
  ReactDOM.render(
    <LDProvider>
      <MainApp/>
    </LDProvider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./MainApp', () => {
    const MainApp = require('./MainApp').default;
    render(
      <LDProvider>
        <MainApp/>
      </LDProvider>,
      rootEl
    );
  });
}

render();
})();
