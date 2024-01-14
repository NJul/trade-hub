import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="hover:text-ne flex h-10 items-center rounded-lg bg-sky-700 px-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-neutral-900 focus-visible:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span className="hidden md:block">Create invoice</span>
      <PlusCircleIcon className="h-8 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border bg-sky-700 p-2 text-white hover:bg-white hover:text-neutral-900"
    >
      <PencilSquareIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border bg-sky-700 p-2 text-white hover:bg-white hover:text-neutral-900">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}
