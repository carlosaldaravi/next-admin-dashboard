import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className="flex shrink-0 items-center justify-center">
      <Image
        alt="Logo"
        height={94}
        width={94}
        src="/logo/logo.png"
        style={{ height: "auto", width: "auto" }}
        priority
      />
    </div>
  );
}
