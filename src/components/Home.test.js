import React from 'react';
    import { shallow } from 'enzyme';
    import Home from './Home';

    describe('HOME component', () => {
      it('div text is', () => {
        const wrapper = shallow(<Home />);
        const text = wrapper.find('div').text();
        expect(text).toEqual('Home');
      });
    });