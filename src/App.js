import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  // DONT DO THIS:
  // fetchBooks();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;

// https://state-updates.vercel.app/
// State Updates - Cheat Sheet

// https://picsum.photos

// books git:(master) npm install json-server
// books git:(master) ✗ npm run server

// Extension: REST Client
// Huachao Mao
// REST Client for Visual Studio Code

// RequestError: connect ECONNREFUSED 127.0.0.1:3001"
// solution -> "server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"

// books git:(master) npm install axios

// codepen.io/sgrider/pen/BarEowz

// codesandbox.io/s/hungry-fog-0ev1ec
// Quick useEffect example
