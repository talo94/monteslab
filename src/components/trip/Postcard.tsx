import { citySurfaceClass } from "./gradients";
import type { Postcard as PostcardType } from "./types";

type PostcardProps = {
  data: PostcardType;
};

export function Postcard({ data }: PostcardProps) {
  const surface = citySurfaceClass[data.gradient];

  return (
    <article
      className={[
        "relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[22px] p-[18px] text-white",
        surface,
        data.wide ? "md:col-span-2" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative z-[1]">
        <div className="text-xs font-medium uppercase tracking-[0.08em] opacity-90">
          {data.cityLabel}
        </div>
        <h3 className="mb-0 mt-2 font-['Source_Serif_4',serif] text-3xl font-light leading-none">
          {data.title}
        </h3>
        <p className="mb-0 mt-1.5 text-[13px] leading-snug opacity-[0.88]">
          {data.descriptionParts.map((part, i) => (
            <span key={i}>
              {part.pendingLink ? (
                <span
                  className="cursor-default border-b border-dotted border-white/50"
                  title="Enlace disponible pronto"
                >
                  {part.text}
                </span>
              ) : (
                part.text
              )}
            </span>
          ))}
        </p>
        <p className="m-0 mt-4 text-sm text-white/85">Ver guía · próximamente</p>
      </div>
    </article>
  );
}
