import { useEffect, useRef, useState } from "react";
import { MessageCircleQuestion, Send, X } from "lucide-react";
import { CONFIG, HELP, TOPICS } from "@/data/site";

type Msg = { text: string; from: "bot" | "me"; link?: { href: string; label: string } };

export function HelpChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      text: "Hi! Ask us anything about the masterclass, pricing or tutors — or tap a question below.",
      from: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const reply = (key: string) => {
    const text = HELP[key] ?? HELP["hum"] ?? "Happy to help personally. Reach us here:";
    const msg: Msg =
      key === "pay" || key === "hum"
        ? {
            text,
            from: "bot",
            link: { href: `mailto:${CONFIG.email}`, label: CONFIG.email },
          }
        : { text, from: "bot" };
    setMsgs((m) => [...m, msg]);
  };

  const askTopic = (key: string, label: string) => {
    setMsgs((m) => [...m, { text: label, from: "me" }]);
    reply(key);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    setInput("");
    setMsgs((m) => [...m, { text: q, from: "me" }]);
    reply("hum");
  };

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="help-chat-panel"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
      >
        {open ? <X className="size-4" /> : <MessageCircleQuestion className="size-4" />}
        {open ? "Close" : "Need help?"}
      </button>

      <section
        id="help-chat-panel"
        hidden={!open}
        aria-hidden={!open}
        aria-label="Help chat"
        className={`fixed bottom-20 right-5 z-50 ${open ? "flex" : "hidden"} max-h-[70vh] w-[min(380px,calc(100vw-40px))] flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-hard`}
      >
        <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
          <span className="font-display text-sm font-bold">Fixed Tutor help</span>
          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
            className="rounded p-1 hover:bg-primary-foreground/10"
          >
            <X className="size-4" />
          </button>
        </div>
        <div
          ref={listRef}
          role="log"
          aria-live="polite"
          className="flex flex-1 flex-col gap-2 overflow-y-auto p-3"
        >
          {msgs.map((m, i) => (
            <div key={i} className={m.from === "bot" ? "self-start" : "self-end"}>
              <div
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  m.from === "bot"
                    ? "rounded-bl-sm bg-muted text-foreground"
                    : "rounded-br-sm bg-primary text-primary-foreground"
                }`}
              >
                {m.text}
                {m.link && (
                  <a
                    href={m.link.href}
                    className="mt-1 block font-bold text-gold-foreground underline underline-offset-2"
                  >
                    {m.link.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 px-3 pb-2">
          {TOPICS.map(([label, key]) => (
            <button
              key={key}
              type="button"
              onClick={() => askTopic(key, label)}
              className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              {label}
            </button>
          ))}
        </div>
        <form onSubmit={submit} className="flex gap-2 border-t border-border p-2.5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question"
            aria-label="Your question"
            className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            aria-label="Send"
            className="rounded-lg bg-primary px-3 text-primary-foreground hover:opacity-90"
          >
            <Send className="size-4" />
          </button>
        </form>
      </section>
    </>
  );
}
