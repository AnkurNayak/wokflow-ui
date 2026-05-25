import { Handle, Position } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { nodeHandleStyle } from "@/lib/nodeHandleStyle";
import StepBadge from "../ui/step-badge";
import IconBox from "../ui/icon-box";
import { AzureIcon } from "../icons/icons";

export default function CheckAzureNode() {
  return (
    <Card className="w-105 shadow-sm border-slate-200 hover:shadow-md transition-shadow">
      <Handle type="target" position={Position.Top} style={nodeHandleStyle} />
      <Handle
        type="source"
        position={Position.Bottom}
        style={nodeHandleStyle}
      />
      <CardContent className="flex items-center gap-3 p-3">
        <StepBadge n={4} />
        <IconBox variant="blue">
          <AzureIcon />
        </IconBox>
        <span className="text-[13.5px] font-medium text-slate-800 flex-1">
          Check user in Azure
        </span>
      </CardContent>
    </Card>
  );
}
