import {
  Home,
  CalendarDays,
  UserRoundCog,
  MessageSquareMore,
  Settings2,
  CircleUser,
  LogOut,
} from "lucide-react";

export const upperRoute = [
  {
    label: "Home",
    href: "/home",
    icon: Home,
  },
  {
    label: "Appointment",
    href: "/",
    icon: CalendarDays,
  },
  {
    label: "Enquiry",
    href: "/",
    icon: MessageSquareMore,
  },
  {
    label: "Profile",
    href: "/",
    icon: UserRoundCog,
  },
  {
    label: "Setting",
    href: "/",
    icon: Settings2,
  },
];

export const downRoute = [
  {
    label: "Account",
    href: "/account",
    icon: CircleUser,
  },
  {
    label: "Log out",
    href: "/log-out",
    icon: LogOut,
  },
];
