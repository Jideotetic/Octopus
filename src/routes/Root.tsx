import imgUrl from "/accionmfb-logo.png";

const Root = () => {
  return (
    <>
      <div className="grid-cols-rootLayout mx-auto grid h-screen w-full max-w-[1440px]">
        <div className="flex h-full flex-col justify-between border-2 border-red-500 bg-[#E87407] px-[40px] pb-4 pt-8 text-white">
          <header className="flex flex-col gap-1">
            <h1 className="font-arbutus text-4xl">Octopus</h1>
            <p className="text-xs font-medium text-[#F9F7F0]">By AccionMFB</p>
          </header>
          <div className="flex flex-col gap-6">
            <img src={imgUrl} alt="" className="h-auto w-full" />
            <ul className="list-disc pl-4">
              <li>Monitoring</li>
              <li>Management</li>
              <li>Reporting</li>
            </ul>
          </div>
          <footer className="text-xs text-[#F4BC7C]">
            Copyright &copy; 2023 AccionMFB
          </footer>
        </div>

        <div className="border-2 border-red-500"></div>
      </div>
    </>
  );
};

export default Root;
