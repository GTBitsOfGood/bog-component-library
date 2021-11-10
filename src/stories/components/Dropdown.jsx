import React from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";
import '../css/dropdown.css';

/**
 * Primary UI component for user interaction
 */
export const Dropdown = ({ variant, label, list, placeholder, isDisabled, error, onChange, ...props }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isListOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isListOpen);
  const close = () => setIsOpen(false);
  // const clearSelection = () => {
  //   setSelectedItem(null);
  // };
  const selectSingleItem = (item) => {
    const { list } = this.props;

    const selectedItem = list.find((i) => i.value === item.value);
    this.selectItem(selectedItem);
  }

  // const handleChange =(newValue)=>{    
  //   setInput(newValue);
  //   console.log(newValue); 
  // } 
  // const { isListOpen, headerTitle } = this.state;
  // const { list } = this.props;

  return (
    <div className={["storybook-dropdown-wrapper",'storybook-dropdown-wrapper--' + (isDisabled? 'disabled':''),'storybook-dropdown-wrapper--' + (error?'error':''),`storybook-dropdown-wrapper--${variant}`].join(' ')}>
      <label className={'storybook-dropdown-label'}>{label}</label>
      <button
        type="button"
        className='storybook-dropdown-header'
        onClick={toggling}
        disabled={isDisabled}
      >
        <div className="storybook-dropdown-header-title">Choose your player</div>
        {isListOpen
          ? <img className='dropdown-open' src='https://img.icons8.com/material-rounded/24/000000/chevron-up.png' alt="close"></img>
          : <img className='input-close' src='https://img.icons8.com/material-rounded/24/000000/chevron-down.png' alt="open"></img>}
      </button>
      {/* {isListOpen && (
        <div
          role="list"
          className="dd-list"
        >
          {list.map((item) => (
            <button
              type="button"
              className="dd-list-item"
              key={item.id}
              onClick={() => this.selectItem(item)}
            >
              {item.title}
              {' '}
              {item.selected && <FontAwesome name="check" />}
            </button>
          ))}
        </div>
      )} */}
      {error && 
      (<div className={'storybook-dropdown-label-error'}>
        {/* error icon */}
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="20" height="20"
          viewBox="0 0 172 172"
          style={{fill: "rgba(255, 57, 57, 1)"}}>
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <path d="M86,17.2c-4.76766,0 -8.85191,2.90522 -10.58203,
                  7.04349l-62.22682,107.32084v0.0112c-1.12304,1.80909 -1.72017,
                  3.89516 -1.72448,6.02448c0,6.33287 5.1338,11.46667 11.46667,
                  11.46667c0.26906,-0.00173 0.53798,-0.01294 0.80625,-0.03359l0.0224,
                  0.03359h62.23802h62.23802l0.02239,-0.04479c0.26814,0.02439 0.53706,
                  0.03933 0.80625,0.04479c6.33287,0 11.46667,-5.1338 11.46667,
                  -11.46667c-0.00223,-2.13313 -0.59944,-4.22335 -1.72448,
                  -6.03567l-0.08958,-0.15677c-0.00373,-0.00373 -0.00746,-0.00747 -0.0112,
                  -0.0112l-62.12604,-107.15287c-1.73013,-4.13827 -5.81437,-7.04349 -10.58203,
                  -7.04349zM79.04609,65.12708h13.90782l-1.15339,37.10989h-11.60104zM86.02239,
                  113.58047c4.7128,0 7.5362,2.53566 7.5362,6.86432c0,4.2484 -2.8234,6.77474 -7.5362,
                  6.77474c-4.7472,0 -7.59218,-2.52634 -7.59218,-6.77474c0,-4.32866 2.83925,
                  -6.86432 7.59218,-6.86432z">
          </path>
          </svg>
        <label className="alert-message">Error Message</label>
      </div>)}
    </div>
  )
}

Dropdown.propTypes = {
  /**
   * regular, radio, checkbox
   */
  variant: PropTypes.string.isRequired,
  /**
   * Input Label
   */
  label: PropTypes.string.isRequired,
  /**
     * An object formatted as:
     * {
     *      0: {
     *          id: "unique id"
     *          name: "Item Name"
     *      },
     *      1: {...},
     *      ...
     * }
     */
  list:PropTypes.object,
  /**
   * Input Placeholder text
   */
   placeholder: PropTypes.string,
  /**
   * Disable Input
   */
  isDisabled: PropTypes.bool,
  /**
   * Input cause error
   */
  error: PropTypes.bool,
  /**
   * Optional Input handler
   */
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  variant: 'regular',
  label: 'Label',
  // list:{
  //   0: {id: 0, name: 'About Us'},
  //   1: {id: 1, name: 'Projects'},
  //   2: {id: 2, name: 'Blog'}
  // },
  placeholder: 'Placeholder text',
  isDisabled: false,
  error: false, 
};
