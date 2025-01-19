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
    href: "/appointment",
    icon: CalendarDays,
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
