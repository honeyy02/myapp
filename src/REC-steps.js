// dialog flow for "recruitment" ================================================
const recruitmentPrompts = [
    {
      id: "recruitment",
      message: "Of course! The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It consists of a conversation between Prince Arjuna and the god Krishna, who serves as his charioteer. The dialogue takes place on the battlefield just before the Kurukshetra War, where Arjuna is filled with doubt and moral dilemma about fighting in the war. Krishna imparts spiritual wisdom and guidance to Arjuna, addressing concepts such as duty, righteousness, and the nature of the self. It's a profound text that offers insights into life, duty, and the path to spiritual enlightenment. Would you like to explore any specific aspects further?",
      trigger: "rec-options",
    },
    {
      id: "any-questions-rec",
      message: "Any questions?",
      trigger: "any-questions-yesno-answer",
    },
    {
      id: "any-questions-yesno-answer",
      options: [
        {
          value: "yes",
          label: "yes, type my question",
          trigger: "wait-for-rec-question",
        },
        
        {
          value: "Back to main menu",
          label: "yes, back to main menu",
          trigger: "contact-reasons",
        },
  
        {
          value: "no",
          label: "no",
          trigger: "goodbye",
        },
      ],
    },
  
    // recruiter topic options -----------
    {
      id: "rec-options",
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "Yes",
        },
      
        // {
        //   value: "other",
        //   label: "Any question",
        //   trigger: "enter-your-question", // this prompt is located in "REC-userinputs-steps.js"
        // },
        {
          value: "back to main menu from rec-options",
          label: "Back to main menu",
          trigger: "contact-reasons",
        },
      ],
    },
  
    {
      id: "rec-options2",
      options: [
       
        {
          value: "Back to menu",
          label: "Back to menu",
          trigger: "rec-options",
        },
      ],
    },
    // chatbot asks if you have any other question
    {
      id: "any-rec-question-prompt",
      message: "Any other question?",
      trigger: "any-questions-yesno-answer",
    },
    {
      id: "back-to-prev-rec-menu",
      options: [
        {
          value: "back to previous rec topics",
          label: "Back to previous topics",
          trigger: "rec-options2",
        },
        {
          value: "back to rec menu from topics 2",
          label: "Back to Rec menu",
          trigger: "rec-options",
        },
      ],
    },
    // Answers to tag topics
    {
      id: "Yes",
      message: "Oh Great!! You can visit to Gita Storyline of our website, where you can fine storyline between God Krishna and Prince Arjuna.",
      trigger: "any-rec-question-prompt",
    },
  
  ];
  
  export default recruitmentPrompts;