import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { rubik } from '@/app/ui/fonts';

export default function TradeHubLogo() {
  return (
    <div
      className={`${rubik.className} flex flex-row items-center leading-none text-white `}
    >
      <ShoppingCartIcon className="mr-6 h-16  w-16" />
      <p className="text-[44px]">TradeHub</p>
    </div>
  );
}
