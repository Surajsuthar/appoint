import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AppointmentOption = () => {
    return (
        <Tabs defaultValue="Today" className=" mr-4">
            <TabsList className="md:max-w-[750px] space-x-2 grid grid-cols-5">
                <TabsTrigger value="Today">Today</TabsTrigger>
                <TabsTrigger value="up-coming">Up Coming</TabsTrigger>
                <TabsTrigger value="Confirm">Confirm Appointment</TabsTrigger>
                <TabsTrigger value="Cancelled">Cancelled</TabsTrigger>
                <TabsTrigger value="reschedule">Rescheduled</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}