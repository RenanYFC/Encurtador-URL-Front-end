import type { ReactNode } from "react";

interface propsButton {
    children: ReactNode,
    onClick?: () => void,
    className?: string
}
const Button = (props: propsButton) => {
    return (
        <button type="button" className= {`text-white bg-[var(--primary)] rounded-lg py-4 font-bold cursor-pointer ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export {Button};