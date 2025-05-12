"use client";
import { useState, useEffect, useMemo } from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

export const ServiceTimeAlert = () => {
  const [visible, setVisible] = useState(true);

  // Memoize the cutoff check
  const shouldShow = useMemo(() => {
    const now = new Date();
    const cutoff = new Date("2025-06-08T00:00:00");
    return now < cutoff;
  }, []);

  if (!visible || !shouldShow) return null;

  return (
    <div className="flex items-center justify-between gap-4 text-sm font-medium text-linkActive bg-linkLight border-2 border-linkActive rounded-lg py-2 px-4 mb-8">
      <div className="flex items-center gap-2">
        <PiWarningCircleBold className="h-6 w-6 text-linkActive" />
        Beginning June 8, our service times will be 9:00 and 10:45am
      </div>
      <button onClick={() => setVisible(false)}>
        <IoMdClose className="h-6 w-6 text-linkActive" />
      </button>
    </div>
  );
};
