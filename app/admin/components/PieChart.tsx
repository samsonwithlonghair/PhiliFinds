interface PieSlice {
  label: string;
  size: string;
  percentage: number;
  color: string;
}

interface PieChartProps {
  slices: PieSlice[];
}

export default function PieChart({ slices }: PieChartProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Simplified Pie Chart Visualization */}
      <svg viewBox="0 0 200 200" className="w-48 h-48">
        {/* This creates a basic multi-colored pie chart */}
        {slices.map((slice, idx) => {
          const startAngle = slices.slice(0, idx).reduce((sum, s) => sum + (s.percentage / 100) * 360, 0);
          const endAngle = startAngle + (slice.percentage / 100) * 360;
          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (endAngle * Math.PI) / 180;

          const x1 = 100 + 80 * Math.cos(startRad);
          const y1 = 100 + 80 * Math.sin(startRad);
          const x2 = 100 + 80 * Math.cos(endRad);
          const y2 = 100 + 80 * Math.sin(endRad);

          const largeArc = endAngle - startAngle > 180 ? 1 : 0;

          const pathData = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;

          return (
            <path
              key={idx}
              d={pathData}
              fill={slice.color}
              stroke="white"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Legend */}
      <div className="w-full grid grid-cols-2 gap-3 mt-6 px-4">
        {slices.map((slice, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded"
              style={{ backgroundColor: slice.color }}
            ></div>
            <span className="text-[#3D4D3E] text-xs">
              {slice.label}
              <span className="text-[#9FA89F] ml-1">{slice.percentage}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
