'use client';

import { useCountUp } from '@/app/hooks/useCountUp';

interface MetricProps {
  value: string;
  label: string;
  change?: string;
  numeric?: number;
}

export function Metric({ value, label, change, numeric }: MetricProps) {
  const shouldAnimate = numeric !== undefined;

  const countUp = useCountUp({
    end: numeric || 0,
    duration: 2000,
    decimals: 0
  });

  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-lime mb-1 sm:mb-2 mono">
        {shouldAnimate ? (
          <span ref={countUp.ref as React.RefObject<HTMLSpanElement>}>
            {countUp.formattedValue}
          </span>
        ) : (
          value
        )}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-wide text-gray-600 leading-tight">
        {label}
      </div>
      {change && (
        <div className={`text-xs mt-1 ${change.startsWith('+') ? 'text-lime' : 'text-lime'}`}>
          {change}
        </div>
      )}
    </div>
  );
}
