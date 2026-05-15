interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  change?: string;
  changeColor?: 'green' | 'orange' | 'blue';
}

export default function StatCard({
  icon,
  value,
  label,
  change,
  changeColor = 'green',
}: StatCardProps) {
  const changeColorClass = {
    green: 'text-[#4A7C59]',
    orange: 'text-[#C8842A]',
    blue: 'text-[#5A7FA8]',
  }[changeColor];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6 flex flex-col">
      {/* Header with icon and menu */}
      <div className="flex justify-between items-start mb-8">
        <div className="w-11 h-11 bg-[#E8F2EB] rounded-[14px] flex items-center justify-center">
          {icon}
        </div>
        <button className="text-[#C5C0B4] hover:text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Value */}
      <div className="text-[#1E3A23] text-2xl font-bold mb-2">{value}</div>

      {/* Label */}
      <div className="text-[#6B8F74] text-sm mb-3">{label}</div>

      {/* Change indicator */}
      {change && <div className={`text-xs font-semibold ${changeColorClass}`}>{change}</div>}
    </div>
  );
}
