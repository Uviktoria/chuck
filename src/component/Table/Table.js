import React, { Fragment, useState } from "react";
import { Table as ReactstrapTable, Collapse } from "reactstrap";
import "./Table.css";
import Blockquote from "../Blockquote/Blockquote";
import {tableHeaders} from '../constants';

const Table = props => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = openId =>
    setIsOpen(openId && openId !== isOpen ? openId : null);
  const { displayData, onSortBy, sortBy } = props;

  const renderSortIcon = (sortVal) => {
    let icon =
      sortBy === sortVal ? (
        <>
          <i className="material-icons">arrow_downward</i>{" "}
          <i className="material-icons">filter_alt</i>
        </>
      ) : (
        <i className="material-icons">filter_alt</i>
      );
    return (
      <button className="btnSort" onClick={(e) => onSortBy(sortVal)}>
        {icon}
      </button>
    );
  };

  return (
    <ReactstrapTable className="tableResults">
      <thead>
        <tr>
        {tableHeaders.map(thEl=><th>{renderSortIcon(thEl.filterValue)}{thEl.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {displayData.map(el => {
          return (
            <Fragment key={el.id+"row"}>
              <tr onClick={(e) => toggle(el.id)}>
                <td>{el.id}</td>
                <td>{el.category}</td>
                <td>{el.created_at}</td>
              </tr>
              <tr>
                <td colSpan="3" className="collapseTd">
                  <Collapse isOpen={isOpen === el.id}>
                    <Blockquote>{el.value}</Blockquote>
                  </Collapse>
                </td>
              </tr>
            </Fragment>
          );
        })}
      </tbody>
    </ReactstrapTable>
  );
};

export default Table;
