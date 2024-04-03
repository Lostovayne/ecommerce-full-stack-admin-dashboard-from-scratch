import { Nav, NavLink } from "@/components/Nav";

export const metadata = {
  title: "Admin",
  description: "Dashboard admin",
};
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className="my-6 container">{children}</div>
    </div>
  );
}
