import { Handle, Position } from "@xyflow/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { nodeHandleStyle } from "@/lib/nodeHandleStyle";
import StepBadge from "../ui/step-badge";
import IconBox from "../ui/icon-box";
import { PlayIcon } from "../icons/icons";

export default function StartNode() {
  return (
    <Card className="w-190 shadow-sm border-slate-200 hover:shadow-md transition-shadow bg-white">
      <Handle
        type="source"
        position={Position.Bottom}
        style={nodeHandleStyle}
      />
      <CardContent className="flex items-center gap-3 p-3">
        <StepBadge n={1} />
        <IconBox variant="blue">
          <PlayIcon />
        </IconBox>
        <span className="text-[13.5px] font-medium text-slate-800 flex-1">
          SAJAN SAHU started test run
        </span>
        <Badge
          variant="secondary"
          className="text-[11px] font-medium text-slate-500 bg-slate-100 border-0"
        >
          Always Free
        </Badge>
        <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 flex items-center justify-center">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
