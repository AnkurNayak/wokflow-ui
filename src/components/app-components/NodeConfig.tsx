import React from "react";
import { type NodeTypes, type Node, type Edge } from "@xyflow/react";
import StartNode from "./StartNode";
import ApiNode from "./ApiNode";
import LoopBranchNode from "./LoopBranchNode";

const CX = 100;

export const solidEdge: React.CSSProperties = {
  stroke: "#c7d2fe",
  strokeWidth: 2,
};

export function getNodes(
  activeTab: "A" | "B",
  setActiveTab: (v: "A" | "B") => void,
): Node[] {
  return [
    { id: "1", type: "start", position: { x: CX, y: 0 }, data: {} },
    { id: "2", type: "api", position: { x: CX, y: 132 }, data: {} },
    {
      id: "3",
      type: "loopBranch",
      position: { x: CX, y: 346 },
      data: { activeTab, setActiveTab },
    },
  ];
}

export function getEdges(_activeTab: "A" | "B"): Edge[] {
  return [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      style: solidEdge,
      type: "smoothstep",
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      style: solidEdge,
      type: "smoothstep",
    },
  ];
}

export const nodeTypes: NodeTypes = {
  start: () => <StartNode />,
  api: () => <ApiNode />,
  loopBranch: (props) => <LoopBranchNode data={props.data} />,
};
