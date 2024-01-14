import { poppins } from '@/app/ui/fonts';
import {
  UserIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-neutral-900 px-6 pb-4 pt-8">
        <h1 className={`${poppins.className} mb-3 text-3xl text-white`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-12 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-sky-700 peer-focus:text-sky-700" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-12 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-sky-700 peer-focus:text-sky-700" />
            </div>
          </div>
        </div>
        <LoginButton />

        {/* Container for displaying form errors */}
        <div className="flex h-8 items-end space-x-1">
          {/* Errors go here */}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className="mt-8 w-full">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
    </Button>
  );
}
