interface Destination {
  rank: number;
  name: string;
  count: string;
  change: string;
  percentage: number;
}

interface DestinationsListProps {
  destinations: Destination[];
}

const rankColors = {
  1: '#1E3A23',
  2: '#E8F2EB',
  3: '#E8F2EB',
  4: '#E8F2EB',
  5: '#E8F2EB',
};

const barColors = {
  1: '#2D5A34',
  2: '#4A7C59',
  3: '#6DAB7A',
  4: '#8FAF8A',
  5: '#B8D4BD',
};

const textColors = {
  1: '#EDE9DA',
  2: '#4A7C59',
  3: '#4A7C59',
  4: '#4A7C59',
  5: '#4A7C59',
};

export default function DestinationsList({ destinations }: DestinationsListProps) {
  return (
    <div className="space-y-3">
      {destinations.map((dest) => (
        <div key={dest.rank} className="flex items-center gap-3">
          {/* Rank Badge */}
          <div
            className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: rankColors[dest.rank as keyof typeof rankColors] }}
          >
            <span
              className="text-xs font-bold"
              style={{ color: textColors[dest.rank as keyof typeof textColors] }}
            >
              {dest.rank}
            </span>
          </div>

          {/* Destination Info */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#3D4D3E] text-sm font-medium">{dest.name}</span>
              <span className="text-[#4A7C59] text-xs font-semibold">{dest.change}</span>
            </div>
            {/* Progress Bar */}
            <div className="h-1 bg-[#F0EDE6] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  backgroundColor: barColors[dest.rank as keyof typeof barColors],
                  width: `${dest.percentage}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Count */}
          <span className="text-[#9FA89F] text-xs whitespace-nowrap">{dest.count}</span>
        </div>
      ))}
    </div>
  );
}
