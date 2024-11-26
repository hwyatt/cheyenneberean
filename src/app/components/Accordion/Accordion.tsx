import { FAQ, FAQQuestionAnswer } from "@/app/api/types";

export const Accordion = ({ heading, questions, theme }: FAQ) => (
  <div className="bg-palette p-4 md:p-8 w-[calc(100vw-16px)]">
    <div className="flex flex-col items-center gap-4 site-container m-auto">
      <h2 className={`text-2xl font-medium text-dark`}>{heading}</h2>
      <div className="flex flex-col min-w-full">
        {questions.map((item: FAQQuestionAnswer, index: number) => (
          <div
            className={`collapse collapse-plus ${
              index < questions.length - 1
                ? `border-b ${
                    theme === "awana"
                      ? "border-gray-200"
                      : "border-borderPrimary"
                  } rounded-none`
                : ""
            }`}
            key={item.question}
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-medium text-dark flex items-center">
              {item.question}
            </div>
            <div className="collapse-content">
              <p className="text-body">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
