import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Cats from './components/Cats'

Enzyme.configure({adapter: new Adapter() })

const cats = [
    {
        id: 1,
        name: 'Morris',
        age: 2,
        enjoys: 'Long walks'
    },
    {
        id: 2,
        name: 'Paws',
        age: 4,
        enjoys: 'Short walks'
    },
    {
        id: 3,
        name: 'Terminator of paws',
        age: 9000,
        enjoys: 'Eating humans'
    }
]
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Cats renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Cats cats={cats} />, div)
})

it('Renders the cats', ()=>{
  const component = mount(<Cats cats={cats} />)
  const headings = component.find('h4 > .cat-name')
  expect(headings.length).toBe(3)
})
