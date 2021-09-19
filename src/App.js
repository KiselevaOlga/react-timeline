import './App.css';
import {Timeline} from './components/Timeline';

function App() {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">Prima Assicurazioni</h1>
        <h2 className="main-subtitle">React Timeline</h2>
      </header>
      <main>
        <Timeline />
      </main>
      <footer className="main-footer">
        <h5>Created by Olga Kiseleva</h5>
      </footer>
    </>
  );
}

export default App;
