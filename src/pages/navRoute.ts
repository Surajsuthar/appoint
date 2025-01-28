import {
  Home,
  CalendarDays,
  UserRoundCog,
  MessageSquareMore,
  Settings2,
  CircleUser,
  LogOut,
  LucideIcon,
  BookPlus,
  BookX,
  CalendarSync,
  CalendarCheck,
  Calendar1,
} from "lucide-react";

export interface MainRoute {
  label: string,
  href: string,
  icon: LucideIcon
}

export interface Route extends MainRoute {
  children?: MainRoute[]
}


export const upperRoute: Route[]  = [
  {
    label: "Home",
    href: "/home",
    icon: Home,
  },
  {
    label: "Appointment",
    href: "/appointment",
    icon: CalendarDays,
    children: [
      {
        label: "Today",
        href: "/today",
        icon: Calendar1
      },
      {
        label: "Up Coming",
        href: "/up-coming",
        icon: BookPlus
      },
      {
        label: "Confirm Appointment",
        href: "/confirm-appointment",
        icon: CalendarCheck
      },
      {
        label: "Cancelled",
        href: "/cancelled",
        icon: BookX
      },
      {
        label: "Rescheduled",
        href: "/rescheduled",
        icon: CalendarSync
      }
    ]
  },
  {
    label: "Enquiry",
    href: "/enquiry",
    icon: MessageSquareMore,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRoundCog,
  },
  {
    label: "Setting",
    href: "/setting",
    icon: Settings2,
  },
  {
    label: "Account",
    href: "/account",
    icon: CircleUser,
  },
];

export const downRoute = [
  {
    label: "Log out",
    href: "/log-out",
    icon: LogOut,
  },
];
