import recruitmentPrompts from "./REC-steps";
import progPrompts from "./PROG-steps";
import pingPrompts from "./pingPrompts";
import rec_UserInputPrompts from "./REC-userinputs-steps";
import RVF1 from "./RVF"
import Read1  from "./Read";
import Chapters from "./Shlok";

// MAIN DIALOG FLOW
const steps = [
  {
    id: "Greet",
    message: "Hello, I'm Gita, here to guide you on your journey to spiritual growth and productivity. Ask me anything—I'm here to help!",
    trigger: "Ask-name",
  },
  {
    id: "Ask-name",
    message: "What's your name, buddy?",
    trigger: "waiting-for-name",
  },
  {
    id: "waiting-for-name",
    user: true,
    trigger: "name-given",
  },
  {
    id: "name-given",
    message: "Pleasure to meet you, {previousValue}. What brings you here?",
    trigger: "contact-reasons",
  },
  {
    id: "contact-reasons",
    options: [
      { value: "Gita Stories", 
        label: "Dive into Interactive Gita Stories for spiritual inspiration", 
        trigger: "recruitment" },
      {
        value: "Augmented Reality Meditation",
        label: "Explore our Augmented Reality Meditation for a calming experience",
        trigger: "programmingQ1",
      },
      {
        value: "Power of Knowledge Blogs",
        label: "Read some Power of Knowledge Blogs for insightful reflections",
        trigger: "PPQ1",
      },
      {
        value: "Rejuvenation Videos featuring",
        label: "Check out our Rejuvenation Videos featuring inspirational content",
        trigger: "RVF11",
      },
      {
        value: "Read a Shlok",
        label: "Read a Shlok",
        trigger: "Read1",
      },
      {
        value: "Gita Chapters",
        label: "Gita Chapters",
        trigger: "Shlok",
      },
    ],
  },

  // Goodbye prompt
  {
    id: "goodbye",
    message: "It was nice to chat. Good bye! 👋🏼",
    end: true,
  },

  // Recruitment
  ...recruitmentPrompts,

  // Programming buddy"
  ...progPrompts,

  // "Ping pong" ================================================
  ...pingPrompts,

  // 
  ...RVF1,

  ...Read1,

  // user input open prompts
  ...rec_UserInputPrompts,
  ...Chapters,
];

export default steps;