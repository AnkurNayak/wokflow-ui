import { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { nodeHandleStyle } from "@/lib/nodeHandleStyle";
import StepBadge from "../ui/step-badge";
import IconBox from "../ui/icon-box";
import { ArrowRightIcon, DotsVIcon, WorkdayIcon } from "../icons/icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ApiNode() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("https://api.workday.com/v1/users");
  const [body, setBody] = useState<string>(
    '{\n  "count": 100,\n  "offset": 0\n}',
  );

  return (
    <div className="relative w-[760px]">
      <Handle type="target" position={Position.Top} style={nodeHandleStyle} />
      <Handle
        type="source"
        position={Position.Bottom}
        style={nodeHandleStyle}
      />

      {/* Error badge*/}
      <div className="absolute top-1/2 -translate-y-1/2 -left-19 flex items-center gap-1.5 bg-red-500 text-white text-[11.5px] font-semibold px-3 py-1 rounded-[7px] z-10 whitespace-nowrap">
        Error <ArrowRightIcon />
      </div>

      {/* Tooltip */}
      <div className="absolute -top-9 left-0 z-20 bg-slate-800 text-white text-[11px] font-medium px-2.5 py-1.25 rounded-md whitespace-nowrap">
        Automation failed
        <div className="absolute -bottom-1.25 left-3.5 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-slate-800" />
      </div>

      <Card
        className="border-red-300 bg-red-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <CardContent className="flex items-center gap-3 p-3">
          <StepBadge n={2} />
          <IconBox variant="orange">
            <WorkdayIcon />
          </IconBox>
          <span className="text-[13.5px] font-medium text-slate-800 flex-1">
            Get Workday users
          </span>
          <DotsVIcon />
        </CardContent>
      </Card>

      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <form>
            <DialogContent className="sm:max-w-sm bg-white border-gray-300">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <CardContent
                className="flex flex-col gap-3 p-3"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="space-y-1.5">
                  <Label className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
                    URL
                  </Label>
                  <Input
                    value={url}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUrl(e.target.value)
                    }
                    className="h-8 text-[12.5px] bg-slate-50 border-slate-200 focus-visible:ring-violet-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
                    Body
                  </Label>
                  <Textarea
                    value={body}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setBody(e.target.value)
                    }
                    rows={3}
                    className="text-[12.5px] font-mono bg-slate-50 border-slate-200 focus-visible:ring-violet-300 resize-none"
                  />
                </div>
              </CardContent>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      )}
    </div>
  );
}
