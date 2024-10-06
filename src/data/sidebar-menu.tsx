import { FaRobot } from "react-icons/fa";
import { IoDocumentTextOutline, IoListOutline } from "react-icons/io5";

interface SubMenuItem {
  name: string;
  path: string;
}
interface MenuItem {
  name: string;
  path: string;
  icon?: JSX.Element;
  child?: MenuItem[];
  expand?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Bot Agents",
    path: "#",
    icon: <FaRobot className="text-blue-400" />,
    child: [
      {
        name: "Agents",
        path: "#",
        child: [
          {
            name: "Agent Creation",
            path: "/agent-creation"
          },
          {
            name: "Knowledge Hub",
            path: "/knowledge-hub"
          },
          {
            name: "Chat Logs",
            path: "/chat-logs"
          },
        ],
      },
      {
        name: "Chatbot Colour",
        path: "chatbot-color",
      }
    ],
  },
  {
    name: "SmartChat",
    path: "#",
    icon: <IoDocumentTextOutline className="text-blue-400" />,
    child: [
      {
        name: "Document Library",
        path: "document-library",
      },
      {
        name: "Template Manager",
        path: "template-manager",
      },
    ],
  },
];

export { menuItems };
export type { MenuItem };
