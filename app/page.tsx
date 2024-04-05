import Join from "./join";
export default function Home() {
  return <Join />  
}


// Example function to perform a search query against your RAG pipeline
async function fetchRagResults(query: any) {
  const response = await fetch('https://sciphi-b5d6d6d9-e66c-4b83-8f8c-30169f4eb635-qwpin2swwa-ue.a.run.app/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
  });
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  const res =  response.json();
  console.log(res)
  return res;
}
fetchRagResults