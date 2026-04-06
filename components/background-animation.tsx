export default function BackgroundAnimation() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(72,114,255,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(0,196,255,0.14),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(114,73,255,0.12),transparent_25%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:68px_68px] opacity-25" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-float-slow" />
      <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl animate-float-delayed" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl animate-float-slow" />
    </div>
  );
}
