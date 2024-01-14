import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'text-m inline-flex items-center rounded-full px-2 py-1',
        {
          'bg-red-600 text-white': status === 'awaiting',
          'bg-lime-400 text-sky-700': status === 'fulfilled',
        },
      )}
    >
      {status === 'awaiting' ? (
        <>
          Awaiting
          <ClockIcon className="ml-1 w-5 text-white" />
        </>
      ) : null}
      {status === 'fulfilled' ? (
        <>
          Fulfilled
          <CheckIcon className="ml-1 w-5 text-sky-700" />
        </>
      ) : null}
    </span>
  );
}
