import { Handle, Position } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { nodeHandleStyle } from "@/lib/nodeHandleStyle";
import StepBadge from "../ui/step-badge";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CreateUserNode({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px] border-0 bg-white shadow-none p-0">
        <DialogHeader className="hidden">
          <DialogTitle>Card Dialog</DialogTitle>
        </DialogHeader>

        <Card className="w-190 shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <Handle
            type="target"
            position={Position.Top}
            style={nodeHandleStyle}
          />
          <Handle
            type="source"
            position={Position.Bottom}
            style={nodeHandleStyle}
          />

          <CardContent className="flex items-center gap-3 p-3">
            <StepBadge n={4} />

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-4">
                <div>
                  <Label>First Name</Label>

                  <Input
                    value={inputValue["firstName"]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div>
                  <Label>First Name</Label>

                  <Input
                    value={inputValue["firstName"]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div>
                  <Label>First Name</Label>

                  <Input
                    value={inputValue["firstName"]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>

              <div>two</div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
