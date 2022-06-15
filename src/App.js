import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import dataArray from './data';

function App() {
  const listsData = dataArray.map((data, index) => {
    return <Main key={index} data={data} />;
  });
  return (
    <div className='container'>
      <Navbar />
      <main>{listsData}</main>
    </div>
  );
}

export default App;
