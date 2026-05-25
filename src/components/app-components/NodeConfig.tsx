import { type NodeTypes, type Node, type Edge } from "@xyflow/react";
import StartNode from "./StartNode";
import IteratorNode from "./IteratorNode";
import CheckAzureNode from "./CheckAzureNode";
import IfElseNode from "./IfElseNode";
import ApiNode from "./ApiNode";

const CX = 100;

export const initialNodes: Node[] = [
  { id: "1", type: "start", position: { x: CX, y: 0 }, data: {} },
  { id: "2", type: "api", position: { x: CX, y: 108 }, data: {} },
  { id: "3", type: "iterator", position: { x: CX, y: 236 }, data: {} },
  { id: "4", type: "checkAzure", position: { x: CX + 40, y: 340 }, data: {} },
  { id: "5", type: "ifElse", position: { x: CX + 40, y: 448 }, data: {} },
];

export const solidEdge: React.CSSProperties = {
  stroke: "#c7d2fe",
  strokeWidth: 2,
};
export const dashedEdge: React.CSSProperties = {
  stroke: "#a5b4fc",
  strokeWidth: 2,
  strokeDasharray: "5 4",
};

export const initialEdges: Edge[] = [
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
  {
    id: "e3-4",
    source: "3",
    target: "4",
    style: dashedEdge,
    type: "smoothstep",
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    style: dashedEdge,
    type: "smoothstep",
  },
];

export const nodeTypes: NodeTypes = {
  start: () => <StartNode />,
  api: () => <ApiNode />,
  iterator: () => <IteratorNode />,
  checkAzure: () => <CheckAzureNode />,
  ifElse: () => <IfElseNode />,
};
