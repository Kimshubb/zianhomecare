export function PulseRings() {
  return (
    <>
      {[0, 2, 4].map((delay) => (
        <div
          key={delay}
          className="pulse-ring animate-pulse-ring"
          style={{
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </>
  );
}