import type { ChipProps } from "@/types/workflow.types";

const Chip = ({ purple, children }: ChipProps) => (
  <span
    className={`inline-flex items-center rounded-[5px] px-1.75 py-0.5 text-[11.5px] font-medium border select-none
    ${
      purple
        ? "bg-violet-100 border-violet-300 text-violet-700"
        : "bg-slate-100 border-slate-200 text-slate-700"
    }`}
  >
    {children}
  </span>
);

export default Chip;
