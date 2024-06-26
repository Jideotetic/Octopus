import { Outlet, Link, useNavigation } from "react-router-dom";
import accionMfbLogoUrl from "/accionmfb-logo.png";
import octopusImageUrl from "../assets/octopus.png";
import Slider from "../components/Slider";

const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <Slider />}
      <div className="mx-auto grid h-screen w-full max-w-[1440px] grid-cols-rootLayout">
        <div className="flex h-full flex-col justify-between bg-octopusBackgroundImage bg-cover bg-no-repeat px-[40px] pb-4 pt-8 text-white">
          <header className="flex flex-col gap-1">
            <h1 className="font-arbutus text-4xl">
              <Link to="/">Octopus</Link>
            </h1>
            <p className="text-xs font-medium text-[#F9F7F0]">By AccionMFB</p>
          </header>
          <div className="flex flex-col gap-8">
            <img src={octopusImageUrl} alt="" className="h-auto w-full" />
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

        <div className="h-full bg-accionBackgroundImage bg-cover bg-no-repeat px-[30px] pb-4 pt-8">
          <div className="flex justify-end">
            <img src={accionMfbLogoUrl} alt="logo" className="h-auto w-20" />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
