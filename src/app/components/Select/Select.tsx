"use client";
import { useEffect, useState } from "react";
import Select from "react-select";

type OptionSelectProps = {
  options: string[];
  defaultValue: string;
  isMulti: boolean;
  placeholder: string;
};

export const OptionSelect = ({
  options,
  defaultValue,
  isMulti,
  placeholder,
}: OptionSelectProps) => {
  const id = Date.now().toString();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <Select
      id={id}
      defaultValue={defaultValue}
      isMulti={isMulti}
      placeholder={placeholder}
      name="days"
      options={options}
      className="basic-multi-select min-w-64"
      classNamePrefix="select"
    />
  ) : null;
};
