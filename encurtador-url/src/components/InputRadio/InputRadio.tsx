import styled from 'styled-components';

interface propsInputRadio {
    children: string,
    name: string,
    checked?: boolean
}

const InputRadio = (props:propsInputRadio) => {
  return (
    <StyledWrapper className='container'>
        <label>
            <input type="radio" name={props.name} defaultChecked={props.checked || false}/>
            <span>{props.children}</span>
        </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
  }

  label input {
    position: absolute;
    left: -9999px;
  }

  label input:checked + span {
    background-color: color-mix(in srgb, var(--primary), transparent 70%);
    color: white;
  }

  label input:checked + span:before {
    background-color: white;
    box-shadow: 0 0 0 2px white, 0 0 0 4px var(--primary);
    transform: scale(0.4);
  }

  label span {
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: 99em;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: white;
    background-color: rgba(255, 255, 255, 0.05);
  }

  label span:hover {
    background-color: color-mix(in srgb, var(--primary), transparent 70%);
  }

  label span:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: transparent;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    margin-right: 0.75em;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 0 0 0.125em rgba(255, 255, 255, 0.3);
  }

  label input:checked + span:hover {
    background-color: color-mix(in srgb, var(--primary), transparent 70%);
    filter: brightness(1.1);
  }
`;

export {InputRadio};
