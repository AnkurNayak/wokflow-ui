import type { StepBadgeProps } from "@/types/workflow.types";

const StepBadge = ({ n }: StepBadgeProps) => (
  <span className="flex items-center justify-center min-w-5.5 h-5.5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-semibold select-none">
    {n}
  </span>
);

export default StepBadge;
