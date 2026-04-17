interface ActivityLog {
  id: string;
  message: string;
  timestamp: string;
  type: 'success' | 'warning' | 'error' | 'info';
}

interface RecentActivityProps {
  activities: ActivityLog[];
}

const typeColors = {
  success: '#4A7C59',
  warning: '#C8842A',
  error: '#C05A4E',
  info: '#5A7FA8',
};

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[#1E3A23] font-semibold text-base">Recent Activity</h3>
        <div className="px-3 py-1 bg-[#E8F2EB] rounded-full">
          <span className="text-[#4A7C59] text-xs font-semibold">Live</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4 flex-1">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4 relative">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: typeColors[activity.type] }}
              ></div>
              {/* This would connect to next item in real implementation */}
            </div>

            {/* Content */}
            <div className="flex-1 pt-0.5">
              <p className="text-[#3D4D3E] text-sm">{activity.message}</p>
              <p className="text-[#9FA89F] text-xs mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
