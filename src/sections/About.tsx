import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/Techlcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/Toolboxitems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Gaming",
    emoji: "🎮 ",
  },
  {
    title: "HIking",
    emoji: "🥾 ",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Fitness",
    emoji: "💪",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-16">
      <div className="container">
        <SectionHeader
          eyebrow="about Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, What I do and what inspires me"
        />

        <div>
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="       Explore the books shaping my perspectives."
            />

            <div className="w-40  mx-auto mt-8 ">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0 ">
            <CardHeader
              title="My Toolbox"
              description=" Explore the technologies and tools I use to craft exceptional
                digital experiences ."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} />
            <ToolboxItems items={toolboxItems} />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />

            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="sime memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
