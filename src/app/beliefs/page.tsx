import Link from "next/link";
import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";

const BeliefsPage = async () => {
  const data = await fetchGraphQL(`
  query {
    beliefsCollection {
      items {
        header
        description
        beliefCollection {
          items {
            title
            description
            bibleVerseReferences
          }
        }
      }
    }
  }
    `);

  const beliefsPageData = data?.data?.beliefsCollection?.items[0];
  const beliefsCollection = beliefsPageData?.beliefCollection.items;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      {beliefsPageData && (
        <>
          <IntroSection
            header={beliefsPageData.header}
            copy={beliefsPageData.description}
          />
          <div className="w-full flex flex-col gap-8">
            {beliefsCollection.map((belief: any) => (
              <div className="flex flex-col gap-4" key={belief.title}>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg">{belief.title}</h3>
                  <p>{belief.description}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {belief.bibleVerseReferences.map((verseRef: string) => {
                    const [verse, url] = verseRef.split(" | ");
                    return (
                      <Link
                        href={url}
                        target="_blank"
                        className="font-semibold text-xs text-accent bg-secondary py-1 px-2 rounded-xl whitespace-nowrap"
                        key={url}
                      >
                        {verse}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BeliefsPage;
