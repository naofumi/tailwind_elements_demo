"use client"
import Script from "next/script"
import {useEffect, useState} from "react"
import Link from "next/link"

function getUserList() {
  return [
    "Leslie Alexander",
    "Michael Foster",
    "Dries Vincent",
    "Lindsay Walton",
    "Courtney Henry",
    "Tom Cook",
    "Whitney Francis",
    "Leonard Krasner",
    "Floyd Miles",
    "Emily Selman",
    "Kristin Watson",
    "Emma Dorsey",
    "Alicia Bell",
    "Jenny Wilson",
    "Anna Roberts",
    "Benjamin Russel",
    "Jeffrey Webb",
    "Kathryn Murphy",
    "Lawrence Hunter",
    "Yvette Armstrong",
    "Angela Fisher",
    "Blake Reid",
    "Hector Gibbons",
    "Fabricio Mendes",
    "Jillian Steward",
    "Chelsea Hagon"
  ]
}

export default function RscPage() {
  const [userList, setUserList] = useState<ReturnType<typeof getUserList>>([])

  useEffect(() => {
    setUserList(getUserList())
  }, [])


  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></Script>
      <main className="w-lg my-20 mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Tailwind Elements with useEffect-loading</h1>
          <Link href="/" className="border rounded border-amber-600 text-amber-600 p-1 hover:opacity-60">&lt; Home</Link>
        </div>

        <label htmlFor="autocomplete" className="block text-sm/6 font-medium text-gray-900">Assigned to</label>
        {/*@ts-expect-error Cannot get TypeScript to recognize custom elements*/}
        <el-autocomplete className="relative mt-2 block">
          <input id="autocomplete" type="text"
                 className="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          <button type="button" className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2">
            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true"
                 className="size-5 text-gray-400">
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd" fillRule="evenodd"/>
            </svg>
          </button>
          {/*@ts-expect-error Cannot get TypeScript to recognize custom elements*/}
          <el-options anchor="bottom end" popover
                      className="max-h-60 w-(--input-width) overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 [--anchor-gap:--spacing(1)] sm:text-sm">
            {userList.map((user) => (
              /*@ts-expect-error Cannot get TypeScript to recognize custom elements*/
              <el-option value={user} key={user}
                         className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">
                {user}
                {/*@ts-expect-error Cannot get TypeScript to recognize custom elements*/}
              </el-option>
            ))}
            {/*@ts-expect-error Cannot get TypeScript to recognize custom elements*/}
          </el-options>
          {/*@ts-expect-error Cannot get TypeScript to recognize custom elements*/}
        </el-autocomplete>
      </main>
    </>
  );
}
