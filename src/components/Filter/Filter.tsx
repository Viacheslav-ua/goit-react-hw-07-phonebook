import React from "react";
import { useState, useEffect } from "react";
import useDebounce from "../../hooks/use-debounce";
import TextField from "@mui/material/TextField";
import S from "./Filter.module.css";

const Filter: React.FC<any> = ({ applyFilter }) => {
  const [filterValue, setFilterValue] = useState("");
  const debouncedFilter = useDebounce(filterValue, 500);

  useEffect(() => {
    applyFilter(debouncedFilter);
  }, [debouncedFilter]);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

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
        onChange={handleChangeFilter}
      />
    </div>
  );
};
export default Filter;
