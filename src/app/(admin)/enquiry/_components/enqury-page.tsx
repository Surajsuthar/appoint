"use client"
import { SubOptions } from "@/components/sub-option";
import { Separator } from "@/components/ui/separator";
import { MainRoute } from "@/pages/navRoute";
import { BookPlus, BookX, Calendar1, CalendarCheck, CalendarSync } from "lucide-react";

export const EnquiryPage = () => {
    return (
        <main className="">
            <SubOptions 
            item={enquiryRoute}
            />
        </main>
    )
}

const enquiryRoute: MainRoute[] = [
    {
      label: "Today",
      href: "/enquiry/today",
      icon: Calendar1
    },
    {
      label: "Up Coming",
      href: "/enquiry/up-coming",
      icon: BookPlus
    },
    {
      label: "Confirm Appointment",
      href: "/enquiry/confirm-appointment",
      icon: CalendarCheck
    },
    {
      label: "Cancelled",
      href: "/enquiry/cancelled",
      icon: BookX
    },
    {
      label: "Rescheduled",
      href: "/enquiry/rescheduled",
      icon: CalendarSync
    }
  ]