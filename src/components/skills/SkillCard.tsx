// components/SkillCard.tsx
import React from "react";

interface SkillCardProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

export default function SkillCard({ name, level, icon }: SkillCardProps) {
  const percentage = (level / 10) * 100;

  return (
    <div className="bg-white rounded-xl border shadow p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="font-semibold text-sm">{name}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className="h-full bg-blue-600 rounded"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
