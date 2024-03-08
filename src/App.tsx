import "./styles.scss";
import { SideNav } from "./components/side-nav/side-nav.component";
import { Dashboard } from "./components/dashboard/dashboard.component";

export default function App() {
  return (
    <div className="App">
      <SideNav />
      <Dashboard />
    </div>
  );
}
