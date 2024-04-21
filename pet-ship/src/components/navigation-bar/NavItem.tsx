import styled from "styled-components";

const LinkItem = styled.li`
  list-style: none;
  text-decoration: none;

  width: 100px;
  height: 30px;
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
