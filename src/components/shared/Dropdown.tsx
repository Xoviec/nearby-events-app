import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment, ReactNode } from 'react';
// dropdown react component for the application
export type DropdownItem = {
  label: string,

}

export type DropdownProps = {
  title: string,
//   children?: ReactNode[],
}

export default function Dropdown({title, children}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 text-sm font-medium text-[#000000] hover:text-gray-200">
          {title}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
       <Menu.Items
          static
          as="div"
          className="origin-top-right absolute right-0 mt-2 w-44 rounded- shadow-lg bg-header ring-1 ring-header-bg ring-opacity-5  focus:outline-none rounded-md"
        >
            
          <div className="py-1   text-[#d95a41] ">
            {children}
          </div>

        </Menu.Items>

      </Transition>
    </Menu>
  )
}
