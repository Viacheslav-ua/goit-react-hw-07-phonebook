import React, { useState } from "react";
import Modal from "../Modal";
import { useAddContactsMutation } from "../../redux/phoneBookApi"
import S from "./ContactForm.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


interface PropsType {
  
  contacts: any;
}

// type contactsType = {
//   name: string;
//   phone: string;
// };

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const [addContact, {isError}] = useAddContactsMutation();

  const handleAddInput =
    (i: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const b = new RegExp(i);
      if (b.test(e.currentTarget.value)) {
        if (e.currentTarget.name === "name") setName(e.currentTarget.value);
        if (e.currentTarget.name === "number") setNumber(e.currentTarget.value);
      }
    };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addContact({ name: name, phone: number }).unwrap();
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const toggleModal = (): void => {
    setShowModal((state) => !state);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Alert severity="warning" onClose={toggleModal}>
            <AlertTitle>Warning</AlertTitle>
            {name} is already in contacts
          </Alert>
        </Modal>
      )}
      <form className={S.contactsForm} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="standard"
          id="component-simple"
          name="name"
          value={name}
          onChange={handleAddInput("^$|^[$a-zA-Zа-яА-Я -']*$")}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <TextField
          label="Phone number"
          variant="standard"
          id="component-simple"
          type="tel"
          name="number"
          value={number}
          onChange={handleAddInput("^$|^\\+|^\\d[\\d\\s-.]*$")}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <Button type="submit" className={S.btn} variant="contained">
          Add contact
        </Button>
      </form>
    </>
  );
};

export default ContactForm;