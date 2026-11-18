import { tech } from "@/data/tech";

export default function TechChip({ id, iconOnly = false }) {
  const item = tech[id];
  if (!item) return null;
  const { Icon, name, color } = item;

  return (
    <span className="chip" title={name}>
      <Icon aria-hidden="true" style={{ color }} className="text-sm" />
      {iconOnly ? <span className="sr-only">{name}</span> : name}
    </span>
  );
}
