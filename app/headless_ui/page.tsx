'use client'

import {Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {useState} from 'react'

const people = [
  {id: 1, name: "Leslie Alexander"},
  {id: 2, name: "Michael Foster"},
  {id: 3, name: "Dries Vincent"},
  {id: 4, name: "Lindsay Walton"},
  {id: 5, name: "Courtney Henry"},
  {id: 6, name: "Tom Cook"},
  {id: 7, name: "Whitney Francis"},
  {id: 8, name: "Leonard Krasner"},
  {id: 9, name: "Floyd Miles"},
  {id: 10, name: "Emily Selman"},
  {id: 11, name: "Kristin Watson"},
  {id: 12, name: "Emma Dorsey"},
  {id: 13, name: "Alicia Bell"},
  {id: 14, name: "Jenny Wilson"},
  {id: 15, name: "Anna Roberts"},
  {id: 16, name: "Benjamin Russel"},
  {id: 17, name: "Jeffrey Webb"},
  {id: 18, name: "Kathryn Murphy"},
  {id: 19, name: "Lawrence Hunter"},
  {id: 20, name: "Yvette Armstrong"},
  {id: 21, name: "Angela Fisher"},
  {id: 22, name: "Blake Reid"},
  {id: 23, name: "Hector Gibbons"},
  {id: 24, name: "Fabricio Mendes"},
  {id: 25, name: "Jillian Steward"},
  {id: 26, name: "Chelsea Hagon"}
]


export default function HeadlessUiPage() {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <main className="w-lg my-20 mx-auto p-8">
      <Combobox
        as="div"
        value={selectedPerson}
        onChange={(person) => {
          setQuery('')
          setSelectedPerson(person)
        }}
      >
        <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
        <div className="relative mt-2">
          <ComboboxInput
            className="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            onChange={(event) => setQuery(event.target.value)}
            onBlur={() => setQuery('')}
            displayValue={(person) => person?.name}
          />
          <ComboboxButton
            className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
            <ChevronDownIcon className="size-5 text-gray-400" aria-hidden="true"/>
          </ComboboxButton>

          <ComboboxOptions
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
            {query.length > 0 && (
              <ComboboxOption
                value={{id: null, name: query}}
                className="cursor-default px-3 py-2 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                {query}
              </ComboboxOption>
            )}
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="cursor-default px-3 py-2 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <span className="block truncate">{person.name}</span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </div>
      </Combobox>
    </main>
  )
}
