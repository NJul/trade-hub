'use client';

import { SellerField, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';

export default function EditInvoiceForm({
  invoice,
  sellers,
}: {
  invoice: InvoiceForm;
  sellers: SellerField[];
}) {
  return (
    <form>
      <div className="rounded-md bg-neutral-700 p-4 md:p-6">
        <div className="mb-4">
          <label
            htmlFor="seller"
            className="mb-2 block text-sm font-medium text-white"
          >
            Seller
          </label>
          <div className="relative">
            <select
              id="seller"
              name="sellerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={invoice.seller_id}
            >
              <option value="" disabled>
                Select a seller
              </option>
              {sellers.map((seller) => (
                <option key={seller.id} value={seller.id}>
                  {seller.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-medium text-white"
          >
            Choose a sum
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                defaultValue={invoice.amount}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium text-white">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="awaiting"
                  name="status"
                  type="radio"
                  value="awaiting"
                  defaultChecked={invoice.status === 'awaiting'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="awaiting"
                  className=" ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Awaiting <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="fulfilled"
                  name="status"
                  type="radio"
                  value="fulfilled"
                  defaultChecked={invoice.status === 'fulfilled'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="fulfilled"
                  className=" ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-lime-400 px-3 py-1.5 text-xs font-medium text-sky-700"
                >
                  Fulfilled <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
