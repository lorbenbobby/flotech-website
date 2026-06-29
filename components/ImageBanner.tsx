import React from "react";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";
import type { Img } from "@/lib/content";

/**
 * Wide cinematic image strip with an optional caption, used to give pages an
 * image-led, premium feel rather than card-only layouts.
 */
export function ImageBanner({
  image,
  kicker,
  headline,
  eager = false,
}: {
  image: Img;
  kicker?: string;
  headline?: React.ReactNode;
  eager?: boolean;
}) {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="container-x">
        <Reveal>
          <div className="relative">
            <Photo
              src={image.src}
              alt={image.alt}
              eager={eager}
              overlay="bottom"
              rounded="rounded-3xl"
              className="h-[240px] w-full shadow-card sm:h-[340px] lg:h-[420px]"
            />
            {kicker || headline ? (
              <div className="absolute inset-0 flex items-end">
                <div className="p-7 sm:p-10 lg:p-12">
                  {kicker ? (
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                      {kicker}
                    </p>
                  ) : null}
                  {headline ? (
                    <p className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2.4rem]">
                      {headline}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
