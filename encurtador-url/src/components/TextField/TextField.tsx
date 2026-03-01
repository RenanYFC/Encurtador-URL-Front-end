interface propsTextField {
    children: string,
    className?: string
}

const TextField = (props: propsTextField) => {
    return (
        <input type="text" name="" id="" placeholder={props.children} className={props.className+" block bg-white text-black px-6 py-4 rounded-2xl placeholder-neutral-600 outline-0 focus:border-b-4 border-[var(--primary)] duration-100 ease-in-out "} />
    )
}

export {TextField}