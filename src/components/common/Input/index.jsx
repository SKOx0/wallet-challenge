import styled from 'react-emotion';

export default styled('input')`
    height: ${(props) => props.height || '50px'};
    padding: ${(props) => props.padding || '15px'};
    width: ${(props) => props.width || '100%'};
    border-radius: ${(props) => props.borderRadius};
    border-width: ${(props) => props.borderWidth};
    border-color: ${(props) => props.borderColor};
    font-size: 1.0rem;

    &:focus{
      outline: none;
    }
`;
