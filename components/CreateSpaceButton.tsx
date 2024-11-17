// components/CreateSpaceButton.tsx
"use server";
import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";
import { redirect } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useEffect, useState } from "react";
import { auth } from "@/lib/auth";
import { getDate } from "date-fns";
import getUser from "@/hooks/getUser";
import createSpaceAction from "@/actions/createSpaceAction";
const CreateSpaceButton = ({ data }: any) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-primary p-2 text-sm rounded-md text-black px-4">
        Create new space
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set details about your space</DialogTitle>
          <div>
            <form action={createSpaceAction} className="flex flex-col gap-4">
              <div className=" grid p-2 gap-2">
                <Label className="pl-2">Name</Label>
                <Input
                  name="name"
                  required
                  placeholder="Enter name of your space"
                />
              </div>
              <input type="text" name="id" hidden value={data.user.id} />
              <div className=" grid p-2 gap-2">
                <Label className="pl-2">Description</Label>
                <Textarea
                  name="description"
                  required
                  placeholder="Enter name of your space"
                />
              </div>
              <Button className="w-full">Create new space</Button>
            </form>
          </div>

          <DialogDescription>
            By this this you can create your space and then add testimonials in
            it..
          </DialogDescription>
          <DialogFooter></DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSpaceButton;
