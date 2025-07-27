## Tailwind Elements Demo

### Setup

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Click on the links to see a demo with each respective technology. 

### About

On July 25, 2025, [Tailwind released Vanilla JavaScript support for Tailwind Plus](https://tailwindcss.com/blog/vanilla-js-support-for-tailwind-plus). 

Previously,
the UI blocks in [Tailwind Plus](https://tailwindcss.com/plus)
that needed JavaScript used [HeadlessUI](https://headlessui.com).
Since HeadlessUI itself required either React or Vue,
this meant that if you wanted to use Tailwind Plus UI blocks inside other frontend frameworks or in vanilla JS,
you had to write the custom JavaScript yourself.
This was a non-trivial task considering that ARIA attribute management,
focus handling, keyboard support are table stakes for professional UI components.

To enable vanilla JavaScript support, Tailwind provides a library named [Tailwind Elements](https://tailwindcss.com/blog/vanilla-js-support-for-tailwind-plus#no-framework-required).

Here I demonstrate using Tailwind Elements in the following frontend technologies.

* Tailwind Elements in Plain HTML
* Tailwind Elements in React Server Components (no "use client")
* Tailwind Elements in React useEffect-loaded pages
* HeadlessUI (as a comparison)

### Notes

* Tailwind Elements brings the convenience and professionalism of HeadlessUI to plain HTML. 
* Tailwind Elements can be used in React Server Components (RSCs) without a "use client". React Server Components do not hydrate React in the browser and are not "reactive". Nonetheless, Tailwind Elements can bring basic reactivity to RSCs.
* Tailwind Elements can also be used with traditional useEffect-loaded React pages where the page contents are loaded asynchronously.
* Compared to the same page in HeadlessUI, Tailwind Elements may actually be easier to work with. 
   * HeadlessUI requires client components, and hence the top component needs "use client".
   * The ability to add basic reactivity to Server Components is very nice.
   * Note that HeadlessUI and Tailwind Elements are working at a different layer of abstraction in this example and cannot be directly compared.
