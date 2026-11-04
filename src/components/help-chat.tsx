import { lazy, Suspense, useState } from "react";
import { MessageCircleQuestion, X } from "lucide-react";

const HelpChatPanel = lazy(() => import("@/components/help-chat-panel"));

export function HelpChat() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="help-chat-panel"
        onClick={() => {
          setOpen((value) => !value);
          setHasOpened(true);
        }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
      >
        {open ? <X className="size-4" /> : <MessageCircleQuestion className="size-4" />}
        {open ? "Close" : "Need help?"}
      </button>
      {hasOpened && (
        <Suspense fallback={null}>
          <HelpChatPanel open={open} onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </>
  );
}
