import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Clock />
      </div>
      <style jsx>
        {`
        .content {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
        }
        `}
      </style>
      <style jsx global>
        {`
        body {
          font-family: 'M PLUS 1p', sans-serif;
          color: white;
        }
        `}
      </style>
    </div>
  );
}

export default App;
