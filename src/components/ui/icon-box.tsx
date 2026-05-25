import type { IconBoxProps, IconBoxVariant } from "@/types/workflow.types";

const IconBox = ({ variant = "default", children }: IconBoxProps) => {
  const bg: Record<IconBoxVariant, string> = {
    default: "bg-slate-100",
    purple: "bg-violet-100",
    blue: "bg-blue-100",
    orange: "bg-orange-50",
  };
  return (
    <div
      className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center shrink-0 ${bg[variant]}`}
    >
      {children}
    </div>
  );
};

export default IconBox;
