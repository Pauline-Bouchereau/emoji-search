// Import CSS
import "./App.css";

// Import tools
import { useState } from "react";

// Import components
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header />
      <main>
        <SearchBar search={search} setSearch={setSearch} />
        <SearchResults search={search} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
