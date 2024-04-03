"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export const Nav = ({ children }: { children: React.ReactNode }) => {
  return <nav className="flex justify-center bg-primary px-4 text-primary-foreground">{children}</nav>;
};

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        " p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary",
        pathname === props.href && "bg-secondary text-foreground"
      )}
    />
  );
}