import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function CustomDropdown({ options, value, onChange, label }) {
  return (
    <div className="w-48">
      <Listbox value={value} onChange={onChange}>
        {() => (
          <div className="relative">
            <Listbox.Label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
              {label}
            </Listbox.Label>
            <Listbox.Button className="relative w-full cursor-pointer rounded-full bg-white py-2 pl-4 pr-10 text-left shadow-sm border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150 hover:bg-green-50 hover:border-green-400 text-gray-800">
              <span className="block truncate capitalize text-left text-gray-900">
                {value}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black/10 focus:outline-none sm:text-sm text-left">
                {options.map((option) => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 capitalize text-left ${
                        active ? "bg-green-100 text-green-900" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate text-left text-gray-900 ${selected ? "font-semibold" : "font-normal"}`}
                        >
                          {option}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}
