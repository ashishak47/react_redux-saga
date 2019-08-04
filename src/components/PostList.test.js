import React from 'react';
    import { shallow } from 'enzyme';
    import PostList from './PostList';

    describe('HOME component', () => {
      it('div text is', () => {
        const wrapper = shallow(<PostList />);
        expect(wrapper.exists()).toEqual(true);
      });
    });