// Reusable section eyebrow: pulsing "live" mint dot + mono label.
// Every section header reuses this (Hero, What We Build, Process, …).

type EyebrowProps = {
  /** The mono label text, e.g. "// WHAT WE BUILD". */
  label: string;
  /** Extra classes on the wrapper (spacing, etc.). */
  className?: string;
};

export default function Eyebrow({ label, className = "" }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-[11px] ${className}`}>
      <span
        aria-hidden
        className="h-[7px] w-[7px] shrink-0 rounded-full bg-mint [animation:livePulse_2.6s_var(--ease-build)_infinite] [box-shadow:0_0_10px_var(--mint)]"
      />
      <span className="font-mono text-[12.5px] tracking-[0.18em] whitespace-nowrap text-mint">
        {label}
      </span>
    </div>
  );
}
