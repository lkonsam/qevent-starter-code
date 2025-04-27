"use client";

import Tag from "@/components/Tag";
import React from "react";
import { fetchTags } from "@/api/api";

function TagPage() {
  const [tagsData, setTagsData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTags();
        console.log("Response:", response.slice(0, 3));
        setTagsData(response);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-full">
      <div className="flex flex-wrap items-center justify-center mt-8 mb-32">
        {tagsData?.map(
          (tagData, index) =>
            tagData && (
              <div key={index} className="m-2">
                <Tag text={tagData.name} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TagPage;
