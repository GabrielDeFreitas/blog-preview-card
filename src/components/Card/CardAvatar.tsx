import { ComponentProps } from "react";

export function CardAvatar(props: ComponentProps<'img'>) {
    return (
        <img className="rounded-full" {...props} />
    )
}