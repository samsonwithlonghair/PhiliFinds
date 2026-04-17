interface ModerationStatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  bgColor?: string;
  iconColor?: string;
}

export default function ModerationStatCard({
  icon,
  value,
  label,
  bgColor = '#E8F2EB',
  iconColor = '#4A7C59',
}: ModerationStatCardProps) {
  return (
    <div className="bg-white rounded-2xl px-4 py-5 shadow-sm border border-black/6 flex items-center gap-3">
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-4.5 h-4.5" style={{ color: iconColor }}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="text-[#1E3A23] text-2xl font-bold">{value}</div>
        <div className="text-[#6B8F74] text-xs">{label}</div>
      </div>
    </div>
  );
}
