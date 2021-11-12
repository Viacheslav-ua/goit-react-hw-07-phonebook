import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import S from "./ContactList.module.css";
type listType = {
  id: string;
  name: string;
  number: string;
};

// interface PropsType {
//   contacts: listType[];
//   onDeleteContact: string;
// }

const ContactList: React.FC<any> = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={S.list}>
      {contacts.items.map(
        ({ id, name, number }: listType) =>
          name.toLowerCase().includes(contacts.filter.toLowerCase()) && (
            <li key={id} className={S.row}>
              <p className={S.text}>
                {name}: {number}
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

const mapStateToProps = (state: any) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onDeleteContact: (id: string) => dispatch(actions.removeContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
