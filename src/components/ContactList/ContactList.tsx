import React, { useState } from "react";
import Filter from "../Filter/Filter";
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from "../../redux/phoneBookApi";
import S from "./ContactList.module.css";
type listType = {
  id: string;
  name: string;
  phone: string;
};

const ContactList: React.FC = () => {
  const [filter, setFilter] = useState("");
  const { data = [], isLoading } = useGetContactsQuery(filter);
  const [deleteContact] = useDeleteContactsMutation();

  const onDeleteContact = async (id: string | number) => {
    await deleteContact(id).unwrap();
  };

  function applyFilter(xWord: string) {
    setFilter(xWord);
  }

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
      <h2 className={S.title}>Contacts</h2>
      <Filter applyFilter={applyFilter} />
      <ul className={S.list}>
        {data.map(({ id, name, phone }: listType) => (
          <li key={id} className={S.row}>
            <p className={S.text}>
              {name}: {phone}
            </p>
            <button className={S.btn} onClick={() => onDeleteContact(id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
