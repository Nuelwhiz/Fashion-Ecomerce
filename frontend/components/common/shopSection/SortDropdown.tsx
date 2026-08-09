"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const sortOptions = [
  "Featured",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

export default function SortDropdown() {
  const [selected, setSelected] = useState("Featured");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors hover:border-zinc-400 sm:w-auto"
      >
        <span>
          Sort:{" "}
          <span className="font-medium">{selected}</span>
        </span>

        <ChevronDown
          size={17}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-2 w-full min-w-[210px] border border-zinc-200 bg-white py-2 shadow-lg sm:w-auto">
          {sortOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-zinc-50 ${
                selected === option
                  ? "font-medium text-amber-600"
                  : "text-zinc-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}