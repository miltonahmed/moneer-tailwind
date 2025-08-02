import { Card, CardContent } from '@/components/ui/card';

const data = [
  { label: 'Secure Paid', value: 150000, max: 500000 },
  { label: 'Crowdfunding', value: 450000, max: 500000 },
  { label: 'Verified ICOs', value: 20000, max: 500000 },
];

const formatNumber = num => {
  if (num >= 1000) return `${num / 1000}k`;
  return num;
};

const getPercentage = (value, max) => `${(value / max) * 100}%`;

const ProgressBars = () => {
  return (
    <Card className="w-full max-w-xl p-4">
      <CardContent className="space-y-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-gray-800">{item.label}</span>
              </div>
              <div className="relative h-2 rounded-full bg-gray-200">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-pink-500 via-red-400 to-orange-400"
                  style={{ width: getPercentage(item.value, item.max) }}
                ></div>
              </div>
            </div>
            <span className="ml-4 font-medium text-gray-800">
              {formatNumber(item.value)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProgressBars;
