import DronesList from '../DronesList';

function setup() {
  const list = [{
        "manufacturer": "Parrot",
        "model": "Anafi",
        "maxFlightTime": "1min",
        "charge": "0%"
    }]

  const component = shallow(<DronesList list={list}/>);

  return component;
}

describe('DronesList component', () => {
  const component = setup();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});