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

export const ContactInfoTab = () => {
  return (
    <Card className="w-[700px] mt-6">
      <CardHeader>
        <CardTitle>Contact Details</CardTitle>
        <CardDescription>
          <b>Contact Information:</b> Essential ways to reach your business,
          including phone, email, and social media details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2"></CardContent>
      <CardFooter>
        <Button>Update</Button>
      </CardFooter>
    </Card>
  );
};
