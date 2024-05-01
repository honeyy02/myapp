// dialog flow for "programming buddy" ================================================
const RVF1 = [
    {
      id: "RVF11",
      message: "Welcome to our Rejuvenation Videos section, where you'll find a collection of inspiring and uplifting videos to rejuvenate your mind and spirit. Take a moment to explore our curated selection of videos featuring wisdom from spiritual leaders and thought-provoking content. Allow yourself to be inspired and uplifted as you embark on a journey of self-discovery and personal growth. Kindly visit to Rejuvenation Videos section",
      trigger: "PP-reject",
    },
    {
      id: "PP-reject",
      options: [
        {
          value: "main-menu",
          label: "Return to main menu",
          trigger: "contact-reasons",
        },
        { value: "No", label: "No", trigger: "goodbye" },
      ],
    },
  
    {
      id: "p2",
      user: true,
      trigger: "p3",
    },
    {
      id: "p3",
      message: "Cool and what language do you use?",
      trigger: "p4",
    },
    {
      id: "p4",
      user: true,
      trigger: "p5",
    },
    {
      id: "p5",
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
  
  export default RVF1;