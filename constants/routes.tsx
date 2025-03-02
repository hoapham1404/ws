// constants/routes.ts

import FakeBlueScreen10 from "@/components/(prank-screen)/blue-screen-of-death-windows-10/FakeBlueScreen10";
import FakeBlueScreen10_Sidebar from "@/components/(prank-screen)/blue-screen-of-death-windows-10/FakeBlueScreen10_Sidebar";
import FakeBlueScreen from "@/components/(prank-screen)/blue-screen-of-death-windows/FakeBlueScreen";
import BrokenScreen from "@/components/(prank-screen)/broken-screen/BrokenScreen";
import HackerSpeedInput from "@/components/(prank-screen)/hacker-screen/HackerSpeedInput";
import HackerTyper from "@/components/(prank-screen)/hacker-screen/HackerTyper";
import { WhiteNoisePlayButton } from "@/components/(prank-screen)/white-noise/WhiteNoisePlayButton";
import WhiteNoiseScreen from "@/components/(prank-screen)/white-noise/WhiteNoiseScreen";
import DVDSaver from "@/components/DVDSaver/DVDSaver";
import FakeChromeOS from "@/components/FakeChromeOS/FakeChromeOS";
import FakeOSUpdate from "@/components/FakeOSUpdate/FakeOSUpdate";
import FakeUbuntu from "@/components/FakeUbuntu/FakeUbuntu";
import FakeUpdateWin10 from "@/components/FakeUpdateWin10/FakeUpdateWin10";
import FakeUpdateWinXP from "@/components/FakeUpdateWinXP/FakeUpdateWinXP";
import FlipClockPreview from "@/components/FlipClock/FlipClockPreview";
import MotivationQuotesPreview from "@/components/MotivationQuotes/MotivationQuotesPreview";
import MotivationQuotesRight from "@/components/MotivationQuotes/MotivationQuotesRight";
import NoSignalPreview from "@/components/NoSignalPage/NoSignalPreview";
import ChromeOSUpdateScreen from "@/public/chrome-os-update-screen.webp";
import WindowsXPUpdateScreen from "@/public/windows-xp-update-screen.webp";
import Windows10UpdateScreen from "@/public/windows-10-update-screen.webp";
import Ubuntu2204UpdateScreen from "@/public/ubuntu-22-04-update-screen.webp";
import MacOSXUpdateScreen from "@/public/mac-os-x-update-screen.webp";
import WhiteNoiseIcon from "@/public/white-noise.webp";
import BrokenScreenIcon from "@/public/broken.webp";
import DeathXPIcon from "@/public/death.webp";
import Death10Icon from "@/public/death-10.webp";
import HackerTyperIcon from "@/public/hacker-typer.webp";
import DVDIcon from "@/public/dvd.webp";
import FlipClockIcon from "@/public/flip-clock.webp";
import MotivationalQuoteIcon from "@/public/motivational-quote.webp";
import NoSignalIcon from "@/public/saver-color-bars.png";

import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export class RouteStore {
  name: string;
  path: string;
  color?: string;
  icon?: string;
  isAxis?: boolean;
  title: string;
  type: "color" | "prank" | "fake-update" | "screensaver";
  components?: {
    left?: ReactNode;
    mid?: ReactNode;
    right?: ReactNode;
    bottom?: ReactNode;
  };
  thumbnail?: StaticImageData;
  tips?: Record<string, string>;
  subTips?: Record<string, string[]>;
  constructor(
    name: string,
    path: string,
    title: string,
    type: "color" | "prank" | "fake-update" | "screensaver",
    color?: string,
    icon?: string,
    isAxis?: boolean,
    thumbnail?: StaticImageData,
    tips?: Record<string, string>,
    subTips?: Record<string, string[]>,
  ) {
    this.name = name;
    this.path = path;
    this.color = color;
    this.icon = icon;
    this.isAxis = isAxis;
    this.title = title;
    this.type = type;
    this.thumbnail = thumbnail;
    this.tips = tips;
    this.subTips = subTips;
  }
}

