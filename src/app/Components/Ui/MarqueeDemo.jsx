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
    name: "Benjamin Kisenge",
    username: "@Kisenge",
    body:"I am deeply impressed by this work, it surpasses my expectations. I truly value the exceptional quality and excellence demonstrated.",
    img: "https://media.licdn.com/dms/image/v2/D4D35AQF537cb-jwO5A/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1690884162923?e=1724252400&v=beta&t=Ky7lm1vwF3qudF3kXfh9A0Q9icFBzB-aVxTbQt1L67g",
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
    body: "I am truly impressed and at a loss for words. This is outstanding, and I am extremely pleased with it.",
    img: "https://media.licdn.com/dms/image/D4D03AQGQMygYi0753A/profile-displayphoto-shrink_800_800/0/1721858116242?e=1729123200&v=beta&t=Y-pj9pkUExKBFtd3rFFGQMIoZAssxW6SiOVWGd1y-qw",
  },
  {
    name: "Jonathan Z",
    username: "@JonathanZ",
    body: "I am utterly speechless. This is exceptional, and I am genuinely delighted with the result",
    img: "https://media.licdn.com/dms/image/C4E03AQENTdcRviwSHA/profile-displayphoto-shrink_800_800/0/1640814336093?e=1729123200&v=beta&t=c5aYxPPVM0FT3dChcXha_dzl70RLWaSMUiESyrDA9tI",
  },
  {
    name: "Joel Kalema",
    username: "@JKalema",
    body: "I am profoundly impressed. This is outstanding, and I am very pleased with the outcome.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGRJrS9sT2hBQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685740141403?e=1729123200&v=beta&t=q3ixaA3NuRT0A2fDoRQIH4dgCVqW3anzk5VZo1BBlbo",
  },
  {
    name: "Tumaini Maganiko",
    username: "@Maganiko",
    body: "I am completely astounded. This is extraordinary, and I am thoroughly impressed with the results.",
    img: "https://media.licdn.com/dms/image/D4D03AQEshqA4oHIYBQ/profile-displayphoto-shrink_800_800/0/1714038633177?e=1729123200&v=beta&t=3CfIQcQlcYKGKlcpmQWwVhAoOe3IXmP-7mrfuUFJ23c",
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
