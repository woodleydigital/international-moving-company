const portraits = {
  warwick: { src: "/warwick-woodley.webp", name: "Warwick Woodley", width: 384, height: 460 },
  maiane: { src: "/maiane-cassanego-enhanced.webp", name: "Maiane Cassanego", width: 600, height: 600 },
} as const;

export function PersonPortrait({ person }: { person: keyof typeof portraits }) {
  const portrait = portraits[person];
  return <span className="imc-portrait-frame">
    <img src={portrait.src} alt={portrait.name} width={portrait.width} height={portrait.height} loading="lazy" decoding="async" />
  </span>;
}
