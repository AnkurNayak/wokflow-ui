import { Handle, Position } from "@xyflow/react";
import { nodeHandleStyle } from "@/lib/nodeHandleStyle";
import StepBadge from "../ui/step-badge";
import IconBox from "../ui/icon-box";
import Chip from "../ui/chip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AzureIcon, IterIcon, IterIconSmall } from "../icons/icons";
import type { IfElseNodeProps } from "@/types/workflow.types";
import { useState } from "react";
import CreateUserNode from "./CreateUserNode";

export default function LoopBranchNode({ data }: IfElseNodeProps) {
  const { activeTab, setActiveTab } = data;
  const branchIsCreate = activeTab === "A";
  const curvePath =
    "M 176 0 C 176 12, 176 20, 176 26 C 176 34, 182 40, 194 40 L 270 40 C 286 40, 294 46, 294 58 L 294 64";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-190 pt-8">
      <Handle
        type="target"
        position={Position.Top}
        style={{
          ...nodeHandleStyle,
          left: "50%",
          top: 26,
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={nodeHandleStyle}
      />

      <svg
        className="pointer-events-none absolute left-1/2 top-0 h-15 w-[90%] -translate-x-1/2 overflow-visible"
        viewBox="0 0 100 60"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="11"
          y="0.5"
          width="78"
          height="48"
          rx="12"
          fill="#f5f3ff"
          stroke="#a5b4fc"
        />
        <rect
          x="5"
          y="12.5"
          width="90"
          height="48"
          rx="12"
          fill="#f5f3ff"
          stroke="#c7d2fe"
        />
      </svg>

      <div className="relative overflow-hidden rounded-[18px] border border-indigo-100 bg-[#f8f7ff] shadow-[0_18px_50px_rgba(119,102,255,0.08)]">
        <div className="flex items-center gap-3 border-b border-indigo-100 bg-[#f5f3ff] px-6 py-4">
          <StepBadge n={3} />
          <IconBox variant="purple">
            <IterIcon />
          </IconBox>
          <span className="text-[15px] font-medium text-slate-500 whitespace-nowrap">
            For each item in
          </span>
          <Chip>2</Chip>
          <Chip>HTTP Response</Chip>
          <Chip>users</Chip>
          <span className="text-[15px] font-medium text-slate-500 whitespace-nowrap">
            run these steps
          </span>
        </div>

        <div className="px-3 pt-8">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-4">
              <StepBadge n={4} />
              <IconBox>
                <AzureIcon />
              </IconBox>
              <span className="text-[15px] font-medium text-slate-700">
                Check user in Azure
              </span>
            </div>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "A" | "B")}
          className="relative px-3 pb-4 pt-12"
        >
          <svg
            className="pointer-events-none absolute left-23 top-0 h-20 w-92 overflow-visible"
            viewBox="0 0 348 96"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={curvePath}
              transform={
                branchIsCreate ? "translate(348 0) scale(-1 1)" : undefined
              }
              className="workflow-flow-path transition-all duration-500"
            />
          </svg>

          <TabsList className="relative z-10 h-auto gap-2 bg-transparent p-0 rounded-none">
            <TabsTrigger
              value="A"
              className="rounded-t-[18px] rounded-b-none border border-b-0 border-[#bfd0ff] bg-[#f7f6ff] px-7 py-3 text-[15px] font-semibold text-slate-500 data-[state=active]:bg-[#eef3ff] data-[state=active]:text-[#4c6fff] data-[state=active]:border-[#5d7cff] data-[state=active]:shadow-none"
            >
              A • User does not exist
            </TabsTrigger>
            <TabsTrigger
              value="B"
              className="rounded-t-[18px] rounded-b-none border border-b-0 border-[#bfd0ff] bg-[#f7f6ff] px-7 py-3 text-[15px] font-semibold text-slate-500 data-[state=active]:bg-[#eef3ff] data-[state=active]:text-[#4c6fff] data-[state=active]:border-[#5d7cff] data-[state=active]:shadow-none"
            >
              B • User exists - skip
            </TabsTrigger>
          </TabsList>

          <div className="-mt-px overflow-hidden rounded-b-[18px] rounded-tr-[18px] border border-[#cdddff] bg-[#eef3ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <div className="flex items-center gap-3 border-b border-[#d8e3ff] bg-[#eef2ff] px-6 py-4 text-[15px] text-slate-700">
              <StepBadge n={5} />
              <span className="font-semibold">If</span>
              <Chip>4</Chip>
              <div className="flex items-center gap-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white">
                  <IterIconSmall />
                </div>
                <span className="text-slate-400">{">"}</span>
                <Chip>id</Chip>
              </div>
              <span>{branchIsCreate ? "is empty" : "exists"}</span>
            </div>

            <TabsContent
              value="A"
              className="m-0 p-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-7 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
                <div className="flex items-center gap-4">
                  <StepBadge n={6} />
                  <IconBox>
                    <AzureIcon />
                  </IconBox>
                  <span className="text-[15px] font-medium text-slate-700">
                    Create user in Azure
                  </span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="B" className="m-0 p-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-7 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
                <div className="flex items-center gap-4">
                  <StepBadge n={6} />
                  <IconBox>
                    <AzureIcon />
                  </IconBox>
                  <span className="text-[15px] font-medium text-slate-700">
                    Skip Azure user creation
                  </span>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <CreateUserNode isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
