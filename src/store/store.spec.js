import * as redux from 'redux';
import initialState from '../reducers/initialState';
import configureStore from './configureStore';
describe('Store', () => {
  const OLD_ENV = process.env;
  jest.spyOn(redux, 'applyMiddleware');
  jest.spyOn(redux, 'compose');
  jest.spyOn(redux, 'createStore');
  beforeEach(() => {
    jest.clearAllMocks();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });
  it('should call the required functions on production', () => {
    process.env.NODE_ENV = 'production';
    const store = configureStore(initialState);
    expect(store).toBeInstanceOf(Object);
    expect(redux.applyMiddleware).toBeCalled();
    expect(redux.compose).toBeCalled();
    expect(redux.createStore).toBeCalledWith(
      expect.any(Function),
      initialState,
      expect.any(Function)
    );
    expect(store).toMatchSnapshot();
  });
});
