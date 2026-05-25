export interface StepBadgeProps {
  n: number;
}

export type IconBoxVariant = "default" | "purple" | "blue" | "orange";

export interface IconBoxProps {
  variant?: IconBoxVariant;
  children: React.ReactNode;
}

export interface ChipProps {
  purple?: boolean;
  children: React.ReactNode;
}

export interface IfElseNodeProps {
  data: {
    activeTab: "A" | "B";
    setActiveTab: (v: "A" | "B") => void;
  };
}
