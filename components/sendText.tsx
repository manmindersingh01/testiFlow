import React from "react";
import { Button } from "./ui/button";
import { PenIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import feedbackAction from "@/actions/feedbackAction";

const TextButton = ({ testId }: { testId: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          {" "}
          Write text <PenIcon />{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Write text testimonials to </DialogTitle>
        </DialogHeader>
        <form action={feedbackAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <input type="text" name="testimonialId" hidden value={testId} />
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                name="name"
                id="name"
                placeholder="Manminder"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Feedback</Label>
              <Textarea name="content" className="col-span-3" />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TextButton;
("username");
