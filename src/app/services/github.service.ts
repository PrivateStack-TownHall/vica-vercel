const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;

export async function getContents(path = "") {
   const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`,
      {
         headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
         },
         cache: "no-store",
      }
   );

   return response.json();
}