import { ComponentProps } from "react"

interface CardTitleProps extends ComponentProps<'a'>{
    children: string
}

export function CardTitle(props: CardTitleProps){
    return (
        <a className="text-xl font-extrabold text-neutral-950 transition duration-500 cursor-pointer hover:text-yellow-300" {...props}>
            {props.children}
        </a>
    )
}