import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const OperationalTab = () => {
  return (
    <Card className="w-[700px] mt-6">
      <CardHeader>
        <CardTitle>Operational Details</CardTitle>
        <CardDescription>
          <b>Operational Details:</b> Information about your business hours,
          modes of operation, and payment methods.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2"></CardContent>
      <CardFooter>
        <Button>Update</Button>
      </CardFooter>
    </Card>
  );
};
