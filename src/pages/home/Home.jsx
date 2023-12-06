import React from "react";
import { Brand, CTA } from "../../components";

import {
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header
} from "../../containers";

export default function Home() {
  return (
    <div>
      {/* navbar / header */}

      <div className="gradient__bg">
        <Header />
      </div>

      {/* end of nav/header */}
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </div>
  );
}
