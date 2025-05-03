import Tag from "@/components/Tag";
import { BASE_URL } from "@/services/baseurl";

async function TagPage() {
  const response = await fetch(`${BASE_URL}/tags`);
  const tagsData = await response.json();

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
