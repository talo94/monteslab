import { TripDataTable } from "./TripDataTable";
import type { ItineraryDay } from "./types";

type ItineraryDayBlockProps = {
  data: ItineraryDay;
};

export function ItineraryDayBlock({ data }: ItineraryDayBlockProps) {
  return (
    <div className="mb-[18px] border-b border-dotted border-[var(--color-trip-line-soft)] pb-[18px] last:mb-0 last:border-0 last:pb-0">
      <h5 className="mb-3 text-md font-bold uppercase tracking-[0.12em] text-ml-ink">
        {data.title}
      </h5>
      <TripDataTable rows={data.rows} />
      <p className="mb-0 mt-2.5 font-['Source_Serif_4',serif] text-sm font-semibold tracking-[0.04em] text-ml-muted">
        {data.subtotal}
      </p>
    </div>
  );
}
