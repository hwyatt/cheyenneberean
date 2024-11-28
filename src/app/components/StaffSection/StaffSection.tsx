import { StaffMember } from "@/app/api/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Button } from "../Button/Button";

type StaffSectionProps = {
  heading?: string;
  staffMember: StaffMember;
  theme: string;
};

export const StaffSection = ({
  heading,
  staffMember,
  theme,
}: StaffSectionProps) => (
  <div className="bg-palette p-4 md:p-8 w-[calc(100vw-16px)]">
    <div className="flex flex-col items-center gap-4 site-container m-auto">
      {heading && (
        <h2 className={`text-2xl font-medium text-dark`}>{heading}</h2>
      )}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 min-w-full items-center justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start justify-start">
          <Image
            src={staffMember?.image?.url}
            alt={`${staffMember?.firstName} ${staffMember?.lastName}`}
            height={128}
            width={128}
            className="rounded-full"
          />
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <span className="text-sm font-light uppercase tracking-widest text-body">
                {staffMember?.position}
              </span>
              <span className="font-medium text-2xl">{`${staffMember?.firstName} ${staffMember?.lastName}`}</span>
            </div>
            <ReactMarkdown className="text-balance text-body">
              {staffMember?.bio}
            </ReactMarkdown>
            <Button
              href={`mailto:${staffMember?.email}`}
              variant={theme === "kids" ? "Cedar" : "Dark"}
              className="mt-4"
            >{`Contact ${staffMember?.firstName}`}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
