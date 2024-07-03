import './App.css';
import UseContext from './LifeCycleHooks/UseContext';
import React from 'react';

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <userContext.Provider value={'Karthi'}>
        <channelContext.Provider value={'React Learing'}>
          <UseContext/>
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
