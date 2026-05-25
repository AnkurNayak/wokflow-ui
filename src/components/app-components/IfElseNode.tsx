import { Handle, Position } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { nodeHandleStyle } from "@/lib/nodeHandleStyle";
import StepBadge from "../ui/step-badge";
import IconBox from "../ui/icon-box";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Chip from "../ui/chip";
import { AzureIcon, IterIconSmall } from "../icons/icons";

export default function IfElseNode() {
  return (
    <div className="w-105">
      <Handle type="target" position={Position.Top} style={nodeHandleStyle} />

      <Tabs defaultValue="A" className="w-full">
        <TabsList className="h-auto p-0 bg-transparent gap-1 rounded-none mb-0">
          <TabsTrigger
            value="A"
            className="rounded-t-lg rounded-b-none border border-b-0 border-slate-200 bg-slate-50 text-slate-500 text-xs font-medium px-3 py-1.5
              data-[state=active]:bg-violet-100 data-[state=active]:text-violet-700 data-[state=active]:border-violet-300 data-[state=active]:shadow-none"
          >
            A • User does not exist
          </TabsTrigger>
          <TabsTrigger
            value="B"
            className="rounded-t-lg rounded-b-none border border-b-0 border-slate-200 bg-slate-50 text-slate-500 text-xs font-medium px-3 py-1.5
              data-[state=active]:bg-violet-100 data-[state=active]:text-violet-700 data-[state=active]:border-violet-300 data-[state=active]:shadow-none"
          >
            B • User exists - skip
          </TabsTrigger>
        </TabsList>

        {/* Shared body wrapper */}
        <div className="border border-slate-200 rounded-b-lg rounded-tr-lg bg-slate-50/80 p-2.5">
          {/* IF condition row */}
          <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2 flex-wrap mb-2.5">
            <span className="text-indigo-500 font-bold text-[12.5px]">5</span>
            <span className="text-indigo-500 font-bold text-[12.5px]">If</span>
            <Chip>4</Chip>
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-[3px] bg-violet-100 flex items-center justify-center">
                <IterIconSmall />
              </div>
              <span className="text-slate-300 text-sm">›</span>
              <Chip purple>id</Chip>
            </div>
            <span className="text-[12.5px] text-slate-500">is empty</span>
          </div>

          <TabsContent value="A" className="mt-0">
            {/* Dashed connector */}
            <div className="flex justify-center mb-1">
              <div className="w-px h-6 border-l-2 border-dashed border-indigo-300" />
            </div>
            {/* Create user card */}
            <Card className="border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <CardContent className="flex items-center gap-3 p-3">
                <StepBadge n={6} />
                <IconBox variant="blue">
                  <AzureIcon />
                </IconBox>
                <span className="text-[13.5px] font-medium text-slate-800 flex-1">
                  Create user in Azure
                </span>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="B" className="mt-0">
            <p className="text-center text-[12px] text-slate-400 py-2">
              No actions — user will be skipped
            </p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
