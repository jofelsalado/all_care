import { GetServerSideProps, NextPage } from "next";
import router, { Router, useRouter } from "next/router";
import { Suspense, useState } from "react";
import { prisma } from "../lib/prisma";
import { HomeCarousel } from "./home/home_carousel";

import { HomeForm } from "./home/home_form";
import { HomeTitle } from "./home/home_title";
import { HomeLayout } from "./layout/home_layout";

export default function Home() {
  return (
    <div className="">
      <div>
        <HomeCarousel />
      </div>
      <div className="mt-24 ">
        <HomeTitle />
        <HomeForm />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};
