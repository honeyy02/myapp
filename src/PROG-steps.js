// dialog flow for "programming buddy" ================================================
const progPrompts = [
    {
      id: "programmingQ1",
      message:  "Absolutely! Augmented reality meditation combines the tranquility of traditional meditation practices with immersive visual and auditory elements. Through our app, you'll enter a virtual space where serene environments and calming sounds enhance your meditation experience. Simply find a quiet space, put on your AR headset, and let me guide you through a rejuvenating session. Are you ready to embark on this journey?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "Yes",
        },
        {
          value: "back to main menu from rec-options",
          label: "Back to main menu",
          trigger: "contact-reasons",
        },
      ],
    },
    {
      id: "Yes",
      message: "Oh Great!! You'll have the opportunity to immerse yourself in a variety of serene environments, such as lush forests, tranquil beaches, and majestic mountains. Each environment is designed to evoke a sense of peace and relaxation, allowing you to escape the stresses of daily life and focus on your inner well-being. Whether you prefer the sounds of nature or soothing music, we tailor the experience to suit your preferences. Shall we begin your meditation session?",
      trigger: "options2",
    },
    {
      id: "options2",
      options: [
        {
          value: "Sure",
          label: "Sure!!",
          trigger: "Sure",
        },
        {
          value: "back to main menu from rec-options",
          label: "Back to main menu",
          trigger: "contact-reasons",
        },
      ],
    },
    {
      id: "Sure",
      message: "Oh Great!! You can visit to AR of our website",
      trigger: "any-rec-question-prompt",
    },
    {
      id: "programmingQ2",
      user: true,
      trigger: "programmingQ3",
    },
    {
      id: "programmingQ3",
      message: "Cool and what language do you use?",
      trigger: "programmingQ4",
    },
    {
      id: "programmingQ4",
      user: true,
      trigger: "programmingQ5",
    },
    {
      id: "programmingQ5",
      message: ({ previousValue }) => {
        const sameLanguage =
          previousValue.toLowerCase().includes("javascript") ||
          previousValue.toLowerCase().includes("js");
        if (sameLanguage) {
          return "Me, too! I've coded it for years!";
        } else {
          return "{previousValue}, woahhh! let's chat.";
        }
      },
      trigger: "give-contact-details", // this prompt is in pingPrompts
    },
  ];
  
  export default progPrompts;