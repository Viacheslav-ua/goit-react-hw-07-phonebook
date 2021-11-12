import React from "react";
import TextField from "@mui/material/TextField";
import S from "./Filter.module.css";
import { connect } from "react-redux";
import { setFilter } from "../../redux/contacts/contacts-actions";

interface PropsType {
  filterValue: string;
  onChangeFilter: any;
}

const Filter: React.FC<PropsType> = ({ filterValue, onChangeFilter }) => {
  return (
    <div>
      <TextField
        label="Find contacts by name"
        variant="standard"
        id="component-simple"
        type="text"
        name="filter"
        className={S.input}
        value={filterValue}
        onChange={onChangeFilter}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    filterValue: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setFilter(e.currentTarget.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
