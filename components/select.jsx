import {Listbox, Transition} from "@headlessui/react"
import {ChevronUpDownIcon} from "@heroicons/react/20/solid"
import {Fragment} from "react"

export default function Select({items, selected, setSelected}) {
  return (
    <div className="w-40">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default dark:bg-black focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
            <span className="block capitalize truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 dark:bg-black dark:text-white ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {items.map(color => (
                <Listbox.Option
                  key={color.name}
                  className={({active}) =>
                    `relative cursor-default select-none py-2 text-left pl-4 pr-4 ${
                      active
                        ? "bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-white"
                        : "text-gray-900 dark:text-gray-300"
                    }`
                  }
                  value={color.name}>
                  {({selected}) => (
                    <div className="flex items-center gap-x-2">
                      <span
                        className="inline-block w-4 h-4"
                        style={{
                          backgroundColor: color.color,
                        }}
                      />
                      <span
                        className={`block capitalize  truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {color.name}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
