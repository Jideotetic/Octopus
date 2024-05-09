export default async function rootLoader() {
  const fetchClasses = new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("root"));
    }, 3000);
  });

  const res = await fetchClasses;
  return { res };
}
