import styled from "styled-components";

export const Container = styled.div`
  background: #6895ff;
  padding: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;

  div {
    display: flex;
    width: 300px;
    justify-content: space-around;
    height: 100px;
    background: #08bfff;
    align-items: center;
    border-radius: 8px;

    p {
      font-size: 60px;
      display: flex;
      justify-content: center;
      border: 2px solid black;
      border-radius: 100%;
      background: orange;
      padding: 10px;
    }

    button {
      border-radius: 100%;
      width: 50px;
      height: 90px;
      border: 0;
      font-size: 50px;
      background: #112446;
      color: white;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
        border: 3px groove goldenrod;
      }
    }
  }
`;
