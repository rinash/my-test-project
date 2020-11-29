/**
 * Redux actions. 
 * React, React-Route, Redux Test project.
 */

import { CREATE_ITEM, CLEAR_ITEM } from "./types";

export function createItem(item) {
  return {
    type: CREATE_ITEM,
    payload: item
  };
}

export function clearItem() {
  return {
    type: CLEAR_ITEM,
    payload: {}
  };
}
