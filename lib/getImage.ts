export async function getWikipediaImage(
  name: string
) {
  try {

    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
    );

    const data = await response.json();

    return (
      data.thumbnail?.source ||
      "https://placehold.co/600x800/111/FFF?text=TRICOVERSE"
    );

  } catch {

    return "https://placehold.co/600x800/111/FFF?text=TRICOVERSE";
  }
}