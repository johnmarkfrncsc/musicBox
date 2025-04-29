import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { BellRing, Car } from "lucide-react";
import React from "react";

const Content = () => {
  return (
    <div className="bg-black w-full h-screen p-2">
      <div className="flex gap-2 p-5">
        <Badge className="w-20 p-2">All</Badge>
        <Badge className="w-20">Music</Badge>
        <Badge className="w-20">Podcast</Badge>
      </div>

      <div className="flex flex-wrap gap-4 p-5">
        
        <Card className="w-40 h-20 p-0 ">
        <img
            src="https://imageio.forbes.com/specials-images/imageserve/6691410ebf58e316b3bd024e/MTV-EMA-s-2013---Eminem-Dressing-Room-Exclusive/0x0.jpg?format=jpg&crop=2885,2163,x0,y34,safe&width=1440"
            alt=""
            className="w-20 h-30 "
          />
          Liked Songs
        </Card>
        <Card className="w-40 h-20">Lola Amour</Card>
        <Card className="w-40 h-20">Eminem</Card>
        <Card className="w-40 h-20">Hev Abi</Card>
        <Card className="w-40 h-20">KALYE</Card>
        <Card className="w-40 h-20">Yuji</Card>
      </div>

      {/* <div className="flex justify-evenly p-2">
        <Button className="w-3xs p-10">Button</Button>
        <Button className="w-3xs p-10">Button</Button>
        <Button className="w-3xs p-10">Button</Button>

        <div className=" flex items-center rounded-md border p-4">
          <img
            src="https://www.billboard.com/wp-content/uploads/2024/06/Eminem-press-credit-Travis-Shinn-2024-billboard-1548.jpg?w=942&h=623&crop=1"
            alt="Bell"
            className="w-20 h-20"
          />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
      </div> */}

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </div>
  );
};

export default Content;
