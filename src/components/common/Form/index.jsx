import styled from 'react-emotion';

export default styled('form')`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.padding};
`;
