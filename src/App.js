import logo from './logo.svg';
import './App.css';
import Welcome from './Func&Class/Function';
import Greet from './Func&Class/ClassComponent';
import KKNProps from './Props&State/PropsFunction';
import KKNPropsClass from './Props&State/PropsClass';

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
    </div>
  );
}

export default App;
