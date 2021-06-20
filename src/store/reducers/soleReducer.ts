import { AnyAction } from "redux";
import config from "../../../config.json";

export interface configInterface {
  searchWaitBeforeRequestTimeout: number,
  searchBadRequestTimeout: number,
  searchUrl: string,
  coverUrl: string,
}

export interface docsInterface {
  title: string,
  author_name: Array<string>,
  cover_i: number,
  first_publish_year: number,
}

export interface responseInterface {
  start : number,
  num_found: number,
  numFoundExact: boolean,
  docs: Array<docsInterface>,
}

interface initStateInterface {
  searchData: Array<responseInterface>,
  config: configInterface,
}

export enum actionTypes {
  SET_SEARCH_DATA = "SET_SEARCH_DATA",
}

const initialState: initStateInterface = {
  searchData: [],
  config,
};

export const soleReducer = (state: initStateInterface = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_DATA: {
      const { payload } = action;
      return {
        ...state,
        searchData: [...state.searchData, payload],
      };
    }
    default: {
      return state;
    }
  }
};
