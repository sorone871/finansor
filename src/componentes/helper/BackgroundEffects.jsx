export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Círculos flotantes animados */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-green-500/20 rounded-full blur-3xl animate-float animation-delay-4000"></div>
      
      {/* Efecto de grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
    </div>
  );
}