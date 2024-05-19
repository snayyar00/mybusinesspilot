
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';
import AppNavBar from '../components/AppNavBar';

export default function Dashboard() {
  return (
    
    <div className="flex flex-row" style={{backgroundColor:"#0a1038"}}>
      <Sidebar />
      <main className="flex-1 p-4 bg-gradient-conic">
        <div>
          <Products />
        </div>
      </main>
    </div>
  );
}
