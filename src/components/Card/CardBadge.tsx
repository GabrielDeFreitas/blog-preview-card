import { ComponentProps } from "react";

interface CardBadgeProps extends ComponentProps<'span'> {
    children: string
}

export function CardBadge(props : CardBadgeProps) {
    return (
        <span className="bg-yellow-300 max-w-max px-2 py-1 rounded-md text-xs font-extrabold text-neutral-950">{props.children}</span>
    )
}