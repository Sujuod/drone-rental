import Station from '../Station';

function setup() {
  const component = shallow(<Station stationNumebr={1}/>);
  return component;
}

describe('Station component', () => {
  const component = setup();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});