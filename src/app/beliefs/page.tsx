import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";
import ReactMarkdown from "react-markdown";

const BeliefsPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "2hRfPACaZKMcTslwu12oYH" } }) {
        items {
          sys {
            id
          }
          pageIntroSection {
            heading
            description
            ctaPrimary
            ctaSecondary
            logo {
              url
            }
          }
          textSection
        }
      }
    }       
    `);

  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection, textSection } = pageData;

  return (
    <div className="page-beliefs min-h-screen flex flex-col items-center gap-8">
      {pageIntroSection && (
        <IntroSection
          header={pageIntroSection.heading}
          image={pageIntroSection.logo ? pageIntroSection.logo.url : null}
          copy={pageIntroSection.description}
          ctaPrimary={
            pageIntroSection.ctaPrimary ? pageIntroSection.ctaPrimary : null
          }
          ctaSecondary={
            pageIntroSection.ctaSecondary ? pageIntroSection.ctaSecondary : null
          }
        />
      )}
      {textSection && (
        <div className="markdown-container">
          <ReactMarkdown>{textSection}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default BeliefsPage;
