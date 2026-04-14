export type Role = "admin" | "projectadmin";

export interface MenuItem {
  id: string;
  name: string;
  icon: string;
  path?: string;
  externalUrl?: string;
}

export const rolePermissions: Record<Role, MenuItem[]> = {
  admin: [
    {
      id: "ai-tools",
      name: "应用市场",
      icon: "grid",
      path: "/ai-tools",
    },
  ],
  projectadmin: [
    {
      id: "project-assets",
      name: "项目资产",
      icon: "folder",
      path: "/project-assets",
    },
    {
      id: "tech-assets",
      name: "技术资产",
      icon: "tool",
      path: "/tech-assets",
    },
    {
      id: "solutions",
      name: "解决方案",
      icon: "solution",
      path: "/solutions",
    },
  ],
};

export const users: Array<{ username: string; password: string; role: Role }> = [
  {
    username: "admin",
    password: "admin123!@#",
    role: "admin",
  },
  {
    username: "projectadmin",
    password: "pa123!@#",
    role: "projectadmin",
  },
];

export function getMenuByRole(role: Role): MenuItem[] {
  return rolePermissions[role] || [];
}

export function validateUser(username: string, password: string): { role: Role } | null {
  const user = users.find((u) => u.username === username && u.password === password);
  return user ? { role: user.role } : null;
}
