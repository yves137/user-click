import { Header } from "./Header.js";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <button
        onClick={() => alert("clicked!")}
        className="border border-black bg-slate-300 py-2 px-5 hover:bg-slate-200 rounded-md"
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
