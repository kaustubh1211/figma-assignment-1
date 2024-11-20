import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Card from './component/Card';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-1 ">
      <Header />
      <Card />
      <Dashboard />
    </main>
  </div>
  );
}

export default App;
