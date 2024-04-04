const Read = [
    {
      id: "Read1",
      message: "Explore the profound wisdom of the Bhagavad Gita through our collection of sacred shlokas. Dive into the timeless verses that offer guidance and enlightenment for life's journey. Take a moment to read a shloka and contemplate its meaning kindly visit to our read a Shlok section",
      trigger: "PP-reject",
    },
   
    // return to main menu or good bye
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
    //  Intermediate
    {
      id: "inter-lev",
      message: "Sounds good! How many years did you train?",
      trigger: "inter-wait-user",
    },
    {
      id: "inter-wait-user",
      user: true,
      trigger: "inter-resp-1",
    },
    {
      id: "inter-resp-1",
      message: "not bad! Where do you want to practice?",
      trigger: "inter-wait-user2",
    },
    {
      id: "inter-wait-user2",
      user: true,
      trigger: "give-contact-details",
    },
    // Advanced
    {
      id: "advanced-lev",
      message: "Great, do you play in the league?",
      trigger: "advanced-league-yes-no",
    },
    {
      id: "advanced-league-yes-no",
      options: [
        { value: "Yes", label: "Yes", trigger: "league-yes" },
        { value: "No", label: "No", trigger: "league-no" },
        {
          value: "Soon",
          label: "Soon hopefully / Training for",
          trigger: "league-soon",
        },
      ],
    },
    {
      id: "league-yes",
      message: "Wow, awesome, me too! Let's practice",
      trigger: "give-email-or-back",
    },
    {
      id: "league-no",
      message:
        "It's all right, no need to be competitive. Let's practice if you'd like",
      trigger: "give-email-or-back",
    },
    {
      id: "league-soon",
      message: "OK. Let's practice and reach our goals!",
      trigger: "give-email-or-back",
    },
    // give email to intermediate or advanced players or programmers
    {
      id: "give-contact-details",
      message: "Let's arrange something!",
      trigger: "give-email-or-back",
    },
    {
      id: "give-email-or-back",
      options: [
        
        {
          value: "Back to main menu",
          label: "Back to main menu",
          trigger: "contact-reasons",
        },
      ],
    },
    
    {
      id: "Back to main menu button",
      options: [
        {
          value: "Back to main menu",
          label: "Back to main menu",
          trigger: "contact-reasons",
        },
      ],
    },
  ];
  
  export default Read;