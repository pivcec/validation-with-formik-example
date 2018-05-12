import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../components/Input';
import { Person } from '@material-ui/icons';

Enzyme.configure({ adapter: new Adapter() });

describe('Renders...', () => {
  it('Renders div.input-with-checkbox if hasCheckbox is true', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const errors = {};
    const touched = {};
    const input = mount(<Input
      title="vorname"
      icon={<Person />}
      handleClick={handleClick}
      showPassword={false}
      hasCheckbox
      id="firstName"
      placeholder=""
      type="text"
      value="firstName"
      onChange={handleChange}
      onBlur={handleBlur}
      className="text-input"
      errors={errors}
      touched={touched}
    />);
    const inputWithCheckbox = input.find('div.input-with-checkbox');
    expect(inputWithCheckbox).toHaveLength(1);
  });
});
