import { React, useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Wrapper = styled.div`
  position: absolute;
  top: 35px;
  left: 25%;
  width: 100vw;
`;

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <Wrapper>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </Wrapper>
  );
}

export default Search;
