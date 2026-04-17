interface LineChartProps {
  points?: number[];
}

export default function LineChart({ points = [30, 45, 40, 35, 42, 48, 58] }: LineChartProps) {
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Chart Container */}
      <div className="flex-1 relative px-8 py-6">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-right pr-4 text-[#9FA89F] text-xs">
          <span>₱18k</span>
          <span>₱14k</span>
          <span>₱9k</span>
          <span>₱5k</span>
          <span>₱0k</span>
        </div>

        {/* SVG Chart */}
        <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={`grid-${y}`}
              x1="0"
              y1={y}
              x2="500"
              y2={y}
              stroke="#E8E4DA"
              strokeWidth="0.5"
            />
          ))}

          {/* Line Path */}
          <polyline
            points={points
              .map(
                (point, idx) =>
                  `${(idx / (points.length - 1)) * 500},${100 - (point / 100) * 100}`
              )
              .join(' ')}
            stroke="#4A7C59"
            strokeWidth="2.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />

          {/* Points */}
          {points.map((point, idx) => (
            <circle
              key={`point-${idx}`}
              cx={(idx / (points.length - 1)) * 500}
              cy={100 - (point / 100) * 100}
              r="4"
              fill="#4A7C59"
              stroke="white"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between px-12 text-[#6B8F74] text-xs mt-4">
        {months.map((month) => (
          <span key={month} className="text-center">
            {month}
          </span>
        ))}
      </div>
    </div>
  );
}
