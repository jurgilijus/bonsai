import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Labas";
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
