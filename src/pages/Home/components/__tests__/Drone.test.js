import Drone from '../Drone';

function setup() {
  const info = {
        "manufacturer": "Parrot",
        "model": "Anafi",
        "maxFlightTime": "1min",
        "charge": "0%"
    }

  const component = shallow(<Drone info={info}/>);

  return component;
}

describe('Drone component', () => {
  const component = setup();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});