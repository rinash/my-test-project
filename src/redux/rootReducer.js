/**
 * Redux root reducer.
 * React, React-Route, Redux Test project.
 */

import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

export const rootReducer = combineReducers({
  items: dataReducer
});
