import { notionInstance } from "@/shared/fetch/instance";

interface PropertyTitleIF {
  title: {
    plain_text: string;
  }[];
}

interface PropertyRichTextIF {
  rich_text: {
    plain_text: string;
  }[];
}

interface PropertyDateIF {
  date: {
    start: string;
  };
}

interface PropertyContentIF {
  properties: {
    content: PropertyRichTextIF;
    date: PropertyDateIF;
    title: PropertyTitleIF;
  };
}

const getPropertyText = (property: PropertyContentIF) => {
  const properties = property.properties;
  const title = properties.title.title[0].plain_text;
  const content = properties.content.rich_text[0].plain_text;
  const date = properties.date.date.start;
  return { title, content, date };
};

export const getNotionMemo = async () => {
  const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID;
  const production = `https://api.notion.com/v1/databases/${databaseId}/query`;
  const local = `/notion-api/databases/${databaseId}/query`;
  const requestURL = import.meta.env.DEV ? local : production;

  const query = {
    filter: {
      and: [
        { property: "title", title: { is_not_empty: true } },
        { property: "content", rich_text: { is_not_empty: true } },
      ],
    },
    sorts: [{ property: "date", direction: "descending" }],
  };

  const { data } = await notionInstance.post(requestURL, query);
  const results = data.results as PropertyContentIF[];
  const getOnlyText = results.map(getPropertyText);
  return getOnlyText;
};
