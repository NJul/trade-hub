import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-xl bg-neutral-700 p-2 md:pt-0 ">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-5 text-xl font-medium text-white sm:pl-6"
                >
                  Seller
                </th>
                <th
                  scope="col"
                  className="px-3 py-5 text-xl font-medium text-white"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-5 text-xl font-medium text-white"
                >
                  Sum
                </th>
                <th
                  scope="col"
                  className="px-3 py-5 text-xl font-medium text-white"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-5 text-xl font-medium text-white"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="relative py-3 pl-6 pr-3 text-xl text-white"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-neutral-700">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="text-m whitespace-nowrap py-3 pl-6 pr-3 text-white">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={32}
                        height={32}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="text-m whitespace-nowrap px-3 py-3 text-white">
                    {invoice.email}
                  </td>
                  <td className="text-m whitespace-nowrap px-3 py-3 text-white">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="text-m whitespace-nowrap px-3 py-3 text-white">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="text-m whitespace-nowrap px-3 py-3 text-white">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
