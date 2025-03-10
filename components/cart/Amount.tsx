import { formatCurrency } from "@/src/utils";
type AmountProp = {
  label: string;
  amount: number;
};

export default function Amount({ label, amount }: AmountProp) {
  return (
    <div className="flex justify-between">
      <dt className="font-bold">{label}</dt>
      <dd className="text-gray-900">{formatCurrency(amount)}</dd>
    </div>
  );
}

