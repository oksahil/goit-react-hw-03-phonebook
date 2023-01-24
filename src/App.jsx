import './index.css';
import MainMenu from 'modules/MainMenu/MainMenu';
import mainMenu from "./data/mainMenu.json";

function App() {
  return (
    <div>
      <MainMenu items={mainMenu} />
    </div>
  );
};

export default App;
