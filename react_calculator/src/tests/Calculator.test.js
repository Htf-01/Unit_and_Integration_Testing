import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  });
  
  it('should change running total on number enter', () => {
    let button4 = container.find('#number4');
    button4.simulate('click');
    let runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('4');
  });
  
  it('should be able to add two numbers', () => {
    let button1 = container.find('#number1');
    let buttonAdd = container.find('#operator-add');
    let button4 = container.find('#number4');
    let buttonEquals = container.find('#operator-equals');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    let runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  });
  
  it('should be able to subtract two numbers', () => {
    let button7 = container.find('#number7');
    let buttonSubtract = container.find('#operator-subtract');
    let button4 = container.find('#number4');
    let buttonEquals = container.find('#operator-equals');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    let runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  });
  
  it('should be able to multiply two numbers', () => {
    let button3 = container.find('#number3');
    let buttonMultiply = container.find('#operator-multiply');
    let button5 = container.find('#number5');
    let buttonEquals = container.find('#operator-equals');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    let runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  });
  
  it('should be able to divide two numbers', () => {
    let button2 = container.find('#number2');
    let button1 = container.find('#number1');
    let buttonDivide = container.find('#operator-divide');
    let button7 = container.find('#number7');
    let buttonEquals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    let runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  });
  
  it('should be able to concatenate number clicks', () => {
    let button2 = container.find('#number2');
    let button1 = container.find('#number1');
    let buttonEquals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    let runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('21');
  });
  
  
  it('should be able to chain operations', () => {
    let button4 = container.find('#number4');
    let buttonMultiply = container.find('#operator-multiply');
    let button5 = container.find('#number5');
    let buttonSubtract = container.find('#operator-subtract');
    let button2 = container.find('#number2');
    let buttonEquals = container.find('#operator-equals');
    button4.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonSubtract.simulate('click');
    button2.simulate('click');
    buttonEquals.simulate('click');
    let runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('18');
  });
  
});