
import styled from "styled-components";

export const HireMeButton = styled.div`
  position: relative;
  z-index: 30;
  
  button {
    cursor: pointer;
    border: none;
    color: #fff;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 10s linear infinite;
  }

  .button__text span {
    position: absolute;
    transform: rotate(calc(10deg * var(--index)));
    inset: 12px;
    font-size: 15px; 
    font-weight: bold; 
  }

  .button__circle {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    background: #fff;
    color: #7808d0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 200ms ease-in-out;
  }

  .button__icon {
    position: relative;
    transition: transform 0.3s ease-in-out;
    /* Adjust position to fully hide edge in normal state */
    transform: translate(-2px, 2px);
  }

  .button__icon--copy {
    position: absolute;
    /* Adjust position to fully hide edge in initial state */
    transform: translate(-160%, 160%);
    transition: transform 0.3s ease-in-out;
  }

  button:hover {
    background: #000;
    transform: scale(1.05);
  }

  button:hover .button__icon {
    color: #000;
    /* Adjust position to fully hide edge in hover state */
    transform: translate(160%, -160%);
  }

  button:hover .button__icon--copy {
    /* Ensure the icon is perfectly centered when visible */
    transform: translate(0, 0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;
