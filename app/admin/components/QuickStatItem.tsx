interface QuickStatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const QuickStatItem = ({ icon, label, value }: QuickStatItemProps) => (
  <div className="bg-[#F8F6F0] rounded-[14px] px-4 py-3 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <div className="w-4 h-4">{icon}</div>
      <span className="text-[#3D4D3E] text-sm">{label}</span>
    </div>
    <span className="text-[#1E3A23] font-bold text-base">{value}</span>
  </div>
);

export default QuickStatItem;
