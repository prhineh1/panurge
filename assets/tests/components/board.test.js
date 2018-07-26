import React from 'react';
import Board from '../../components/Board';
import { shallow } from 'enzyme';
import { initState } from '../fixtures/fixtures';

let wrapper, selected
selected = jest.fn();

test("should render Board with initState", () => {
    wrapper = shallow(<Board
        boardState={initState.boardState}
        turn={'black'}
        selected={selected}
        toMoveto={[[4,1]]}
    />);
    expect(wrapper).toMatchSnapshot();
});

test("should render Board on red's turn", () => {
    wrapper = shallow(<Board
        boardState={initState.boardState}
        turn={'red'}
        selected={selected}
        toMoveto={[[3,6]]}
    />);
    expect(wrapper).toMatchSnapshot();
});