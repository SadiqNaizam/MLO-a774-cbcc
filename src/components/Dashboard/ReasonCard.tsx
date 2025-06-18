import React from 'react';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

export interface ReasonCardDataType {
  id: string;
  value: string;
  description: string;
  type: 'percentage' | 'value';
  hasInfoIcon?: boolean;
}

interface ReasonCardProps {
  data: ReasonCardDataType;
  className?: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ data, className }) => {
  return (
    <div className={cn('text-left', className)}>
      <p className="text-3xl font-bold text-foreground mb-1">{data.value}</p>
      <div className="flex items-center">
        <p className="text-sm text-muted-foreground">{data.description}</p>
        {data.hasInfoIcon && <Info className="ml-1 h-3 w-3 text-muted-foreground" />}
      </div>
    </div>
  );
};

export default ReasonCard;
