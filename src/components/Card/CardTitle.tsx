import { ComponentProps } from "react"

interface CardTitleProps extends ComponentProps<'h1'>{
    children: string
}

export function CardTitle(props: CardTitleProps){
    return (
        <h1 className="text-xl font-extrabold text-neutral-950" {...props}>
            {props.children}
        </h1>
    )
}