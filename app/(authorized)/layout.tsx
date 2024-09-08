import Sidebar from "@/components/sidebar/sidebar";
import classes from "./layout.module.css";

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className="w-full px-2 py-6">{children}</div>
    </div>
  );
}
