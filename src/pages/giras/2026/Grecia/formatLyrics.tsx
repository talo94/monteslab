import type { ReactNode } from "react"

const TOKEN_PATTERN = /(\*\*[^*]+\*\*|\*(?!\*)[^*]+\*(?!\*)|\[\[[^\]]+\]\]|\/[\s\S]+?\/|\bx\d+\b)/gi

export function FormattedLyrics({
    text,
    showLegend = true,
    className = "",
}: {
    text: string
    showLegend?: boolean
    className?: string
}) {
    const parts = text.split(TOKEN_PATTERN)

    return (
        <div>
            {showLegend && (
                <div className="mb-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#7b6d60]">
                    <span>
                        <strong className="font-medium text-[#382e22]">Negrita</strong> — coro
                    </span>
                    <span>
                        <span className="font-medium text-[#b54a32]">Rojo</span> — indicación musical
                    </span>
                </div>
            )}

            <div
                className={[
                    "text-[15px] font-light leading-7 whitespace-pre-wrap text-[#5d5248]",
                    className,
                ].join(" ")}
            >
                {parts.map((part, index) => formatToken(part, index))}
            </div>
        </div>
    )
}

function formatToken(part: string, index: number): ReactNode {
    if (!part) return null

    if (part.startsWith("**") && part.endsWith("**")) {
        return (
            <strong key={index} className="font-medium text-[#382e22]">
                {part.slice(2, -2)}
            </strong>
        )
    }

    if (
        part.startsWith("*") &&
        part.endsWith("*") &&
        !part.startsWith("**")
    ) {
        return (
            <strong key={index} className="font-medium text-[#382e22]">
                {part.slice(1, -1)}
            </strong>
        )
    }

    if (part.startsWith("[[") && part.endsWith("]]")) {
        return (
            <span
                key={index}
                className="text-[13px] font-normal text-[#b54a32]"
            >
                {part.slice(2, -2)}
            </span>
        )
    }

    if (part.startsWith("/") && part.endsWith("/")) {
        const inner = part.slice(1, -1)

        return (
            <span key={index}>
                /{formatInlineEmphasis(inner, String(index))}/
            </span>
        )
    }

    if (/^x\d+$/i.test(part)) {
        return (
            <span key={index} className="font-medium text-[#a17145]">
                {part}
            </span>
        )
    }

    return <span key={index}>{part}</span>
}

const INLINE_EMPHASIS_PATTERN = /(\*\*[^*]+\*\*|\*(?!\*)[^*]+\*(?!\*))/gi

function formatInlineEmphasis(text: string, keyPrefix: string): ReactNode {
    const parts = text.split(INLINE_EMPHASIS_PATTERN)

    return parts.map((piece, pieceIndex) => {
        if (!piece) return null

        const key = `${keyPrefix}-inline-${pieceIndex}`

        if (piece.startsWith("**") && piece.endsWith("**")) {
            return (
                <strong
                    key={key}
                    className="font-medium text-[#382e22]"
                >
                    {piece.slice(2, -2)}
                </strong>
            )
        }

        if (
            piece.startsWith("*") &&
            piece.endsWith("*") &&
            !piece.startsWith("**")
        ) {
            return (
                <strong
                    key={key}
                    className="font-medium text-[#382e22]"
                >
                    {piece.slice(1, -1)}
                </strong>
            )
        }

        return piece
    })
}
