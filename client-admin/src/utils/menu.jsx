import LayoutMain from "../components/general/layout";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";
import Stalls from "../pages/stalls";
import StallsArchive from "../pages/stalls/archive";
import StallsNewRequests from "../pages/stalls/new-requests";

export const menu = [
  {
    id: "1",
    category: "Stall Management",
    category_id: "stalls",
    links: [
      {
        id: "1.1",
        title: "Dashboard",
        link: "/",
      },
      {
        id: "1.2",
        title: "Stall Listings",
        submenu: [
          {
            id: "1.2.1",
            title: "All Stalls",
            link: "/stalls",
          },
          {
            id: "1.2.2",
            title: "New Stall Requests",
            link: "/stalls/new-requests",
          },
          {
            id: "1.2.3",
            title: "Archive Stalls",
            link: "/stalls/archive",
          },
        ],
      },
      {
        id: "1.3",
        title: "Stall Amenities",
        submenu: [
          {
            id: "1.3.1",
            title: "All Stall Amenities",
            link: "/stall-amenities",
          },
          {
            id: "1.3.2",
            title: "Archive Stall Amenities",
            link: "/stall-amenities/archive",
          },
        ],
      },
      {
        id: "1.4",
        title: "Burger Types",
        submenu: [
          {
            id: "1.4.1",
            title: "All Burger Types",
            link: "/burger-types",
          },
          {
            id: "1.4.2",
            title: "Archive Burger Types",
            link: "/burger-types/archive",
          },
        ],
      },
      {
        id: "1.5",
        title: "Burger Options",
        submenu: [
          {
            id: "1.5.1",
            title: "All Burger Options",
            link: "/burger-options",
          },
          {
            id: "1.5.2",
            title: "Archive Burger Options",
            link: "/burger-options/archive",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    category: "User Access Management",
    category_id: "users",
    links: [
      {
        id: "2.1",
        title: "Users",
        submenu: [
          {
            id: "2.1.1",
            title: "All Users",
            link: "/users",
          },
          {
            id: "2.1.2",
            title: "Archive User",
            link: "/users/archive",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    category: "Configuration",
    category_id: "configurations",
    links: [
      {
        id: "3.1",
        title: "Reports",
        submenu: [
          {
            id: "3.1.1",
            title: "Sales Report",
            link: "/reports/sales",
          },
          {
            id: "3.1.2",
            title: "User Activity Report",
            link: "/reports/user-activity",
          },
          {
            id: "3.1.3",
            title: "Popular Burger Stalls Report",
            link: "/reports/popular-stalls",
          },
          {
            id: "3.1.4",
            title: "Custom Report Builder",
            link: "/reports/custom-builder",
          },
        ],
      },
      {
        id: "3.2",
        title: "Settings",
        submenu: [
          {
            id: "3.2.1",
            title: "General Settings",
            link: "/settings/general",
          },
          {
            id: "3.2.2",
            title: "Dashboard Configuration",
            link: "/settings/dashboard",
          },
          {
            id: "3.2.3",
            title: "Email Templates",
            link: "/settings/email-templates",
          },
          {
            id: "3.2.4",
            title: "Notifications",
            link: "/settings/notifications",
          },
        ],
      },
      {
        id: "3.3",
        title: "Help/Support",
        submenu: [
          {
            id: "3.3.1",
            title: "Documentation",
            link: "/help/documentation",
          },
          {
            id: "3.3.2",
            title: "FAQs",
            link: "/help/faqs",
          },
          {
            id: "3.3.3",
            title: "Contact Support",
            link: "/help/contact",
          },
        ],
      },
    ],
  },
];

export const browserRouter = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/stalls",
        element: <Stalls />,
      },
      {
        path: "/stalls/new-requests",
        element: <StallsNewRequests />,
      },
      {
        path: "/stalls/archive",
        element: <StallsArchive />,
      },
    ],
  },
  { path: "/signin", element: <Signin /> },
];
