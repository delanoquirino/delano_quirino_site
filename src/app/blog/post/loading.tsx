"use client";

import { Spin } from "antd";

export default function loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black dark:bg-white">
      <Spin size="large" />
    </div>
  );
}
