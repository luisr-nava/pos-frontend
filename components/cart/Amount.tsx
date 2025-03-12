import { formatCurrency } from "@/src/utils";
type AmountProp = {
  label: string;
  amount: number;
  discount?: boolean;
};

export default function Amount({ label, amount, discount }: AmountProp) {
  return (
    <div className={`${discount && 'bg-green-300 text-green-900'} flex justify-between p-1`}>
      <dt className="font-bold">{label}</dt>
      <dd className="text-gray-900">
        {discount && '- '}
        {formatCurrency(amount)}</dd>
    </div>
  );
}

