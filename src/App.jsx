import OrderPage from "./components/Orderpage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <OrderPage />
    </div>
  );
}

export default App;
