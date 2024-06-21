import { ReactNode } from "react"

interface CardFooterProps{
    children: ReactNode
}

export function CardFooter({children} : CardFooterProps){
    return (
        <div className="flex flex-row items-center gap-4">
            {children}
        </div>
    )
}