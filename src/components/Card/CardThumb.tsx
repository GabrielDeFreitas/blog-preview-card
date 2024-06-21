import { ComponentProps } from "react";

export function CardThumb(props: ComponentProps<'img'>) {
    return (
        <div className="flex flex-col mb-4">
            <img className="rounded-xl" {...props} />
        </div>
    )
}