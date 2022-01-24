import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBody};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: fixed;
  z-index: 1;
  width: 4rem;
  height: 2rem;
  bottom: 2rem;
  right: 1rem;
`;

const Toggle = ({ themeMode, toggleTheme }) => {
  return (
    <>
      <ToggleButton onClick={toggleTheme} themeMode={themeMode}>
        낮/밤
      </ToggleButton>
    </>
  );
};

export default Toggle;
