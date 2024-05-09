export default async function dashboardLoader() {
  const fetchClasses = new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("dasboard"));
    }, 3000);
  });

  const res = await fetchClasses;
  return { res };
}
