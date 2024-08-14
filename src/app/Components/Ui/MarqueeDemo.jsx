import Image from "next/image";
import { cn } from "../../../lib/utils";
import Marquee from "../../Animation/magicui/marquee";

const reviews = [
  {
    name: "Tsongo (Tshisola) Mira",
    username: "@Tsongo",
    body: "I am thoroughly impressed by this; it exceeds my expectations. I absolutely appreciate the excellence of this work.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHZTdipI6yGvg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723556477421?e=1729123200&v=beta&t=0l1jWNZ8cVYI9GOqgnQoKdXBjwVBL9ES3NSOLyrCUJc",
  },
  {
    name: "Eloghene (geekelo) Otiede",
    username: "@geekelo",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://media.licdn.com/dms/image/C4E03AQFEJHEJKBCFWg/profile-displayphoto-shrink_800_800/0/1658831715875?e=1729123200&v=beta&t=ZrX_FgnJ_DLwn96zf0zbk16qXsYEO0tchYurAuqUiqE",
  },
  {
    name: "El Dixer",
    username: "@ElDixer",
    body: "Words cannot fully capture my admiration for this. It is exceptional, and I am genuinely thrilled with the result.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHUQ1xGo58wsA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687465055150?e=1729123200&v=beta&t=u_BCIgT34ESRXTjMLfQDK5imEqO9TjgKt0N-H2nGrPo",
  },
  {
    name: "Arnold Sibita",
    username: "@Sibita",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://media.licdn.com/dms/image/D4D03AQGQMygYi0753A/profile-displayphoto-shrink_800_800/0/1721858116242?e=1729123200&v=beta&t=Y-pj9pkUExKBFtd3rFFGQMIoZAssxW6SiOVWGd1y-qw",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm text-black font-medium">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-black">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm line-clamp-3">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
