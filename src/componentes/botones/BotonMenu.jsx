import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ isOpen, toggleMenu }) => {
  return (
    <StyledWrapper>
      <label htmlFor="menu-icon" className="menu-icon">
        <input 
          id="menu-icon" 
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
          />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .menu-icon {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #e0e5ec;
    box-shadow: 12px 12px 24px #b8bec7, -12px -12px 24px #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .menu-icon:active {
    box-shadow: inset 12px 12px 24px #b8bec7, inset -12px -12px 24px #ffffff;
  }

  .menu-icon input {
    display: none;
  }

  .menu-icon span {
    display: block;
    position: absolute; /* Para poder centrar las líneas */
    height: 3px;
    width: 30px;
    background: #333;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    top: 50%;
    left: 50%;
    transform-origin: center;
    margin: 0;
  }

  /* Posicionar cada línea verticalmente */
  .menu-icon span:nth-of-type(1) {
    transform: translate(-50%, -11px);
  }

  .menu-icon span:nth-of-type(2) {
    transform: translate(-50%, -50%);
  }

  .menu-icon span:nth-of-type(3) {
    transform: translate(-50%, 8px);
  }

  /* Cuando está activo (checked) */
  .menu-icon input:checked ~ span {
    background: #E7000B;
  }

  .menu-icon input:checked ~ span:nth-of-type(1) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .menu-icon input:checked ~ span:nth-of-type(2) {
    opacity: 0;
  }

  .menu-icon input:checked ~ span:nth-of-type(3) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export default Checkbox;

