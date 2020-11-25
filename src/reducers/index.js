import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import weather from './weatherReducer';
import ui from './uiReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    fuelSavings,
    weather,
    ui,
  });

export default rootReducer;
