import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamMembers from './component/TeamMembers/TeamMembers';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <TeamMembers></TeamMembers>


    </div>
  );
}

export default App;
