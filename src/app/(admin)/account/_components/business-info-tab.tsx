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

export const BusinessInfoTab = () => {
  return (
    <Card className="w-[700px] mt-6">
      <CardHeader>
        <CardTitle>Business Details</CardTitle>
        <CardDescription>
          <b>Business Information:</b> Key details about your business identity,
          type, legal credentials, and industry specifics.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form>
          
        </form>
      </CardContent>
      <CardFooter>
        <Button>Update</Button>
      </CardFooter>
    </Card>
  );
};
