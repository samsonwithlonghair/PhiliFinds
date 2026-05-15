interface AnalyticsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  subtitle: string;
  change?: string;
  changeColor?: 'green' | 'orange';
}

export default function AnalyticsCard({
  icon,
  value,
  label,
  subtitle,
  change,
  changeColor = 'green',
}: AnalyticsCardProps) {
  const bgColor = changeColor === 'orange' ? '#F5EDDF' : changeColor === 'green' ? '#E8F2EB' : '#E4EDF6';
  const iconColor = changeColor === 'orange' ? '#A87C4A' : changeColor === 'green' ? '#4A7C59' : '#5A7FA8';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6 flex flex-col">
      {/* Header with icon and change */}
      <div className="flex justify-between items-start mb-8">
        <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center`} style={{ backgroundColor: bgColor }}>
          <div className="w-5 h-5" style={{ color: iconColor }}>
            {icon}
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full bg-[#E8F2EB] flex items-center gap-1`}>
          <svg className="w-3 h-3 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-7" />
          </svg>
          <span className="text-[#4A7C59] text-xs font-semibold">{change}</span>
        </div>
      </div>

      {/* Value */}
      <div className="text-[#1E3A23] text-3xl font-bold mb-2">{value}</div>

      {/* Label and Subtitle */}
      <div className="text-[#6B8F74] text-sm mb-1">{label}</div>
      <div className="text-[#9FA89F] text-xs">{subtitle}</div>
    </div>
  );
}
