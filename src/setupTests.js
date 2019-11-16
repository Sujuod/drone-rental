  
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

// React
global.React = React;

// Enzymes
global.shallow = shallow;
global.render = render;
global.mount = mount;

global.mockStore = configureStore([]);

// Redux 
global.mockRender = (store, component) =>
  mount(<Provider store={store}>{component}</Provider>);