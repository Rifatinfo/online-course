import { Ban, PlusCircle } from "lucide-react";
import Link from "next/link";

interface iAppProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function EmptyState({ title, description, buttonText, href }: iAppProps) {
  return (
    <div className="mt-4 flex flex-col flex-1 h-full items-center justify-center rounded-md border-dashed border p-8 text-center animate-in fade-in-50">
      
      {/* Circle Icon */}
      <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 mb-6">
        <Ban className="size-10 text-primary" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">{description}</p>

      {/* Button */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white text-sm font-medium hover:bg-primary/90 transition"
      >
        <PlusCircle className="size-4" />
        {buttonText}
      </Link>

    </div>
  );
}
