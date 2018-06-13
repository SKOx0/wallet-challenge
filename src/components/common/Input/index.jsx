import styled from 'react-emotion';

export default styled('input')`
    height: ${(props) => props.height || '50px'};
    padding: ${(props) => props.padding || '15px'};
    width: ${(props) => props.width || '100%'};
    border-radius: ${(props) => props.borderRadius || '3px'};
    border-width: ${(props) => props.borderWidth || '1px'};
    border-color: ${(props) => props.borderColor || '#D2D2D2'};
    font-size: 1.0rem;

    &:focus{
      outline: none;
    }
    &[readonly], [disabled]{
      opacity: 0.5;
    }
`;
