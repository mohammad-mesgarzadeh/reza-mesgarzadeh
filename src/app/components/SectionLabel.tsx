import { cn } from "./ui/utils";

export function SectionLabel({
  icon,
  label,
  light,
  center,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2", center && "mx-auto", className)}>
      <div
        className={cn(
          "w-7 h-7 rounded-md flex items-center justify-center",
          light
            ? "bg-primary-foreground/10 text-primary-foreground"
            : "bg-accent/10 text-accent"
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.15em]",
          light ? "text-primary-foreground/60" : "text-muted-foreground"
        )}
      >
        {label}
      </span>
    </div>
  );
}
