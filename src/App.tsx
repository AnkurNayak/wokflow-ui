import {
  ReactFlow,
  Background,
  Controls,
  addEdge,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type Connection,
  type NodeChange,
  type EdgeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Badge } from "@/components/ui/badge";
import {
  getEdges,
  getNodes,
  nodeTypes,
  solidEdge,
} from "./components/app-components/NodeConfig";
import { useEffect, useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(
    getNodes(activeTab, setActiveTab),
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(getEdges("A"));

  useEffect(() => {
    setNodes((currentNodes) =>
      currentNodes.map((node) =>
        node.id === "3"
          ? {
              ...node,
              data: { activeTab, setActiveTab },
            }
          : node,
      ),
    );
  }, [activeTab, setNodes]);

  const onConnect = (connection: Connection) => {
    setEdges((currentEdges) =>
      addEdge(
        {
          ...connection,
          type: "smoothstep",
          style: solidEdge,
        },
        currentEdges,
      ),
    );
  };

  return (
    <div className="relative w-screen h-screen bg-slate-100 font-sans">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-md">
        <div className="w-8.5 h-8.5 rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 flex items-center justify-center shrink-0">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.3"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div>
          <p className="text-[13.5px] font-bold text-slate-800 leading-none">
            Workday → Azure Sync
          </p>
          <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
            Automation workflow
          </p>
        </div>
        <Badge className="ml-4 bg-red-100 text-red-600 border-0 text-[11px] font-semibold rounded-full px-2.5">
          ● Failed
        </Badge>
      </div>

      {/* ReactFlow canvas */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange as (changes: NodeChange[]) => void}
        onEdgesChange={onEdgesChange as (changes: EdgeChange[]) => void}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.28 }}
        connectionMode={ConnectionMode.Loose}
        nodesDraggable
        nodesConnectable
        edgesReconnectable
        elementsSelectable={false}
        panOnScroll
        zoomOnScroll
        className="bg-slate-100"
      >
        <Background color="#cbd5e1" gap={20} size={1} />
        <Controls className="bottom-5 left-5" />
      </ReactFlow>

      {/* ── Footer hint ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 text-[11.5px] text-slate-400 bg-white/90 px-4 py-1.5 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
        Click{" "}
        <strong className="text-slate-500 font-semibold">
          Get Workday users
        </strong>{" "}
        to configure · Drag to rearrange
      </div>
    </div>
  );
}
