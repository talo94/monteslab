type TripSectionTitleProps = {
  id?: string;
  children: string;
  className?: string;
};

export function TripSectionTitle({ id, children, className = "" }: TripSectionTitleProps) {
  return (
    <h3
      id={id}
      className={[
        "mb-4 text-sm font-medium uppercase tracking-[0.12em] text-ml-muted",
        className,
      ].join(" ")}
    >
      {children}
    </h3>
  );
}
