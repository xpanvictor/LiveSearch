import "./styles.css";
import Search from "./search";

export default function App() {
  return (
    <div className="App bg-dark text-white">
      <h1>Type to live search with regex</h1>
      <Search />
    </div>
  );
}
