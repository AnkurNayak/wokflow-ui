import { Handle, Position } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { nodeHandleStyle } from "@/lib/nodeHandleStyle";
import StepBadge from "../ui/step-badge";
import IconBox from "../ui/icon-box";
import { IterIcon } from "../icons/icons";
import Chip from "../ui/chip";
export default function IteratorNode() {
  return (
    <div className="relative w-115 h-13">
      <Handle type="target" position={Position.Top} style={nodeHandleStyle} />
      <Handle
        type="source"
        position={Position.Bottom}
        style={nodeHandleStyle}
      />

      {/* Depth layers */}
      <div className="absolute top-2 left-2 -right-2 h-13 bg-white border border-slate-200 rounded-[10px] opacity-30" />
      <div className="absolute top-1 left-1 -right-1 h-13 bg-white border border-slate-200 rounded-[10px] opacity-55" />

      {/* Main card */}
      <Card className="relative z-10 h-13 shadow-sm border-slate-200">
        <CardContent className="flex items-center gap-2.5 px-3 h-full py-0">
          <StepBadge n={3} />
          <IconBox variant="purple">
            <IterIcon />
          </IconBox>
          <span className="text-[13px] text-slate-500 whitespace-nowrap">
            For each item in
          </span>
          <Chip purple>2 HTTP Response</Chip>
          <Chip purple>users</Chip>
          <span className="text-[13px] text-slate-500 whitespace-nowrap">
            run these steps
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
