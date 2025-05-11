import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginRow from "./LoginRow";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex w-full flex-col gap-[74px] bg-black-900 md:gap-[55px] sm:gap-[37px]">
      <Header className="bg-gray-600_19" />
      <LoginRow />
      <Footer />
    </div>
  );
}