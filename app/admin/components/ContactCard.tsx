'use client';

interface ContactCardProps {
  name: string;
  organization: string;
  phoneNumber: string;
  category: string;
  categoryColor?: string;
  lastVerified: string;
  status: 'verified' | 'pending';
  onVerify?: () => void;
  onDelete?: () => void;
}

const categoryColorMap: Record<string, string> = {
  'Police / Emergency': '#2D5A34',
  'Medical / Rescue': '#C05A4E',
  'Tourism Assistance': '#3A6B9A',
  'Fire / Rescue': '#C8842A',
  'Maritime / Search & Rescue': '#4A7F9E',
  'Disaster Response': '#B56D28',
  'Mental Health / Crisis': '#8F6BAA',
};

export default function ContactCard({
  name,
  organization,
  phoneNumber,
  category,
  categoryColor,
  lastVerified,
  status,
  onVerify,
  onDelete,
}: ContactCardProps) {
  const bgColor = categoryColor || categoryColorMap[category] || '#4A7C59';
  const isBadgeColor = status === 'verified' ? '#4A7C59' : '#C8842A';
  const badgeLabel = status === 'verified' ? 'Verified' : 'Pending';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-[#1E3A23] text-[14px] font-semibold leading-[18.2px] mb-1">
            {name}
          </h3>
          <p className="text-[#6B8F74] text-[12px] font-normal leading-[18px] mb-3">
            {organization}
          </p>
          <div className="text-[#1E3A23] text-[16px] font-bold leading-[24px] mb-2">
            {phoneNumber}
          </div>
          <div
            className="inline-block px-2 py-1 rounded-[6px] text-[11px] font-semibold leading-[16.5px] text-white"
            style={{ backgroundColor: bgColor }}
          >
            {category}
          </div>
        </div>

        {/* Status Badge */}
        <div
          className="flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold leading-[16.5px] ml-4 flex-shrink-0"
          style={{
            backgroundColor: status === 'verified' ? '#4A7C59' : '#C8842A',
            color: 'white',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-white" />
          {badgeLabel}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE6]">
        <p className="text-[#9FA89F] text-[11px] font-normal leading-[16.5px]">
          Last verified: {lastVerified}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {status === 'pending' && onVerify && (
            <button 
              onClick={onVerify}
              className="text-[#4A7C59] text-[12px] font-semibold leading-[18px] hover:opacity-80 transition-opacity"
            >
              Verify
            </button>
          )}
          <button className="text-[#6B8F74] text-[12px] font-semibold leading-[18px] hover:opacity-80 transition-opacity">
            Edit
          </button>
          {onDelete && (
            <button 
              onClick={onDelete}
              className="text-[#C05A4E] text-[12px] font-semibold leading-[18px] hover:opacity-80 transition-opacity"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
