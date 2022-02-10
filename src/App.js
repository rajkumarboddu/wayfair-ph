import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Header />
      </main>
    </>
  );
}

export default App;
