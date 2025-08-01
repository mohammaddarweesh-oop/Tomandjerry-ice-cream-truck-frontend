import Image from "next/image";

export default function IntroParagraph() {
  return (
    <section className="py-16 px-6 bg-pink-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* نص المعلومات */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-berkshire text-pink-600 mb-6 hidden md:block">
            Make your child's birthday a sweet success with Kal's Ice Cream
            Truck!
          </h2>
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              Our mobile ice cream shop brings the fun and excitement right to
              your doorstep. Enjoy a variety of delicious flavors, cones, and
              toppings that will delight guests of all ages. Book Kal's Ice
              Cream Truck today for an unforgettable birthday party experience.
            </p>
          </div>
        </div>

        {/* صورة + العنوان لموبايل فقط */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-berkshire text-pink-600 mb-6 block md:hidden text-center">
            Make your child's birthday a sweet success with Kal's Ice Cream
            Truck!
          </h2>
          <div
            className="rounded-xl overflow-hidden shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-105
"
          >
            <Image
              src="/images/Birthday Parties3.jpg"
              alt="Make your child's birthday a sweet success with Kal's Ice Cream Truck!"
              width={600}
              height={634}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
