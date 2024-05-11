import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import HeaderLogo from "./header-logo";
import Navigation from "./navigation";
import { Loader2 } from "lucide-react";
import Welcome from "./welcome";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-cyan-700 to-cyan-500 px-4 py-8 lg:px-16 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between mb-14 w-full">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>

          <UserButton afterSignOutUrl="/"/>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400"/>
          </ClerkLoading>
        </div>
        <Welcome />
      </div>
    </header>
  );
};

export default Header;
