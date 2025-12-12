"use client";

// Import Components
import NavBar from "./NavBar";

interface HeaderProps {
  profile: any;
}

export default function Header({ profile }: HeaderProps) {
  return (
    <header className="flex fixed z-3 top-0 w-full">
      <NavBar profile={profile} />
    </header>
  );
}
