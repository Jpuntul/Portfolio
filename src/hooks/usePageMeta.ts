import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
}

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    if (description) setMeta("description", description);
    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
}
