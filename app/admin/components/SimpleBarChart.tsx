interface BarData {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}

interface SimpleBarChartProps {
  data: BarData[];
  height?: number;
}

export default function SimpleBarChart({ data, height = 220 }: SimpleBarChartProps) {
  return (
    <div style={{ width: '100%', height: `${height}px`, position: 'relative' }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-right pr-2 text-[#9FA89F] text-xs">
        <span>6.0k</span>
        <span>4.5k</span>
        <span>3.0k</span>
        <span>1.5k</span>
        <span>0.0k</span>
      </div>

      {/* Bars container */}
      <div className="ml-12 h-full flex items-flex-end justify-around gap-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end">
            {/* Bar */}
            <div
              className="w-full mb-4 transition-all"
              style={{
                backgroundColor: item.color,
                height: `${(item.value / item.maxValue) * 85}%`,
                minHeight: '10px',
              }}
            ></div>
            {/* Label */}
            <span className="text-[#6B8F74] text-xs text-center whitespace-nowrap mt-2">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
