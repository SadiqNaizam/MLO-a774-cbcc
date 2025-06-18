import React from 'react';
import { cn } from '@/lib/utils';
import ReasonCard, { ReasonCardDataType } from './ReasonCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReasonsLostGridProps {
  className?: string;
}

const reasonsLostData: ReasonCardDataType[] = [
  { id: 'reason1', value: '40%', description: 'The proposal is unclear', type: 'percentage' as const },
  { id: 'reason2', value: '20%', description: 'However venture pursuit', type: 'percentage' as const },
  { id: 'reason3', value: '10%', description: 'Other', type: 'percentage' as const },
  { id: 'reason4', value: '30%', description: 'The proposal is unclear', type: 'percentage' as const }, // Duplicated from image, keeping for accuracy to image.
];

const otherData: ReasonCardDataType[] = [
  { id: 'other1', value: '900', description: 'total leads count', type: 'value' as const },
  { id: 'other2', value: '12', description: 'days in average to convert lead', type: 'value' as const },
  { id: 'other3', value: '30', description: 'inactive leads', type: 'value' as const, hasInfoIcon: true },
];

const ReasonsLostGrid: React.FC<ReasonsLostGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <Card className="bg-card text-card-foreground shadow-sm rounded-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {reasonsLostData.map((reason) => (
            <ReasonCard key={reason.id} data={reason} />
          ))}
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-sm rounded-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
          {otherData.map((dataItem) => (
            <ReasonCard key={dataItem.id} data={dataItem} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonsLostGrid;
