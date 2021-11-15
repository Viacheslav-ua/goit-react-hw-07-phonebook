import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import S from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={S.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
