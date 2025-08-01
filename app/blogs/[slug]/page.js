import { notFound } from "next/navigation";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Flavors That Warm Your Heart in the Streets of Boston",
    excerpt:
      "Looking for a unique and refreshing way to impress your guests? Our mobile ice cream truck offers gourmet treats and unforgettable experiences.",
    image: "/images/blogs/blog1.avif",
    slug: "boston-ice-cream-truck-summer-party",
    content: `
      TomandJerry Ice Cream: Flavors That Warm Your Heart in the Streets of Boston
In the lively streets of Boston, few things bring more joy than a cold treat on a warm day—and TomandJerry Ice Cream delivers that magic on wheels. 
Known for its vibrant cartoon-themed design and wide range of flavors, this ice cream truck is a favorite among both kids and adults.

From classic vanilla and chocolate to quirky creations like cotton candy swirl and bubblegum blast, TomandJerry Ice Cream has something for everyone. 
The truck cruises through Boston’s neighborhoods, showing up at local events, school parties, and community gatherings with its iconic cheerful jingle.

What sets it apart is not just the quality of the ice cream but the friendly service and playful atmosphere. The staff is welcoming, the servings are generous, and the experience feels like a bite of nostalgia. Whether you’re a Boston native or just passing through, TomandJerry Ice Cream is a sweet way to enjoy the city.

    `,
    date: "2025-07-10",
  },
  {
    id: 2,
    title: "Why Bostonians Are Booking Ice Cream Trucks for Every Occasion",
    excerpt:
      "From birthday parties to corporate events, here’s why renting a dessert catering truck makes all the difference.",
    image: "/images/blogs/blog2.png",
    slug: "ice-cream-truck-event-benefits",
    content: `
In Boston, the trend is clear—ice cream trucks are the life of the party. Whether it’s a wedding, a block party, a school field day, or a corporate event, dessert trucks are quickly becoming the go-to for hosts who want to impress.

Here’s why:
- Instant Atmosphere: Our colorful truck and joyful music set the mood.
- Customizable Menus: We offer vegan, gluten-free, and allergen-friendly options.
- Zero Hassle: We bring everything to you. No cleanup, no stress.
- Crowd Engagement: Kids love it. Adults line up for seconds.

Our truck transforms any occasion into a celebration—no matter the age or season.


    `,
    date: "2025-06-28",
  },
  {
    id: 3,
    title: "Behind the Scoop: The Story of Boston’s Favorite Ice Cream Truck",
    excerpt:
      "We don’t just serve ice cream, we deliver moments of joy. Discover how our truck enhances weddings, school events, and more.",
    image: "/images/blogs/blog3.jpg",
    slug: "mobile-dessert-catering-joy",
    content: `

It started with one goal: to bring handcrafted ice cream and happiness to every corner of Boston. What began as a weekend passion project quickly became a citywide favorite.

We’re proud to be locally owned, sourcing ingredients from New England dairies and farmers. Every scoop we serve tells a story of community, creativity, and commitment to quality.

From our very first event at a neighborhood block party in Dorchester to serving thousands across Back Bay, Cambridge, and beyond—we’ve stayed true to our roots: delivering more than ice cream, but real moments of joy.

Want to taste the story? We’re just a call away.


    `,
    date: "2025-06-15",
  },
];

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}



export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="bg-pink-50 text-black min-h-screen py-16 px-4 ">
      <article className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden mt-5">
        <header className="p-8 pb-0 ">
          <h1 className="font-berkshire text-shadow-lg text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Published on <time>{post.date}</time>
          </p>
        </header>

        <div className="relative w-full h-72 md:h-[450px] p-20px">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="px-8 py-10 prose prose-p:text-gray-700 prose-lg max-w-none">
          {/* <p>{post.content}</p> */}

          {post.content.split("\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
