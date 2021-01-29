import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const casesDirectory = path.join(process.cwd(), "cases");

export function getSortedCasesData() {
  // Get file names under /cases
  const fileNames = fs.readdirSync(casesDirectory);
  const allCasesData = fileNames.map((fileName, index) => {
    // Remove ".md" from file name to get id
    const id = index;

    // Read markdown file as string
    const fullPath = path.join(casesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the case metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  return allCasesData.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllCaseIds() {
  const fileNames = fs.readdirSync(casesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getCaseData(id) {
  const fullPath = path.join(casesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the case metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
