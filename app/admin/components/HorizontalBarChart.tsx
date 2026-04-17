interface TravelType {
  label: string;
  count: number;
  color: string;
}

interface HorizontalBarChartProps {
  data: TravelType[];
  maxValue?: number;
}

export default function HorizontalBarChart({
  data,
  maxValue = 10000,
}: HorizontalBarChartProps) {
  return (
    <div className="w-full">
      {/* Y-axis labels and bars */}
      <div className="space-y-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            {/* Label */}
            <div className="w-20 text-right text-[#6B8F74] text-xs">{item.label}</div>

            {/* Bar container */}
            <div className="flex-1 h-3.5 bg-[#F0EDE6] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  backgroundColor: item.color,
                  width: `${(item.count / maxValue) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between text-[#9FA89F] text-xs mt-8 px-24">
        <span>0k</span>
        <span>3k</span>
        <span>5k</span>
        <span>8k</span>
        <span>10k</span>
      </div>
    </div>
  );
}
