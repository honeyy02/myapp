const pingPrompts = [
    {
      id: "PPQ1",
      message: "Hello there! Welcome to the Read Blog section. Here, you can explore a variety of insightful articles and blogs to enrich your spiritual journey. Would you like to read a blog or article, or perhaps share your thoughts on one you've already read?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: "Power of Knowledge Blog", label: "Power of Knowledge Blog", trigger: "Power of Knowledge Blog" },
        {
          value: "Articles",
          label: "Articles",
          trigger: "Articles",
        },
      ],
      delay: 1500,
    },
    // Reject user
    {
      id: "Power of Knowledge Blog",
      message:
        "Absolutely! Let me present you with a selection of thought-provoking blogs to choose from. Once you've finished reading, feel free to share your reflections and insights. Kindly Visit to power of knowledge blog section.",
      trigger: "PP-reject",
    },
  
    {
      id: "Articles",
      message: "Absolutely! Let me present you with a selection of thought-provoking articles to choose from. Happy reading!",
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
  
  export default pingPrompts;