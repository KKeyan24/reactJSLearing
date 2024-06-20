import logo from './logo.svg';
import './App.css';
import Welcome from './Func&Class/Function';
import Greet from './Func&Class/ClassComponent';
import KKNProps from './Props&State/PropsFunction';
import KKNPropsClass from './Props&State/PropsClass';
import KKNStateClass from './Props&State/StateClass';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Greet/>
      <KKNProps name="Karthikeyan P">
        <p>Senior Consultant - UI Developer</p>
      </KKNProps>
      <KKNPropsClass name="YogaPriya">
        <div>Senior Developer - Angular & ReactJS</div>
      </KKNPropsClass>
      <KKNStateClass></KKNStateClass>
    </div>
  );
}

export default App;
