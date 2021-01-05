import React, { Component } from "react";
import "./Main.css";
import {  Spinner } from "reactstrap";
import { connect } from "react-redux";
import {
  getCategory,
  onSelectCategory,
  onSelectForm,
  onChangeName,
  onSearch,
  onChangeKeywordValue,
  onSortBy

} from "./actions";
import ButtonsGroup from './ButtonsGroup/ButtonsGroup';
import SearchForm from './SearchForm/SearchForm';
import Table from './Table/Table';
import Blockquote from './Blockquote/Blockquote';

const mapStateToProps = (state) => {
  return {
    optionsCategory: state.optionsCategory,
    selectedOptions: state.selectedOptions,
    selectedForm: state.selectedForm,
    displayData: state.displayData,
    nameValue: state.nameValue,
    keywordValue: state.keywordValue,
    sortBy: state.sortBy
  };
};

const mapDispatchToProps = {
  getCategory,
  onSelectCategory,
  onSelectForm,
  onChangeName,
  onSearch,
  onChangeKeywordValue,
  onSortBy
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.props.getCategory();
  }

  render() {
    const {
      optionsCategory,
      selectedForm,
      onSelectForm,
      displayData,
      onSortBy, sortBy
    } = this.props;

    const isArray = displayData?.length > 0;
    if (!optionsCategory) return <Spinner />;
    else
      return (
        <div className="mainBox">
         <ButtonsGroup onSelectForm={onSelectForm} selectedForm={selectedForm}/>
         <SearchForm {...this.props}/>
         {isArray && <Table displayData={displayData} onSortBy={onSortBy} sortBy={sortBy}/>}
         {displayData && displayData.value && !isArray && <Blockquote >{displayData.value}</Blockquote>}
         {!isArray && <div>No Results</div>}
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
