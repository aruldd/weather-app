import { combineReducers } from 'redux';
import weather from './weatherReducer';
import ui from './uiReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    weather,
    ui,
  });

export default rootReducer;
