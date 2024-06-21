import { ComponentProps } from "react"

interface CardAuthorProps extends ComponentProps<'p'>{
    children: string
}

export function CardAuthor(props : CardAuthorProps){
    return (
        <p className="text-sm font-extrabold text-neutral-950"{...props}>
            {props.children}
        </p>
    )
}