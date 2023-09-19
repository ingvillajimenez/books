import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title: newTitle,
        };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
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
