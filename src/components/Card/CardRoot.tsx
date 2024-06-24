import { ReactNode } from "react"

interface CardRootProps {
    children: ReactNode
}

export function CardRoot({children} : CardRootProps) {
    return (
        <div className="max-w-80 p-4 bg-zinc-50 rounded-xl border border-neutral-950 shadow-[8px_8px_#0a0a0a] col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3">
            {children}
        </div>
    )
}

