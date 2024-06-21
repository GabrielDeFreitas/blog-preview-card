import { ReactNode } from "react"

interface CardContentProps {
    children: ReactNode
}

export function CardContent({children} : CardContentProps) {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}