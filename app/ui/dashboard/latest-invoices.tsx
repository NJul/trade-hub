import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { poppins } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2
        className={`${poppins.className} mb-4 text-xl text-white md:text-2xl`}
      >
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-neutral-700 p-4">
        <div className="bg-neutral-00 px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-white md:text-base">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-white sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${poppins.className} truncate text-sm font-medium text-white md:text-base`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-white" />
          <h3 className="ml-2 text-sm text-white ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
