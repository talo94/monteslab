import { useMemo, useState, type ReactNode } from "react";
import {
    giraInfo,
    instruments,
    itinerary,
    musicFrames,
    musicians,
    type SongDetail,
} from "./data";

export default function GiraGrecia2026() {
    const [activeFrameId, setActiveFrameId] = useState(musicFrames[0].id);

    const activeFrame = useMemo(
        () => musicFrames.find((frame) => frame.id === activeFrameId),
        [activeFrameId],
    );

    return (
        <main className="min-h-screen bg-[#fbf7ef] px-5 py-10 text-[#382e22] sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-5xl py-14 text-center sm:py-20">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#a17145]">
                    Gira internacional
                </p>

                <h1 className="mx-auto max-w-4xl  text-4xl font-normal leading-tight tracking-[0.025em] sm:text-5xl lg:text-6xl">
                    {giraInfo.title}
                </h1>

                <p className="mx-auto max-w-2xl font-['Source_Serif_4',serif] text-xl font-light leading-8 tracking-[0.02em] text-[#968575] sm:text-2xl">
                    {giraInfo.subtitle} · {giraInfo.dates}
                </p>

                <div className="mx-auto mt-12 grid max-w-3xl gap-8 text-center sm:grid-cols-3">
                    <HeroMeta label="Destino" value={giraInfo.location} />
                    <HeroMeta label="Llegada" value="Atenas · 24 junio" />
                    <HeroMeta label="Duración" value="15 días" />
                </div>
            </section>

            <PageSection
                eyebrow="Itinerario"
                title="Ruta de la gira"
                description="Recorrido confirmado por Grecia entre el 24 de junio y el 8 de julio de 2026."
            >
                <div className="mx-auto grid max-w-4xl gap-5">
                    {itinerary.map((item) => {

                        return (
                            <article
                                key={`${item.city}-${item.date}`}
                                className={[
                                    "grid gap-4 sm:grid-cols-[72px_1fr]",
                                    item.type === "arrival"
                                        ? "rounded-none border-b border-[#c9b8a4] bg-transparent px-0 py-5 sm:py-6"
                                        : item.type === "departure"
                                            ? "rounded-none border-t border-[#c9b8a4] bg-transparent px-0 py-5 sm:py-6"
                                            : "rounded-[2rem] bg-[#f3eadc] p-5 sm:p-6",
                                ].join(" ")}
                            >
                                <div
                                    className={[
                                        "flex flex-col items-center text-center", "justify-center",
                                    ].join(" ")}
                                >
                                    <strong className="text-2xl font-light font-['Source_Serif_4',serif] leading-none">
                                        {item.day}
                                    </strong>

                                    <span className="text-[0.65rem] font-['Source_Serif_4',serif] font-light uppercase tracking-[0.14em] text-[#a17145]">
                                        {item.month}
                                    </span>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                                        <h3 className="text-xl font-medium">{item.city}</h3>

                                        <span className="text-base font-['Source_Serif_4',serif] font-light italic text-[#a17145]">
                                            {item.duration}
                                        </span>
                                    </div>

                                    <p
                                        className="mt-1 font-['Source_Serif_4',serif] text-sm font-light italic text-[#7b6d60]"
                                    >
                                        {item.date}
                                    </p>

                                    <p className="mt-3 leading-7 text-[#5d5248]">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </PageSection>

            <PageSection
                eyebrow="Montaje musical"
                title="Cuadros confirmados"
                description="Cuatro cuadros musicales confirmados para la gira, con repertorio y asignación de instrumentos por canción."
            >
                <div className="grid gap-6 sm:grid-cols-2">
                    {musicFrames.map((frame) => (
                        <article
                            key={frame.id}
                            className="rounded-[2rem] bg-[#f3eadc] p-6"
                        >
                            <p className="text-base font-['Source_Serif_4',serif] font-light italic text-[#a17145]">
                                {frame.songs.length} canciones
                            </p>

                            <h3 className="mt-3 text-2xl font-medium">{frame.name}</h3>

                            <p className="mt-2 text-sm leading-6 text-[#7b6d60]">
                                {frame.shortDescription}
                            </p>

                            <ol className="mt-6 list-decimal space-y-2 pl-5 font-['Source_Serif_4',serif] font-light text-[#5d5248]">
                                {frame.songs.map((song) => (
                                    <li key={song.id}>
                                        {song.name}
                                        {song.key && (
                                            <span className="text-[#a17145]"> · {song.key}</span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </article>
                    ))}
                </div>
            </PageSection>

            <PageSection
                eyebrow="Detalle por cuadro"
                title="Información artística y técnica"
                description="Selecciona un cuadro para ver la asignación de instrumentos y músicos en cada canción."
            >
                <div className="grid gap-7">
                    <div
                        className="grid w-full grid-cols-2 gap-2 rounded-2xl bg-[#f3eadc] p-2 sm:grid-cols-4"
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
                                    "w-full rounded-xl px-3 py-3 text-center text-sm font-medium transition sm:rounded-full sm:px-4",
                                    activeFrameId === frame.id
                                        ? "bg-[#fbf7ef] text-[#382e22] shadow-sm"
                                        : "text-[#7b6d60] hover:bg-[#fbf7ef]/60",
                                ].join(" ")}
                                onClick={() => setActiveFrameId(frame.id)}
                            >
                                {frame.name.replace("Cuadro ", "")}
                            </button>
                        ))}
                    </div>

                    {activeFrame && (
                        <article className="rounded-[2rem] bg-[#f3eadc] p-6 sm:p-8">
                            <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#e0d4c4] pb-8 sm:flex-row sm:items-start">
                                <div>
                                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[#a17145]">
                                        Cuadro musical
                                    </p>

                                    <h3 className="text-3xl font-['Source_Serif_4',serif] font-light tracking-[-0.03em] sm:text-4xl">
                                        {activeFrame.name}
                                    </h3>

                                    <p className="mt-3 max-w-2xl text-[#6b5f54]">
                                        {activeFrame.shortDescription}
                                    </p>
                                </div>

                                <span className="shrink-0 text-base font-['Source_Serif_4',serif] font-light italic text-[#a17145]">
                                    {activeFrame.songs.length} canciones
                                </span>
                            </div>

                            <div className="grid gap-5">
                                {activeFrame.songs.map((song, index) => (
                                    <SongCard key={song.id} index={index + 1} song={song} />
                                ))}
                            </div>

                            <div className="mt-8 grid gap-4 border-t border-[#e0d4c4] pt-8 md:grid-cols-3">
                                <DetailBlock title="Duración máxima">
                                    {activeFrame.maxDuration}
                                </DetailBlock>

                                <DetailBlock title="Uniforme">{activeFrame.uniform}</DetailBlock>

                                <DetailBlock title="Rider técnico">
                                    {activeFrame.rider}
                                </DetailBlock>
                            </div>
                        </article>
                    )}
                </div>
            </PageSection>

            <section className="mx-auto grid w-full max-w-5xl gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <SectionHeader
                        eyebrow="Inventario musical"
                        title="Instrumentos"
                        description="Lista inicial de instrumentos. Se puede ampliar cuando esté cerrado el montaje definitivo."
                        align="left"
                    />

                    <div className="flex flex-wrap gap-3">
                        {instruments.map((instrument) => (
                            <span
                                key={instrument}
                                className="rounded-full bg-[#f3eadc] px-4 py-2 text-sm font-medium text-[#5d5248]"
                            >
                                {instrument}
                            </span>
                        ))}

                        <span className="rounded-full bg-[#f3eadc] px-4 py-2 text-sm font-medium italic text-[#a17145]">
                            + pendientes por agregar
                        </span>
                    </div>
                </div>

                <div>
                    <SectionHeader
                        eyebrow="Equipo musical"
                        title="Músicos"
                        description="Listado inicial de músicos confirmados para la gira."
                        align="left"
                    />

                    <div className="grid gap-3">
                        {musicians.map((musician) => (
                            <article
                                key={musician.name}
                                className="flex items-center gap-4 rounded-[2rem] bg-[#f3eadc] p-4"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fbf7ef] text-sm font-['Source_Serif_4',serif] font-light italic text-[#a17145]">
                                    {musician.initials}
                                </div>

                                <div>
                                    <h3 className="font-medium">{musician.name}</h3>
                                    <p className="mt-1 text-sm text-[#7b6d60]">{musician.instruments}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

type PageSectionProps = {
    eyebrow: string;
    title: string;
    description: string;
    children: ReactNode;
};

function PageSection({ eyebrow, title, description, children }: PageSectionProps) {
    return (
        <section className="mx-auto w-full max-w-5xl pb-14 sm:pb-16">
            <SectionHeader eyebrow={eyebrow} title={title} description={description} />
            {children}
        </section>
    );
}

type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    description: string;
    align?: "center" | "left";
};

function SectionHeader({
    eyebrow,
    title,
    description,
    align = "center",
}: SectionHeaderProps) {
    return (
        <div
            className={[
                "mb-9 max-w-2xl",
                align === "center" ? "mx-auto text-center" : "text-left",
            ].join(" ")}
        >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#a17145]">
                {eyebrow}
            </p>

            <h2 className=" text-3xl font-normal leading-tight tracking-[0.02em] text-[#382e22] sm:text-4xl">
                {title}
            </h2>

            <p className="leading-7 text-[#6b5f54]">{description}</p>
        </div>
    );
}

type DetailBlockProps = {
    title: string;
    children: ReactNode;
    className?: string;
};

function DetailBlock({ title, children, className = "" }: DetailBlockProps) {
    const isPendientePorDefinir =
        (typeof children === "string" || typeof children === "number") &&
        /pendiente\s+por\s+definir|por\s+definir/i.test(String(children).trim());

    return (
        <div
            className={[
                "rounded-[1.5rem] bg-[#fbf7ef] p-5 text-[#5d5248]",
                className,
            ].join(" ")}
        >
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#a17145]">
                {title}
            </h4>

            <div className={["leading-7", isPendientePorDefinir && "italic"].filter(Boolean).join(" ")}>
                {children}
            </div>
        </div>
    );
}

type SongCardProps = {
    index: number
    song: SongDetail
}

function SongCard({ index, song }: SongCardProps) {
    return (
        <div className="overflow-hidden rounded-[1.5rem] bg-[#fbf7ef]">
            <div className="flex flex-col gap-2 border-b border-[#e8dfd3] px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-6">
                <div className="flex items-baseline gap-3">
                    <span className="font-['Source_Serif_4',serif] text-lg font-light italic text-[#a17145]">
                        {String(index).padStart(2, "0")}
                    </span>
                    <h4 className="text-xl font-medium text-[#382e22]">{song.name}</h4>
                </div>

                {song.key && (
                    <span className="pl-9 text-sm font-['Source_Serif_4',serif] font-light italic text-[#7b6d60] sm:pl-0">
                        {song.key}
                    </span>
                )}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-sm">
                    <thead>
                        <tr className="border-b border-[#e8dfd3] text-xs font-medium uppercase tracking-[0.14em] text-[#a17145]">
                            <th className="px-5 py-3 font-medium sm:px-6">Instrumento / rol</th>
                            <th className="px-5 py-3 font-medium sm:px-6">Músico</th>
                        </tr>
                    </thead>
                    <tbody>
                        {song.assignments.map((assignment, assignmentIndex) => {
                            const isPorDefinir = /por\s+definir/i.test(assignment.musician);

                            return (
                                <tr
                                    key={`${assignment.role}-${assignmentIndex}`}
                                    className="border-b border-[#f0e8dc] last:border-b-0"
                                >
                                    <td className="px-5 py-3 text-[#5d5248] sm:px-6">
                                        {assignment.role}
                                    </td>
                                    <td
                                        className={[
                                            "px-5 py-3 font-medium sm:px-6",
                                            isPorDefinir
                                                ? "font-['Source_Serif_4',serif] font-light italic text-[#a39a8f]"
                                                : "text-[#382e22]",
                                        ].join(" ")}
                                    >
                                        {assignment.musician}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

type HeroMetaProps = {
    label: string;
    value: string;
};

function HeroMeta({ label, value }: HeroMetaProps) {
    return (
        <div>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-[#a17145]">
                {label}
            </span>

            <strong className="mt-2 block text-xl font-light font-['Source_Serif_4',serif] tracking-[0.02em] text-[#382e22]">
                {value}
            </strong>
        </div>
    );
}
