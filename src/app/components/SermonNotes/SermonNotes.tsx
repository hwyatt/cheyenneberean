"use client";
import { useEffect, useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { BsArrowRight } from "react-icons/bs";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  return date.toLocaleDateString("en-US", options);
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#f5f6f2",
    padding: 32,
    gap: 32,
    color: "#303439",
  },
  heading: {
    color: "#414920",
    fontSize: "24px",
  },
  headingSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottom: "1px solid #dcd6cb",
    paddingBottom: 8,
  },
  headingDetails: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 2,
  },
  detailText: {
    fontSize: "12px",
    color: "#0c0b08bf",
  },
  questionText: {
    fontSize: "14px",
    maxWidth: "75%",
  },
});

const Doc = ({
  title,
  speaker,
  date,
  questions,
}: {
  title: string;
  speaker: string;
  date: string;
  questions: string[];
}) => (
  <Document style={styles.page}>
    <Page size="A4" style={styles.page}>
      <View style={styles.headingSection}>
        <Text style={styles.heading}>{title}</Text>
        <View style={styles.headingDetails}>
          <Text style={styles.detailText}>{speaker}</Text>
          <Text style={styles.detailText}>{date}</Text>
        </View>
      </View>
      {questions.map((question, index) => (
        <Text key={index} style={styles.questionText}>
          {question}
        </Text>
      ))}
    </Page>
  </Document>
);

const SermonNotes = ({
  title,
  speaker,
  date,
  questions,
}: {
  title: string;
  speaker: string;
  date: string;
  questions: string[];
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <PDFDownloadLink
      className="flex gap-2 items-center text-dark hover:text-link active:text-linkActive font-medium mt-2"
      document={
        <Doc
          title={title}
          speaker={speaker}
          date={formatDate(date)}
          questions={questions}
        />
      }
      fileName={`${title} - ${formatDate(date)}.pdf`}
    >
      Download Reflection Questions
      <BsArrowRight size={24} />
    </PDFDownloadLink>
  );
};

export default SermonNotes;
