import styled from 'styled-components';

interface propsSwitch {
    children: string,
    onChange: () => void
}

const Switch = (props:propsSwitch) => {
  return (
    <StyledWrapper className='flex gap-5'>
      <input className="switch" type="checkbox" defaultChecked={true} onChange={()=>{props.onChange()}} />
      <p>{props.children}</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    position: relative;
    height: 1.5rem;
    width: 3rem;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 9999px;
    background-color: rgba(100, 116, 139, 0.377);
    transition: all .3s ease;
  }

  .switch:checked {
    background-color: var(--primary);
  }

  .switch::before {
    position: absolute;
    content: "";
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;
    border: 1px solid rgba(100, 116, 139, 0.527);
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 10px rgba(100, 116, 139, 0.327);
    transition: all .3s ease;
  }

  .switch:hover::before {
    box-shadow: 0 0 0px 8px rgba(0, 0, 0, 0.08);
  }

  .switch:checked:hover::before {
    box-shadow: 0 0 0px 8px color-mix(in srgb, var(--primary), transparent 85%);
  }

  .switch:checked:before {
    transform: translate(1.4rem, -50%); /* Ajustado para deslizar corretamente */
    border-color: var(--primary);
  }
`;
export {Switch};
