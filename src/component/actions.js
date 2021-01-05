import axios from "axios";
import {
  SET_OPTIONS_CATEGORY,
  SELECTED_CATEGORYS,
  SELECTED_FORM,
  DISPLAY_RESULT,
  ON_CHANGE_NAME,
  ON_CHANGE_KEYWORD,
  ON_SORT_BY,
} from "./types.js";
import { urlCategory } from "./constants";

export function getCategory() {
  return (dispatch) => {
    return axios
      .get(urlCategory)
      .then((data) => {
        dispatch({
          type: SET_OPTIONS_CATEGORY,
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function onSearch(url) {
  return (dispatch) => {
    return axios
      .get(url)
      .then((data) => {
        dispatch({
          type: DISPLAY_RESULT,
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function onSelectCategory(selectedList) {
  return {
    type: SELECTED_CATEGORYS,
    payload: selectedList,
  };
}

export function onChangeName(value) {
  return {
    type: ON_CHANGE_NAME,
    payload: value,
  };
}

export function onSelectForm(form) {
  return {
    type: SELECTED_FORM,
    payload: form,
  };
}

export function onChangeKeywordValue(value) {
  return {
    type: ON_CHANGE_KEYWORD,
    payload: value,
  };
}

export function onSortBy(value) {
  return {
    type: ON_SORT_BY,
    payload: value,
  };
}
