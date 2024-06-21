import { ComponentProps } from "react";

interface CardDescriptionProps extends ComponentProps<'p'>{
   children: string
}

export function CardDescription( props : CardDescriptionProps){
    return (
        <p className="text-sm font-medium text-neutral-500" {...props}>
            {props.children}            
        </p>
    )
}