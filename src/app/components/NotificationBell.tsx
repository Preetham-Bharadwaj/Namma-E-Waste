import { useState } from "react";
import { Bell, LucideIcon } from "lucide-react";

type NotificationBellProps = {
  compactIcon?: LucideIcon;
  iconSize?: number;
  wrapperClassName?: string;
  buttonClassName?: string;
  panelClassName?: string;
  badge?: string;
  badgeClassName?: string;
};

export function NotificationBell({
  compactIcon: Icon = Bell,
  iconSize = 19,
  wrapperClassName = "",
  buttonClassName = "grid h-10 w-10 place-items-center rounded-full text-slate-600 hover:bg-slate-50",
  panelClassName = "absolute right-0 top-12 z-50 w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]",
  badge,
  badgeClassName = "",
}: NotificationBellProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${wrapperClassName}`.trim()}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={buttonClassName}
        aria-label="Open notifications"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <Icon size={iconSize} />
        {badge ? <span className={badgeClassName}>{badge}</span> : null}
      </button>

      {open && (
        <>
          <button type="button" aria-label="Close notifications" onClick={() => setOpen(false)} className="fixed inset-0 z-[60] bg-transparent" />
          <div className={panelClassName}>
            <div className="border-b border-slate-100 px-4 py-3">
              <p className="text-sm font-semibold text-slate-950">Notifications</p>
              <p className="mt-0.5 text-xs text-slate-500">No new pickup updates.</p>
            </div>
            <div className="px-4 py-5 text-sm text-slate-500">Pickup updates will appear here after you schedule a collection.</div>
          </div>
        </>
      )}
    </div>
  );
}
