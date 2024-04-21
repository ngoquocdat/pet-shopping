import styled from "styled-components";

const LinkItem = styled.li`
  font-weight: semi-bold;
  list-style: none;
  text-decoration: none;

  width: 100px;
  height: 25px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > a {
    text-decoration: none;
    color: black;
  }
`;

export default LinkItem;
