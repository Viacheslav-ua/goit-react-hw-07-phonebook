import React from "react";
import { useGetContactsQuery, useDeleteContactsMutation } from "../../redux/phoneBookApi"
import S from "./ContactList.module.css";
type listType = {
  id: string;
  name: string;
  phone: string;
};

// interface PropsType {
//   contacts: listType[];
//   onDeleteContact: string;
// }

const ContactList: React.FC = () => {

  const { data = [], isLoading } = useGetContactsQuery('');
  const [deleteContact] = useDeleteContactsMutation();

  const onDeleteContact = async(id: string | number) => {
    await deleteContact(id).unwrap();
  }

  if (isLoading) {
    return <h1>LOADING...</h1>
  }

  return (
    <ul className={S.list}>
      {data.map(
        ({ id, name, phone }: listType) =>
        
        (<li key={id} className={S.row}>
          <p className={S.text}>
            {name}: {phone}
          </p>
          <button className={S.btn} onClick={() => onDeleteContact(id)}>
            Удалить
          </button>
        </li>
        )
      )}
    </ul>
  );
};

export default ContactList;