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

export const AddressInfoTab = () => {
  return (
    <Card className="w-[700px] mt-6">
      <CardHeader>
        <CardTitle>Address</CardTitle>
        <CardDescription>
          <b>Address Details:</b> Detailed location information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2"></CardContent>
      <CardFooter>
        <Button>Update</Button>
      </CardFooter>
    </Card>
  );
};
