import { generateYAxis } from '@/app/lib/utils';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { poppins } from '@/app/ui/fonts';
import { Income } from '@/app/lib/definitions';
import { fetchIncome } from '@/app/lib/data';

export default async function IncomeChart() {
  const income = await fetchIncome();
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(income);

  if (!income || income.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2
        className={`${poppins.className} mb-4 text-xl text-white md:text-2xl`}
      >
        Current Income
      </h2>

      <div className="rounded-xl bg-neutral-700 p-4">
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-neutral-700 p-4 sm:grid-cols-13 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-white sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {income.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-sky-700"
                style={{
                  height: `${(chartHeight / topLabel) * month.income}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarDaysIcon className="h-5 w-5 text-white" />
          <h3 className="ml-2 text-sm text-white ">This year</h3>
        </div>
      </div>
    </div>
  );
}
