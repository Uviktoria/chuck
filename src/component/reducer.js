import _ from "lodash";
import {
  SET_OPTIONS_CATEGORY,
  SELECTED_CATEGORYS,
  SELECTED_FORM,
  DISPLAY_RESULT,
  ON_CHANGE_NAME,
  ON_CHANGE_KEYWORD,
  ON_SORT_BY,
} from "./types";
const initState = {
  optionsCategory: null,
  selectedOptions: null,
  selectedForm: 1,
  displayData: null,
  nameValue: "",
  keywordValue: "",
  sortBy: "created_at",
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case SET_OPTIONS_CATEGORY:
      let listCategoty = action.payload.data.map((element, index) => {
        return {
          name: element,
          id: index,
        };
      });
      return { ...state, optionsCategory: listCategoty };
    case SELECTED_CATEGORYS:
      const selectedList = action.payload;
      return { ...state, selectedOptions: selectedList };
    case SELECTED_FORM:
      return { ...state, selectedForm: action.payload, displayData: null };
    case DISPLAY_RESULT:
      return {
        ...state,
        displayData: action.payload.data?.result
          ? action.payload.data?.result
          : action.payload.data,
      };
    case ON_CHANGE_NAME:
      return { ...state, nameValue: action.payload.target.value };
    case ON_CHANGE_KEYWORD:
      return { ...state, keywordValue: action.payload.target.value };
    case ON_SORT_BY:
      let sortList = _.sortBy(state.displayData, action.payload);
      return { ...state, sortBy: action.payload, displayData: sortList };
    default:
      return state;
  }
};
export default reducers;
