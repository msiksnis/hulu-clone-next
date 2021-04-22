import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header
      className="flex flex-col sm:flex-row m-5
      justify-between items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon title="HOME" Icon={HomeIcon} />
        <HeaderIcon title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderIcon title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderIcon title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderIcon title="SEARCH" Icon={SearchIcon} />
        <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}
