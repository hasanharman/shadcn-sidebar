// components/ui/icon-renderer.tsx
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface IconRendererProps {
  name: string;
  className?: string;
}

export function IconRenderer({ name, className }: IconRendererProps) {
  const Icon = Icons[name as keyof typeof Icons] as LucideIcon;
  return Icon ? <Icon className={className} /> : null;
}
