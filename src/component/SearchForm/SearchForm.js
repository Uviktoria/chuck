import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Multiselect } from "multiselect-react-dropdown";
import "./SearchForm.css";
import format from "string-format";
import { random, searchText, labels, searchBtn } from "../constants";

const SearchForm = (props) => {
  const {
    onSearch,
    selectedForm,
    onChangeName,
    nameValue,
    onChangeKeywordValue,
    keywordValue,
    optionsCategory,
    selectedOptions,
  } = props;

  const go = () => {
    const url =
      selectedForm === 1 ? getRendomUrl() : format(searchText, keywordValue);
    onSearch(url);
  };
  const getRendomUrl = () => {
    let rendomUrl = random;
    if (nameValue) rendomUrl = `${random}?name=${nameValue}`;
    else if (selectedOptions?.length > 0)
      rendomUrl = `${random}?category=${delId(selectedOptions)}`;
    else if (nameValue && selectedOptions?.length > 0)
      rendomUrl = `${random}?category=${delId(selectedOptions)}&name=${nameValue}`;
    return rendomUrl;
  };
  const delId = (list) => list.map((el) => el.name);
  return (
    <Form className="searchForm">
      <FormGroup row>
        {selectedForm === 1 ? (
          <>
            <Label className="lables" for="yourName" sm={1}>
              {labels.name}
            </Label>
            <Col sm={4}>
              <Input
                className="inputs"
                type="text"
                name="yourName"
                id="yourName"
                value={nameValue}
                autoComplete="off"
                onChange={onChangeName}
                placeholder="e.g. Chuck Norris"
              />
            </Col>
            <Label className="lables" for="category" sm={1}>
              {labels.category}
            </Label>
            <Col sm={4}>
              <Multiselect
                id="category"
                options={optionsCategory}
                selectedValues={selectedOptions}
                onSelect={props.onSelectCategory}
                onRemove={props.onSelectCategory}
                displayValue="name"
                placeholder="Pick a category"
              />
            </Col>
          </>
        ) : (
          <>
            <Label className="lables" for="keyWord" sm={1}>
            {labels.keyWord}          
            </Label>
            <Col sm={9}>
              <Input
                className="inputs"
                autoComplete="off"
                type="text"
                value={keywordValue}
                onChange={onChangeKeywordValue}
                name="keyWord"
                id="keyWord"
                placeholder="e.g. egg, break, Chu"
              />
            </Col>
          </>
        )}
        <Col sm={2}>
          <Button className="goBtn" onClick={go}>
           {searchBtn}
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default SearchForm;
