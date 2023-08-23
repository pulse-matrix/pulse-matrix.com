import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import {
  LOGO_PALETTE,
  MAIN_PALETTE,
  PULSE_MATRIX_SINCE,
} from "../utils/constants.ts";
import { cx } from "https://esm.sh/@twind/core@1.1.3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pulse Matrix</title>
      </Head>
      {/* <div class="px-4 py-8 mx-auto bg-[#1d2334]"> */}
      <div class={cx(LOGO_PALETTE.background, "px-4 py-8 mx-auto")}>
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/pulse-matrix-logo.png"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="text-4xl font-bold text-white">Since</p>
          <p class="text-2xl font-bold text-white">{PULSE_MATRIX_SINCE}</p>
        </div>
      </div>
      <div
        class={`bg-[${MAIN_PALETTE.red}] flex w-screen h-screen`}
      />
    </>
  );
}