export const routes: RouteStore[] = [
  // Color Screens
  {
    name: "White Screen",
    path: "/",
    color: "#FFFFFF",
    isAxis: false,
    title: "White screen",
    type: "color",
    tips: {
      "white screen to copy drawings":
        "I needed to have something bright under a paper, so i could redraw a image easier.",
      "white screen as a light source":
        "Lighting up the back of a lightbox for product photography",
      "white screen to check monitor":
        "Check your monitor and find dead pixels.",
      "white screen to blank screen":
        "Don't want to be distrupted? Want to take a brake? Use a white screen to blank your screen.",
      "white screen as a light to read":
        "To get a source of light and be able to read books when it's dark in the room and the light switch is too far away.",
      "white screen as a light to makeup":
        "As a bright light source for doing makeup or taking pictures",
      "white screen to clean monitor":
        "Silly, but I use it for monitor cleaning. It makes things on the screen obvious. :) I also use it to validate plain colour reproduction for different monitors, but that only comes up rarely and I'm not looking for professional colour grading.",
      "white screen to look for dust":
        "Consistent backdrop to clean my monitor on, and also to check for dead/stuck pixels. Also sometimes for lighting my face when I'm using a webcam.",
      "white screen to catch flies":
        "I was catching little flies as they were attracted to white screen on my display",
      "white screen to make a flipbook":
        "I'm working on a animated sequence, and i'm doing it the traditional way (by hand), so i need a white surface with light that allows me to put one piece of paper over another and be able to see both, so since i don't have a professional screen for this, i'm using my computer and putting the white screen on it so i don't touch anything by mistake",
      "white screen to focus yourself":
        "While studying, I use 2 screens, one with a timer and one to search whatever I need on the internet. When I am not searching, I put the white screen so I don't get distracted with anything on the computer",
      "white screen to configure your monitor settings":
        "Useful when adjusting settings in my secondary monitor (since it's quite old it doesn't just set stuff how it should be by default). Settings like vertical/horizontal position and vertical/horizontal scale. Also useful when searching for dead pixels.",
      "white screen to draw at night":
        "If I'm drawing on paper, I can put paper on top of my display drawing tablet and see what I'm drawing at night",
      "White Screen for Lighting":
        "Turn your display into a simple and efficient light source with our white screen tool. Perfect for video calls or photography where extra lighting is needed.",
      "White Screen for Visual Purity":
        "Experience a pure, clean and soothing visual environment using our full-screen white display. Ideal for relaxing, meditating or focusing on tasks without visual distractions.",
      "White Screen for Design Work":
        "Utilize our white screen tool as a blank canvas for design, drawing or any creative activities. A blank white screen allows your creativity to flow unimpeded.",
    },
    subTips: {
      "White screen for cleaning": [
        "white screen for monitor cleaning",
        "white screen to find dead pixels",
        "white screen to find dirty spots",
      ],
      "White light online": [
        "white light for reading",
        "white light for video calls",
        "white color light",
        "white screen/light for selfie",
        "white led lights online",
      ],
      Others: [
        "white screen for projector",
        "white screen for kids",
        "white fullscreen background",
      ],
    },
  },
  {
    name: "Black Screen",
    path: "/black-screen",
    color: "#000000",
    isAxis: false,
    title: "Full Black Screen",
    type: "color",
    tips: {
      "black screen to make second monitor dark without turning it off":
        "Quickly make second monitor dark without turning it off when playin some atmospheric game or watching some movie that turned out to be worth of doing so.",
      "black screen to save electricity":
        "Trying to save electricity, reduce carbon emission.",
      "black screen to hide fact computer is active":
        "To put on my 4 monitors when I go to sleep, instead of putting them to sleep.",
      "black screen to clean monitor":
        "Easier to see spots when I'm wiping off my screen",
      "black screen to make a dark background":
        "Background for a game. Screen is too big, 3440x1440. Don't like to play it that big, so i do 2560x1440. Need black bezels at both sides.",
      "black screen to help prevent burn in plasma TV":
        "I have an old plasma TV. I don't have computer speakers so when I want to play music loud, I turn on my TV and hook it up via HDMI. Plasma's are highly susceptible to burn-in so rather than leaving Windows Media Player or whatever on the screen, I use black screen to help prevent burn in. I've used various websites. But they don't seem to stay online for very long.",
      "black screen to concentrate while studying":
        "To not turn off my screen and concentrate while studying. Well my screen is very bright and it doesnt help with concentration, a black screen fixes that.",
      "black screen to relax eyes":
        "Because I need to relax my eyes and have just a black screen even when I play music on my pc or want to switch quickly between all black and something else. The most valuable is the quality of it, of the color and the rest and, of course, for it to be easy to switch in and out of fullscreen mode.",
      "Black Screen for Focus and Minimalism":
        "Embrace minimalism and reduce distractions with our black screen tool. Ideal for focus-driven tasks or for individuals practicing digital minimalism.",
      "Black Screen for Power-Saving":
        "Take advantage of our black screen tool as a power-saving solution for OLED and AMOLED displays. Displaying black pixels can contribute to battery conservation.",
      "Black Screen for Digital Artwork":
        "Artists can use our full-screen black display as a canvas for creating striking contrast in digital artwork. Black backgrounds can enhance the depth and intensity of colors.",
    },
    subTips: {
      "Black screen for cleaning": [
        "black screen for monitor cleaning",
        "black screen to find dead pixels",
        "black screen to find dirty spots",
      ],
      "Black color online": [
        "blank computer screen",
        "total black screen",
        "full black screen",
      ],
      Others: [
        "black screen for projector",
        "black screen for kids",
        "black fullscreen background",
      ],
    },
  },
  {
    name: "Red Screen",
    path: "/red-screen",
    color: "#FF0000",
    isAxis: false,
    title: "Red screen",
    type: "color",
    tips: {
      "Red Screen for Film and Photography":
        "Utilize our red screen to experiment with color filters and effects in film and photography. The vibrant red background can add a dramatic touch to your compositions.",
      "Red Display for Eye Health":
        "Our red screen tool can be used to decrease the impact of blue light, aiding in eye comfort and health, particularly in low light conditions or before sleep.",
      "Red Screen for Virtual Events":
        "Create a captivating virtual event environment with our full-screen red display. It can set a distinctive tone and mood for your gatherings.",
      "Red Screen for Graphic Design":
        "Graphic designers can leverage our red screen tool to create bold and impactful designs. The color red can evoke strong emotions and grab viewer's attention.",
      "Red Screen for Thematic Presentations":
        "Educators and presenters can use our red screen to create thematic presentations, highlighting important points and capturing the audience's interest.",
      "bright red screen to make tiktoks":
        "Because I have blue LED lights on and it matches perfectly making my face or a part of my face red and leaving the blue lights behind me. I liked the red screen tbh, it's cool to make tiktoks or like photos and edit them to make them look professional.",
      "red light screen for online calls":
        "For colorcast correction when using Google Meets.",
      "red screen to preserve night vision":
        "Not hard on the eyes, especially when coming out of a dark area",
      "red screen to read book": "To read a book with less blue light.",
      "red screen to fix projector": "it helps fix a projectors keystone",
      "red light to prank": "To prank my friends and say I have L.E.D's.",
    },
    subTips: {
      "Red color online": [
        "red screen for tiktoks",
        "red screen for online calls",
        "red screen for photos",
      ],
      "Red light online": [
        "red color light",
        "red light for selfie",
        "red led lights online",
      ],
      Others: [
        "red screen for projector",
        "red blank screen for kids",
        "full red screen background",
      ],
    },
  },
  {
    name: "Green Screen",
    path: "/green-screen",
    color: "#00FF00",
    isAxis: false,
    title: "Green screen",
    type: "color",
    tips: {
      "Green Screen for Video Content Creation":
        "Leverage our full-screen green display to create professional-quality videos. The green screen is perfect for video effects and post-production editing.",
      "Soothing Visual Experience with Green Display":
        "Use our green screen tool to create a calming visual environment. The soothing hues of green can help reduce eye strain and promote relaxation.",
      "Green Screen for Immersive Gaming Experience":
        "Enhance your gaming experience with our full-screen green display. It can serve as a dynamic background for a more immersive gaming environment.",
      "Green Screen for Virtual Meetings":
        "Utilize our green screen tool to add professional backgrounds during your virtual meetings. It can significantly improve the quality of your video calls.",
      "Green Screen as Teaching Aid":
        "Educators can use our green screen tool to make online teaching more interactive and engaging. It's a great way to illustrate complex concepts visually.",
      "green screen to photoshop":
        "Photoshop myself in my room so when i take it down and im still in my room people are like oh wow for a few seconds which makes me happy because am in a way the wow factor of those few seconds of their lives.",
      "green screen to relax":
        "In a class room situation, while pausing computer work and listening to others. Green, because it is the most relaxing of the colours. It is just a silent, motionless green colour, the colour of trees and grass. Thanks to it, the screen emits some green, relaxing light during computer work pauses.",
      "green screen for online calls":
        "For adding a green glow during meeting.",
    },
    subTips: {
      "Green screen for cleaning": [
        "green screen for monitor cleaning",
        "green screen to find dead pixels",
        "green screen to find dirty spots",
      ],
      "Green light online": [
        "green light for video calls",
        "green screen lighting",
        "green color light",
        "green light for selfie",
        "green led lights online",
      ],
      Other: [
        "green screen for projector",
        "green screen for kids",
        "green fullscreen background",
      ],
    },
  },
  {
    name: "Blue Screen",
    path: "/blue-screen",
    color: "#0000FF",
    isAxis: false,
    title: "Blue screen",
    type: "color",
    tips: {
      "Relaxation with Blue Screen Display":
        "Discover the soothing power of our full-screen blue display. Its calming blue tones can help reduce stress and promote relaxation after a long day.",
      "Aid for Sleep with Blue Screen Tool":
        "Our blue screen tool can be used as a sleep aid. The soft, calming blue light is known to encourage sleepiness and improve your sleep quality.",
      "Blue Light Filter for Digital Eye Strain":
        "Use our full-screen blue display as a blue light filter to alleviate digital eye strain. Ideal for long hours of screen time, it can help maintain your eye health.",
      "Blue Screen as Visual Aid in Presentations":
        "Use our blue screen tool as a visual aid in presentations. The blue background can help emphasize text and images, enhancing communication and comprehension.",
      "blue screen to make videos":
        "Because my YouTube videos are better with a blue screen & because green screens are overrated",
      "blue screen to copy image": "To copy an image my classmate drew",
      "blue screen to make a vibe": "I like the vibe it gives",
    },
    subTips: {
      "Blue Screen for Cleaning": [
        "Blue screen for monitor cleaning",
        "Blue screen to find dead pixels",
        "Blue screen to find dirty spots",
      ],
      "Blue Light Online": [
        "Blue light for video calls",
        "Blue color light",
        "Blue light for selfie",
        "Blue led lights online",
      ],
      Others: [
        "Blue screen for projector",
        "Blue screen for kids",
        "Blue fullscreen background",
      ],
    },
  },
  {
    name: "Yellow Screen",
    path: "/yellow-screen",
    color: "#FFFF00",
    isAxis: true,
    title: "Yellow screen",
    type: "color",
    tips: {
      "Versatile Yellow Background for Content":
        "Immerse your audience in a warm and inviting environment with a full-screen yellow display. Ideal for injecting energy and positivity into your online content, virtual classes, or live streams.",
      "Yellow Screen for Eye Comfort":
        "Improve visual comfort with a yellow tinted screen. Use our tool to reduce eye strain from blue light, especially during night-time browsing or long working hours.",
      "Creative Mood Board Starter":
        "Kick-start your creative projects with a yellow mood board. Our full-screen yellow display can help inspire creative thinking and design concepts.",
      "Device Screen Testing":
        "Test the color accuracy of your display device with a full-screen yellow output. It's a handy tool for fine-tuning the color settings of monitors, tablets, or smartphones.",
      "Interactive Teaching Aid":
        "Use a full-screen yellow display as a teaching aid in virtual classrooms. It can serve as an engaging background to present learning materials, highlight information, and draw student attention.",
      "yellow screen to make a vibe": "I like the vibe it gives",
      "yellow screen to copy image": "To copy an image my classmate drew",
      "yellow screen to make videos":
        "Because my YouTube videos are better with a yellow screen & because green screens are overrated",
      "yellow screen for online calls":
        "For adding a yellow glow during meeting.",
    },
    subTips: {
      "Yellow screen for cleaning": [
        "yellow screen for monitor cleaning",
        "yellow screen to find dead pixels",
        "yellow screen to find dirty spots",
      ],
      "Yellow color online": [
        "blank computer screen",
        "total yellow screen",
        "full yellow screen",
      ],
      Others: [
        "yellow screen for projector",
        "yellow screen for kids",
        "yellow fullscreen background",
      ],
    },
  },
  {
    name: "Orange Screen",
    path: "/orange-screen",
    color: "#FFA500",
    isAxis: true,
    title: "Orange screen",
    type: "color",
    tips: {
      "Full-Screen Orange for Virtual Backgrounds":
        "Use our tool to generate a lively orange screen, perfect for virtual backgrounds during online meetings, webinars, or virtual social gatherings. A splash of color to liven up your digital interactions.",
      "Orange Screen for Calming Sleep Aid":
        "Benefit from the calming and soothing effects of an orange display. Reduce the harsh blue light and create a sleep-friendly environment for browsing or reading before bedtime.",
      "Creative Project Inspiration with Orange":
        "Spark creativity with a vibrant full-screen orange display. Ideal for inspiring design projects, arts and crafts, or kick-starting your creative process.",
      "Device Display Calibration with Orange Screen":
        "Verify the color rendering of your digital displays with an orange full-screen output. It's an essential tool for those seeking to fine-tune their device color settings for graphic design or photo editing.",
      "Interactive Orange Learning Tool":
        "Utilize a full-screen orange display as a dynamic visual aid for teaching. The bold color can highlight key information, making e-learning more engaging and impactful.",
      "Orange Screen to Make a Vibe": "I like the vibe orange gives",
      "Orange Screen to Copy Image": "To copy an image my classmate drew",
      "Orange Screen to Make Videos":
        "Because my YouTube videos are better with a orange screen",
      "Orange Screen for Online Calls":
        "For adding a orange glow during meeting.",
    },
    subTips: {
      "Orange screen for cleaning": [
        "orange screen for monitor cleaning",
        "orange screen to find dead pixels",
        "orange screen to find dirty spots",
      ],
      "Orange color online": [
        "blank computer screen",
        "total orange screen",
        "full orange screen",
      ],
      Others: [
        "orange screen for projector",
        "orange screen for kids",
        "orange fullscreen background",
      ],
    },
  },
  {
    name: "Pink Screen",
    path: "/pink-screen",
    color: "#FFC0CB",
    isAxis: true,
    title: "Pink screen",
    type: "color",
    tips: {
      "Pink Background for Content Creation":
        "Effortlessly achieve a pink backdrop for your online content creation. This tool offers a full-screen pink display that is perfect for adding a vibrant pop of color to your videos, livestreams, and virtual presentations.",
      "Easy Pink Light Therapy":
        "Transform your screen into a therapeutic pink light source. Benefit from the soothing effects of pink light therapy right from your device's screen. Ideal for relaxation, mood enhancement, and stress reduction.",
      "Visual Design Inspiration":
        "Inspire your design creativity with a full-screen pink canvas. Our tool allows designers to immerse themselves in the color pink, stimulating creative ideas for design projects.",
      "Color Calibration Testing":
        "Evaluate your screen's color accuracy with our tool's pink display. Perfect for checking the fidelity of the pink hue on different devices and screen settings.",
      "Attention-Grabbing Display":
        "Grab attention with a full-screen pink display during online presentations, webinars, or virtual meetings. Use our tool to emphasize key moments and engage your audience in a unique way.",
      "Pink Screen to Make a Vibe": "I like the vibe pink gives",
      "Pink Screen to Copy Image": "To copy an image my classmate drew",
      "Pink Screen to Make Videos":
        "Because my YouTube videos are better with a pink screen",
      "Pink Screen for Online Calls": "For adding a pink glow during meeting.",
    },
    subTips: {
      "Pink screen for cleaning": [
        "pink screen for monitor cleaning",
        "pink screen to find dead pixels",
        "pink screen to find dirty spots",
      ],
      "Pink color online": [
        "blank computer screen",
        "total pink screen",
        "full pink screen",
      ],
      Others: [
        "pink screen for projector",
        "pink screen for kids",
        "pink fullscreen background",
      ],
    },
  },
  {
    name: "Purple Screen",
    path: "/purple-screen",
    color: "#800080",
    isAxis: true,
    title: "Purple screen",
    type: "color",
    tips: {
      "Full-Screen Purple for Wellness Apps":
        "Integrate our tool into your wellness app to generate a soothing purple screen, perfect for meditation and mindfulness exercises. The serene color aids relaxation and mental wellbeing.",
      "Purple Screen for Lighting Effect":
        "Create a dynamic lighting effect with a full-screen purple display. Perfect for setting a unique ambience for your video calls, virtual events, or music sessions.",
      "Color Theory Study with Purple Screen":
        "Utilize a vibrant full-screen purple display as a learning tool for color theory. It helps art students and designers understand the impact and significance of color in their work.",
      "Display Testing with Purple Full Screen":
        "Check the color accuracy of your monitors or screens with our tool that generates a full-screen purple display. Essential for designers, photographers, and videographers.",
      "Interactive Purple Display for Children's Learning":
        "Engage children in interactive e-learning with a full-screen purple display. The bold color stimulates imagination and focus, enhancing the learning experience.",
      "purple screen to make a vibe": "I like the vibe purple gives",
      "purple screen to copy image": "To copy an image my classmate drew",
      "purple screen to make videos":
        "Because my YouTube videos are better with a purple screen",
      "purple screen for online calls":
        "For adding a purple glow during meeting.",
    },
    subTips: {
      "Purple screen for cleaning": [
        "purple screen for monitor cleaning",
        "purple screen to find dead pixels",
        "purple screen to find dirty spots",
      ],
      "Purple color online": [
        "blank computer screen",
        "total purple screen",
        "full purple screen",
      ],
      Others: [
        "purple screen for projector",
        "purple screen for kids",
        "purple fullscreen background",
      ],
    },
  },
  {
    name: "Zoom Lighting",
    path: "/zoom-lighting",
    color: "#FFC5C2",
    isAxis: true,
    title: "Lighting for zoom calls",
    type: "color",
    tips: {
      "Customized Lighting for Video Conferencing":
        "Use our zoom lighting screen tool to create the perfect lighting setup for your video calls. With adjustable color and temperature, you can achieve professional-level video conference lighting effortlessly.",
      "Photography Backdrop with Zoom Lighting Screen":
        "Enhance your photography setup with our adjustable zoom lighting screen. Adjust the color and temperature to suit the mood of your photoshoot and create stunning images.",
      "Improve eLearning Experience with Optimal Lighting":
        "With our zoom lighting screen, create a conducive learning environment for eLearning. Customizable light settings ensure optimal reading comfort and improved concentration.",
      "Web Developers Lighting Test Tool":
        "Web developers can use our full-screen zoom lighting screen to test how different light temperatures and colors affect the appearance of their designs, helping to create visually engaging and accessible websites.",
      "Color Therapy with Zoom Lighting Screen":
        "Therapists and wellness coaches can utilize our zoom lighting screen with adjustable color and temperature for color therapy sessions, promoting relaxation and healing.",
      "white screen as a lighting for zoom calls":
        "For video calls! I don't have a easy ring light, but do have two screens. So I can use one of the screens to light my face!",
      "Zoom Lighting to Get Brightness":
        "I use it to get brightness while i´m in a video call",
      "Zoom Lighting to Light Up":
        "To light up when I use videoconference calls",
      "Zoom Lighting to Turns My Monitor Into a Light":
        "Turns my monitor into a light to offset being backlit on video calls",
    },
  },
  // Prank Screens
  {
    name: "White noise",
    path: "/white-noise",
    icon: "https://emojicdn.elk.sh/🔊",
    title: "White noise for sleep",
    type: "prank",
    components: {
      mid: <WhiteNoiseScreen />,
      right: <WhiteNoisePlayButton />,
    },
    thumbnail: WhiteNoiseIcon,
    tips: {
      "How to Use White Noise to Enhance Your Concentration":
        "Discover how white noise generators become indispensable tools for individuals aiming to amplify their focus and productivity. By drowning out distracting noises, white noise establishes a consistent auditory backdrop, enabling users to dive deep into work, studies, or reading. This guide explores the significant concentration boost provided by white noise video and audio, making it a top choice for productivity enthusiasts.",
      "Using White Noise for Better Sleep: A Comprehensive Guide":
        "Explore the transformative power of white noise in facilitating restful sleep amidst a world full of disturbances. This comprehensive guide delves into how white noise videos and audio tracks mask disruptive environmental sounds, providing a tranquil soundscape conducive to falling asleep swiftly and enjoying uninterrupted rest. Ideal for anyone struggling with sleep, discover the secret to a peaceful night's rest.",
      "White Noise for Soothing Babies: Tips and Tricks":
        "Uncover the magic of white noise in calming crying infants and promoting better sleep. Mimicking the comforting sounds of the womb, white noise offers a familiar and soothing auditory experience for babies. This article provides parents with practical tips and tricks on using white noise videos and audio to ease their infants into relaxation and sleep, making it an essential tool for new parents.",
      "Elevate Your Meditation with White Noise: Techniques for Mindfulness":
        "Enhance your meditation and mindfulness practices by integrating white noise into your routine. Learn techniques to use white noise videos and audio as a backdrop for meditation, aiding in achieving deeper focus and relaxation. This guide helps practitioners find inner peace and clarity, making meditation sessions more effective and transformative.",
      "How to Create Spooky Pranks with White Noise This Halloween":
        "Get creative this Halloween by using white noise videos and audio to craft eerie atmospheres perfect for pranks. Whether setting up a haunted house or planning a spooky surprise for friends and family, discover how the ambiguous sounds of white noise can add suspense and excitement to your Halloween pranks. This tutorial guides you through creating memorable scares that are sure to delight and terrify.",
      "Fun Office Pranks with White Noise: A How-To Guide":
        "Lighten up the workplace with some good-natured fun by employing white noise for office pranks. This how-to guide walks you through executing harmless pranks that puzzle and amuse your co-workers. Learn to use white noise discreetly to spark curiosity and laughter, enhancing camaraderie and breaking the daily routine with a touch of humor and mystery.",
    },
    subTips: {
      "Enhancing Productivity and Focus": [
        "Improve concentration in noisy environments",
        "Boost productivity at work",
        "Enhance focus during study sessions",
        "Minimize distractions while working from home",
        "Facilitate deep work periods"
      ],
      "Sleep and Relaxation": [
        "Promote faster sleep onset",
        "Mask disruptive nighttime noises",
        "Improve sleep quality for insomniacs",
        "Soothe babies and young children",
        "Create a calming bedtime routine"
      ],
      "Health and Well-being": [
        "Reduce stress and anxiety levels",
        "Aid in meditation and mindfulness practices",
        "Help manage tinnitus symptoms",
        "Encourage relaxation during yoga",
        "Support mental health by reducing sensory overload"
      ]
    },
  },
  {
    name: "Fake Broken screen",
    path: "/broken-screen",
    icon: "https://emojicdn.elk.sh/💔",
    title: "Fake Broken screen - Prank",
    type: "prank",
    components: {
      mid: <BrokenScreen />,
    },
    thumbnail: BrokenScreenIcon,
    tips: {
      "Scare Your Friends with a Realistic Broken Screen Prank": "Pull off the ultimate prank by making friends believe their device screen has shattered.",
      "Create Engaging Content with a Cracked Screen Effect": "Enhance your videos or presentations by adding a dramatic cracked screen overlay.",
      "Test Your Own Reaction to a Broken Display": "See how you'd react to unexpected digital mishaps by simulating a broken screen.",
      "Use a Broken Screen Image for Creative Projects": "Incorporate high-quality broken screen visuals into your digital art or creative designs.",
      "Educate on the Durability of Screen Protectors": "Demonstrate the importance of screen protection by showcasing potential damage.",
      "Spice Up Your Tech Reviews with a Broken Screen Fake": "Add a twist to device reviews by simulating screen damage and discussing durability.",
      "Incorporate a Cracked Screen Online into Your Halloween Decor": "Turn devices into spooky decorations with a full-screen broken display animation."
    },
    subTips: {
      "Pranks and Jokes": [
        "Epic tech prank",
        "Scare friends and family",
        "Office prank idea",
        "April Fool's gag",
        "Startle someone for fun"
      ],
      "Content and Creativity": [
        "Unique digital art backdrop",
        "Engaging social media content",
        "Creative project visuals",
        "Dramatic effect in videos",
        "Illustrate tech horror stories"
      ],
      "Education and Awareness": [
        "Demonstrate screen fragility",
        "Promote protective accessories",
        "Tech safety presentations",
        "Visual aid for device care talks",
        "Highlight importance of warranties"
      ]
    }
  },
  {
    name: "Fake Blue Screen of Death",
    path: "/blue-screen-of-death-windows",
    icon: "https://emojicdn.elk.sh/💻",
    title: "Windows Fake Blue Screen of Death",
    type: "prank",
    components: {
      mid: <FakeBlueScreen />,
    },
    thumbnail: DeathXPIcon,
    tips: {
      "Prank Your Friends with a Fake Blue Screen of Death": "Elevate your pranking game by tricking friends into thinking their PC crashed. Perfect for a harmless laugh.",
      "Create Memorable Tech-Themed Parties": "Add a quirky twist to tech-themed parties by showcasing the iconic Windows blue screen of death on screens.",
      "Educate on Windows Blue Screen of Death": "Use the simulation as an educational tool to teach about troubleshooting and preventing the real BSOD.",
      "Enhance Your Tech Support Skills": "Practice your reaction and diagnostic skills by using the fake BSOD as a training tool.",
      "Spice Up Your Tech YouTube Channel": "Create engaging content by incorporating the blue screen of death prank in your tech videos.",
      "Test patience": "Challenge your patience or that of a friend by confronting the dreaded blue screen scenario in a controlled manner.",
      "Film Productions and Tech Scenes": "Incorporate a realistic Windows BSOD animation into your film or video production for authentic tech drama."
    },
    subTips: {
      "Pranks and Entertainment": [
        "Harmless computer prank",
        "April Fool's tech joke",
        "Tech-themed party gag",
        "Scare friends for fun",
        "Create viral prank content"
      ],
      "Educational Purposes": [
        "Teach BSOD troubleshooting",
        "Simulate system failures",
        "Train IT support staff",
        "Demonstrate system recovery",
        "Educate on error messages"
      ],
      "Content Creation": [
        "Enhance tech videos",
        "Create engaging tutorials",
        "Film realistic tech scenes",
        "Add drama to tech reviews",
        "Illustrate system stability discussions"
      ]
    }
  },
  {
    name: "Fake Blue Screen of Death 10",
    path: "/blue-screen-of-death-windows-10",
    icon: "https://emojicdn.elk.sh/💻",
    title: "Windows 10 Fake Blue Screen of Death",
    type: "prank",
    components: {
      mid: <FakeBlueScreen10 />,
      right: <FakeBlueScreen10_Sidebar />,
    },
    thumbnail: Death10Icon,
  },
  {
    name: "Hacker Typer Screen",
    path: "/hacker-screen",
    icon: "https://emojicdn.elk.sh/👨‍💻",
    title: "Hacker Typer Screen - Prank",
    type: "prank",
    components: {
      mid: <HackerTyper />,
      right: <HackerSpeedInput />,
    },
    thumbnail: HackerTyperIcon,
  },

  // Fake Update Screens
  {
    name: "Fake Update Windows 10",
    path: "/fake-windows-10-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows 10 Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWin10 />,
    },
    thumbnail: Windows10UpdateScreen,
  },
  {
    name: "Fake Update Windows XP",
    path: "/fake-windows-xp-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows XP Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWinXP />,
    },
    thumbnail: WindowsXPUpdateScreen,
  },
  {
    name: "Fake Update Mac OS X",
    path: "/fake-mac-os-x-update-screen",
    icon: "https://emojicdn.elk.sh/🍎",
    title: "Mac OS X Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeOSUpdate />,
    },
    thumbnail: MacOSXUpdateScreen,
  },
  {
    name: "Fake Update Ubuntu 22.04",
    path: "/fake-ubuntu-22-04-update-screen",
    icon: "https://emojicdn.elk.sh/🐧",
    title: "Ubuntu 22.04 Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUbuntu />,
    },
    thumbnail: Ubuntu2204UpdateScreen,
  },
  {
    name: "Fake Update Chrome OS",
    path: "/fake-chrome-os-update-screen",
    icon: "https://emojicdn.elk.sh/🌐",
    title: "ChromeOS Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeChromeOS />,
    },
    thumbnail: ChromeOSUpdateScreen,
  },

  // Screensaver Screens
  {
    name: "DVD Screensaver",
    path: "/dvd-screensaver",
    icon: "https://emojicdn.elk.sh/📀",
    title: "DVD Screensaver",
    type: "screensaver",
    components: {
      mid: <DVDSaver />,
    },
    thumbnail: DVDIcon,
  },
  {
    name: "Flip Clock",
    path: "/flip-clock-screensaver",
    icon: "https://emojicdn.elk.sh/⏰",
    title: "Flip Clock Screensaver",
    type: "screensaver",
    components: {
      mid: <FlipClockPreview />,
    },
    thumbnail: FlipClockIcon,
  },
  {
    name: "Motivational Quote",
    path: "/motivational-quote-screensaver",
    icon: "https://emojicdn.elk.sh/💬",
    title: "Motivational Quote Screensaver",
    type: "screensaver",
    components: {
      mid: <MotivationQuotesPreview />,
      // right: <MotivationQuotesRight />,
    },
    thumbnail: MotivationalQuoteIcon,
  },
  {
    name: "No Signal",
    path: "/no-signal-smpte-color-bars-screensaver",
    icon: "https://emojicdn.elk.sh/📡",
    title: "Color Bars - No Signal TV Screen",
    type: "screensaver",
    components: {
      mid: <NoSignalPreview />,
    },
    thumbnail: NoSignalIcon,
  },
];

export const getRouteByPath = (path: string): RouteStore | undefined => {
  const newPath = path.startsWith("/") ? path : `/${path}`; // example: /example-path
  const route = routes.find((route) => route.path === newPath);
  return route;
};

export const getRouteByPathAsync = async (
  path: string,
): Promise<RouteStore | null> => {
  try {
    const route = routes.find((route) => route.path === path);
    if (!route) return null;

    // If there's any async data loading or processing needed for the route,
    // it should be done here
    await Promise.resolve(); // Placeholder for any future async operations
    console.log("get route successful");

    return route;
  } catch (error) {
    console.error("Error fetching route:", error);
    return null;
  }
};

export const getColorRoutes = () => routes.filter((route) => route.color);
export const getIconRoutes = () => routes.filter((route) => route.icon);
export const getNavigationRoutes = (
  pathName: string,
): RouteStore[] | undefined => {
  const existRoute = getRouteByPath(pathName);
  if (!existRoute) return undefined;

  const routeType = existRoute.type;
  const navigationRoutes = routes.filter((route) => route.type !== routeType);
  return navigationRoutes;
};

export default routes;
