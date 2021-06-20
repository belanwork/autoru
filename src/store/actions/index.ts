import { actionTypes, docsInterface } from "../reducers/soleReducer";

export type setSearchDataAction = {
    type: string,
    payload: docsInterface,
}
export const setSearchData = (value : docsInterface) : setSearchDataAction => {
  return {
    type: actionTypes.SET_SEARCH_DATA,
    payload: value,
  };
};
