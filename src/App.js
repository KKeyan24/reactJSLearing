import './App.css';
import CondtRendering from './LifeCycleHooks/CondtRendering';
import EffectHook from './LifeCycleHooks/EffectHooks';
import FetchData from './LifeCycleHooks/FetchData';
import HookCounter from './LifeCycleHooks/HookCounter';
import UseState from './LifeCycleHooks/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <HookCounter/> */}
      {/* <EffectHook/> */}
      {/* <CondtRendering/> */}
      <FetchData/>
    </div>
  );
}

export default App;
