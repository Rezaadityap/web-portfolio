import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) =>
        toast.open ? (
          <div
            key={toast.id}
            className={cn(
              "bg-background border border-border rounded-md p-4 shadow-md max-w-sm w-full animate-in fade-in zoom-in",
              "transition-all duration-300"
            )}>
            <div className="font-semibold mb-1">{toast.title}</div>
            <div className="text-sm text-muted-foreground">
              {toast.description}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
