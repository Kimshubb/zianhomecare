import { Check } from "lucide-react";

interface TrustCheckProps {
  label: string;
}

export function TrustCheck({
  label,
}: TrustCheckProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage text-white">
        <Check size={12} strokeWidth={3} />
      </span>

      <span className="text-sm text-muted">
        {label}
      </span>
    </div>
  );
}
