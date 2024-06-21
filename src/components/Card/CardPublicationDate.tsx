import { ComponentProps } from "react";

interface CardPublicationDateProps extends ComponentProps<'time'> {
    children: string
}

export function CardPublicationDate(props: CardPublicationDateProps){
    return (
        <span className="text-xs font-extrabold text-neutral-950">Published <time {...props}>{props.children}</time> </span>
    )
}