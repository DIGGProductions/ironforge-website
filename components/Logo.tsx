import Image from "next/image";
import logo from "@/public/images/logo.webp";

// Gold-on-black Iron Forge wordmark. Intrinsic 240x57.
export default function Logo({
  className = "",
  height = 34,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src={logo}
      alt="Iron Forge Commercial Repair"
      priority={priority}
      style={{ height, width: "auto" }}
      className={className}
    />
  );
}
