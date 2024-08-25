import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/data/data";
import Image from "next/image";
import { Card } from "@/components/Card";

export const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say
        about my work."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="max-w-xs md:max-w-md p-6 md:p-8">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-6 text-sm md:text-base">
                  {testimonial.text}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
