import Script from "next/script"

export default function RscPage() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></Script>
      <main className="w-lg my-20 mx-auto p-8">
        <label htmlFor="autocomplete" className="block text-sm/6 font-medium text-gray-900">Assigned to</label>
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

          <el-options anchor="bottom end" popover
                      className="max-h-60 w-(--input-width) overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 [--anchor-gap:--spacing(1)] sm:text-sm">
            <el-option value="Leslie Alexander"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Leslie
              Alexander
            </el-option>
            <el-option value="Michael Foster"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Michael
              Foster
            </el-option>
            <el-option value="Dries Vincent"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Dries
              Vincent
            </el-option>
            <el-option value="Lindsay Walton"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Lindsay
              Walton
            </el-option>
            <el-option value="Courtney Henry"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Courtney
              Henry
            </el-option>
            <el-option value="Tom Cook"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Tom
              Cook
            </el-option>
            <el-option value="Whitney Francis"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Whitney
              Francis
            </el-option>
            <el-option value="Leonard Krasner"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Leonard
              Krasner
            </el-option>
            <el-option value="Floyd Miles"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Floyd
              Miles
            </el-option>
            <el-option value="Emily Selman"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Emily
              Selman
            </el-option>
            <el-option value="Kristin Watson"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Kristin
              Watson
            </el-option>
            <el-option value="Emma Dorsey"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Emma
              Dorsey
            </el-option>
            <el-option value="Alicia Bell"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Alicia
              Bell
            </el-option>
            <el-option value="Jenny Wilson"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Jenny
              Wilson
            </el-option>
            <el-option value="Anna Roberts"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Anna
              Roberts
            </el-option>
            <el-option value="Benjamin Russel"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Benjamin
              Russel
            </el-option>
            <el-option value="Jeffrey Webb"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Jeffrey
              Webb
            </el-option>
            <el-option value="Kathryn Murphy"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Kathryn
              Murphy
            </el-option>
            <el-option value="Lawrence Hunter"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Lawrence
              Hunter
            </el-option>
            <el-option value="Yvette Armstrong"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Yvette
              Armstrong
            </el-option>
            <el-option value="Angela Fisher"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Angela
              Fisher
            </el-option>
            <el-option value="Blake Reid"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Blake
              Reid
            </el-option>
            <el-option value="Hector Gibbons"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Hector
              Gibbons
            </el-option>
            <el-option value="Fabricio Mendes"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Fabricio
              Mendes
            </el-option>
            <el-option value="Jillian Steward"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Jillian
              Steward
            </el-option>
            <el-option value="Chelsea Hagon"
                       className="block truncate px-3 py-2 text-gray-900 select-none aria-selected:bg-indigo-600 aria-selected:text-white">Chelsea
              Hagon
            </el-option>
          </el-options>
        </el-autocomplete>
      </main>
    </>
  );
}
