import "./App.scss";
import AppContent from "./components/Molecules/AppContent";
import AppHeader from "./components/Molecules/AppHeader";
import './components/Molecules/TodoModal/style.scss'
import { Toaster } from "react-hot-toast";
function App() {

  

  return (
    <>
      <div className="app">
      <h1>TODO LIST</h1>
      <div className="main">
        <AppHeader/>
        <AppContent/>
      </div>
    </div>
    <Toaster toastOptions={{
      className:'text-2xl'
    }}/>
    </>
  );
}

export default App;
