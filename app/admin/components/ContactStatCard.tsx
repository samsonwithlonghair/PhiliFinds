'use client';

interface ContactStatCardProps {
  value: number;
  label: string;
}

export default function ContactStatCard({ value, label }: ContactStatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/6 flex flex-col items-center justify-center">
      <div className="text-[#1E3A23] text-[28px] font-bold leading-[30px] mb-1">
        {value}
      </div>
      <div className="text-[#6B8F74] text-[11px] font-normal leading-[16.5px]">
        {label}
      </div>
    </div>
  );
}
