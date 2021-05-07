import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notesTerm) => (
        <Note
          key={notesTerm.key}
          title={notesTerm.title}
          content={notesTerm.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
