import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import TradeHubLogo from '@/app/ui/tradehub-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-sky-700 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <TradeHubLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="bg-ne hidden h-auto w-full grow rounded-md  bg-neutral-900 md:block"></div>
        <form>
          <button className="bg-ne flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-neutral-900  p-3 text-sm font-medium hover:bg-neutral-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-8 text-white" />
            <div className=" hidden text-white md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
