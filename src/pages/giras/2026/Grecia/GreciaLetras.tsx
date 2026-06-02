import { useCallback, useEffect, useMemo, type ReactNode } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { routes } from "../../../../routes/routes"
import { FormattedLyrics } from "./formatLyrics"
import { giraInfo, musicFrames } from "./data"

export default function GreciaLetras() {
    const [searchParams, setSearchParams] = useSearchParams()

    const activeFrameId =
        musicFrames.find((frame) => frame.id === searchParams.get("cuadro"))?.id ??
        musicFrames[0].id

    const activeFrame = useMemo(
        () => musicFrames.find((frame) => frame.id === activeFrameId)!,
        [activeFrameId],
    )

    const activeSongId = useMemo(() => {
        const requested = searchParams.get("cancion")
        if (requested && activeFrame.songs.some((song) => song.id === requested)) {
            return requested
        }
        return activeFrame.songs[0].id
    }, [activeFrame, searchParams])

    const activeSong = useMemo(
        () => activeFrame.songs.find((song) => song.id === activeSongId),
        [activeFrame, activeSongId],
    )

    const activeSongIndex = activeFrame.songs.findIndex((song) => song.id === activeSongId)

    const updateSelection = useCallback(
        (frameId: string, songId: string) => {
            setSearchParams({ cuadro: frameId, cancion: songId }, { replace: true })
        },
        [setSearchParams],
    )

    const goToSong = useCallback(
        (offset: number) => {
            const nextIndex = activeSongIndex + offset
            if (nextIndex < 0 || nextIndex >= activeFrame.songs.length) return
            updateSelection(activeFrameId, activeFrame.songs[nextIndex].id)
        },
        [activeFrame, activeFrameId, activeSongIndex, updateSelection],
    )

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (
                event.target instanceof HTMLInputElement ||
                event.target instanceof HTMLTextAreaElement
            ) {
                return
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault()
                goToSong(-1)
            }

            if (event.key === "ArrowRight") {
                event.preventDefault()
                goToSong(1)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [goToSong])

    return (
        <main className="min-h-screen bg-[#fbf7ef] text-[#382e22]">
            <header className="sticky top-0 z-20 border-b border-[#e0d4c4] bg-[#fbf7ef]/95 backdrop-blur-sm">
                <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
                    <Link
                        to={routes.grecia2026}
                        className="shrink-0 text-sm font-medium text-[#a17145] transition hover:text-[#382e22]"
                    >
                        ← Gira
                    </Link>

                    <p className="truncate text-center text-sm font-medium text-[#5d5248]">
                        Letras · {giraInfo.title}
                    </p>

                    <div className="flex shrink-0 items-center gap-1">
                        <NavButton
                            label="Anterior"
                            disabled={activeSongIndex <= 0}
                            onClick={() => goToSong(-1)}
                        >
                            ←
                        </NavButton>
                        <span className="min-w-[3rem] text-center text-xs tabular-nums text-[#7b6d60]">
                            {activeSongIndex + 1}/{activeFrame.songs.length}
                        </span>
                        <NavButton
                            label="Siguiente"
                            disabled={activeSongIndex >= activeFrame.songs.length - 1}
                            onClick={() => goToSong(1)}
                        >
                            →
                        </NavButton>
                    </div>
                </div>

                <div className="mx-auto max-w-5xl px-4 pb-3 sm:px-6">
                    <div
                        className="grid grid-cols-2 gap-1.5 rounded-2xl bg-[#f3eadc] p-1.5 sm:grid-cols-4"
                        role="tablist"
                        aria-label="Cuadros musicales"
                    >
                        {musicFrames.map((frame) => (
                            <button
                                key={frame.id}
                                type="button"
                                role="tab"
                                aria-selected={activeFrameId === frame.id}
                                className={[
                                    "rounded-xl px-2 py-2.5 text-center text-xs font-medium transition sm:text-sm",
                                    activeFrameId === frame.id
                                        ? "bg-[#fbf7ef] text-[#382e22] shadow-sm"
                                        : "text-[#7b6d60] hover:bg-[#fbf7ef]/60",
                                ].join(" ")}
                                onClick={() =>
                                    updateSelection(frame.id, frame.songs[0].id)
                                }
                            >
                                {frame.name.replace("Cuadro ", "")}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="mx-auto flex max-w-5xl gap-1.5 overflow-x-auto px-4 pb-3 sm:px-6"
                    role="tablist"
                    aria-label="Canciones del cuadro"
                >
                    {activeFrame.songs.map((song, index) => (
                        <button
                            key={song.id}
                            type="button"
                            role="tab"
                            aria-selected={activeSongId === song.id}
                            className={[
                                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
                                activeSongId === song.id
                                    ? "bg-[#382e22] text-[#fbf7ef]"
                                    : "bg-[#f3eadc] text-[#5d5248] hover:bg-[#e8dfd3]",
                                !song.lyrics && activeSongId !== song.id && "opacity-60",
                            ].join(" ")}
                            onClick={() => updateSelection(activeFrameId, song.id)}
                        >
                            <span className="mr-1.5 font-['Source_Serif_4',serif] text-xs font-light italic text-inherit opacity-70">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            {song.name}
                        </button>
                    ))}
                </div>
            </header>

            <article className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
                {activeSong && (
                    <>
                        <div className="mb-6 border-b border-[#e0d4c4] pb-5">
                            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#a17145]">
                                {activeFrame.name.replace("Cuadro ", "")}
                            </p>
                            <h1 className="mt-2 font-['Source_Serif_4',serif] text-3xl font-light tracking-[-0.02em] text-[#382e22] sm:text-4xl">
                                {activeSong.name}
                            </h1>
                            {activeSong.key && (
                                <p className="mt-2 text-sm font-['Source_Serif_4',serif] font-light italic text-[#a17145]">
                                    {activeSong.key}
                                </p>
                            )}
                        </div>

                        {activeSong.lyrics ? (
                            <FormattedLyrics
                                text={activeSong.lyrics}
                                showLegend={false}
                                className="text-[16px] leading-8 sm:text-[17px] sm:leading-8"
                            />
                        ) : (
                            <p className="text-base leading-8 italic text-[#a39a8f]">
                                Letra pendiente por agregar.
                            </p>
                        )}
                    </>
                )}
            </article>
        </main>
    )
}

type NavButtonProps = {
    label: string
    disabled: boolean
    onClick: () => void
    children: ReactNode
}

function NavButton({ label, disabled, onClick, children }: NavButtonProps) {
    return (
        <button
            type="button"
            aria-label={label}
            disabled={disabled}
            className={[
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition",
                disabled
                    ? "cursor-not-allowed text-[#c9b8a4]"
                    : "bg-[#f3eadc] text-[#382e22] hover:bg-[#e8dfd3]",
            ].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
