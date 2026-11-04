import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { CONFIG, HELP, TOPICS } from "@/data/site";

type Msg = { text: string; from: "bot" | "me"; link?: { href: string; label: string } };

export default function HelpChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
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
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  const reply = (key: string) => {
    const text = HELP[key] ?? HELP.hum ?? "Happy to help personally. Reach us here:";
    const msg: Msg =
      key === "pay" || key === "hum"
        ? { text, from: "bot", link: { href: `mailto:${CONFIG.email}`, label: CONFIG.email } }
        : { text, from: "bot" };
    setMsgs((messages) => [...messages, msg]);
  };

  const askTopic = (key: string, label: string) => {
    setMsgs((messages) => [...messages, { text: label, from: "me" }]);
    reply(key);
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;
    setInput("");
    setMsgs((messages) => [...messages, { text: question, from: "me" }]);
    reply("hum");
  };

  return (
    <section
      id="help-chat-panel"
      hidden={!open}
      role="region"
      aria-label="Help chat"
      className={`fixed bottom-20 right-5 z-50 ${open ? "flex" : "hidden"} max-h-[70vh] w-[min(380px,calc(100vw-40px))] flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-hard`}
    >
      <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
        <span className="font-display text-sm font-bold">Fixed Tutor help</span>
        <button
          type="button"
          aria-label="Close chat"
          onClick={onClose}
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
        {msgs.map((message, index) => (
          <div key={index} className={message.from === "bot" ? "self-start" : "self-end"}>
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                message.from === "bot"
                  ? "rounded-bl-sm bg-muted text-foreground"
                  : "rounded-br-sm bg-primary text-primary-foreground"
              }`}
            >
              {message.text}
              {message.link && (
                <a
                  href={message.link.href}
                  className="mt-1 block font-bold text-gold-foreground underline underline-offset-2"
                >
                  {message.link.label}
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
          onChange={(event) => setInput(event.target.value)}
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
  );
}
