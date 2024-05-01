const Chapters = [
    {
        id: "Shlok",
        message: "Hello! Welcome to the Bhagavad Gita Chapters. Which chapter summary would you like to hear about?",
        trigger: "choose-chapter",
    },
    {
        id: "choose-chapter",
        options: [
            { value: "chapter1", label: "Chapter 1: Arjuna’s Dilemma", trigger: "summary1" },
            { value: "chapter2", label: "Chapter 2: Sankhya Yoga", trigger: "summary2" },
            { value: "chapter3", label: "Chapter 3: Karma Yoga", trigger: "summary3" },
            { value: "chapter4", label: "Chapter 4: Jnana Yoga", trigger: "summary4" },
            { value: "chapter5", label: "Chapter 5: Karma Vairagya Yoga", trigger: "summary5" },
            { value: "chapter6", label: "Chapter 6: Abhyasa Yoga", trigger: "summary6" },
            { value: "chapter7", label: "Chapter 7: Jnana Vijnana Yoga", trigger: "summary7" },
            { value: "chapter8", label: "Chapter 8: Aksara Brahma Yoga", trigger: "summary8" },
            { value: "chapter9", label: "Chapter 9: Raja Vidya Raja Guhya Yoga", trigger: "summary9" },
            { value: "chapter10", label: "Chapter 10: Vibhuti Yoga", trigger: "summary10" },
            { value: "chapter11", label: "Chapter 11: Vishvarupa Darshana Yoga", trigger: "summary11" },
            { value: "chapter12", label: "Chapter 12: Bhakti Yoga", trigger: "summary12" },
            { value: "chapter13", label: "Chapter 13: Kshetra Kshetragna Vibhaga Yoga", trigger: "summary13" },
            { value: "chapter14", label: "Chapter 14: Gunatraya Vibhaga Yoga", trigger: "summary14" },
            { value: "chapter15", label: "Chapter 15: Purushottama Yoga", trigger: "summary15" },
            { value: "chapter16", label: "Chapter 16: Daivasura Sampad Vibhaga Yoga", trigger: "summary16" },
            { value: "chapter17", label: "Chapter 17: Shraddhatraya Vibhaga Yoga", trigger: "summary17" },
            { value: "chapter18", label: "Chapter 18: Moksha Sannyasa Yoga", trigger: "summary18" },
            { value: "main-menu", label: "Return to main menu", trigger: "contact-reasons" },
            { value: "No", label: "No", trigger: "goodbye" },
        ],
    },
    {
        id: "summary1",
        message: "Chapter 1: Arjuna’s Dilemma. In this chapter, Arjuna faces a moral dilemma as he prepares for battle. He is conflicted about fighting against his relatives and teachers. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary2",
        message: "Chapter 2: Sankhya Yoga. In this chapter, Lord Krishna introduces Arjuna to karma yoga and the nature of the soul. He emphasizes selfless action and spiritual enlightenment. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary3",
        message: "Chapter 3: Karma Yoga. This chapter focuses on the yoga of action and the importance of performing one's duty selflessly. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary4",
        message: "Chapter 4: Jnana Yoga. Krishna explains the significance of knowledge and the various paths to self-realization. He emphasizes understanding the nature of action. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary5",
        message: "Chapter 5: Karma Vairagya Yoga. Krishna discusses the differences between renunciation of action and selfless action, guiding Arjuna to the path of action without attachment. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary6",
        message: "Chapter 6: Abhyasa Yoga. This chapter focuses on the practice of meditation as a means to control the mind and achieve self-realization. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary7",
        message: "Chapter 7: Jnana Vijnana Yoga. Krishna reveals his divine nature and explains the path to true knowledge and wisdom. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary8",
        message: "Chapter 8: Aksara Brahma Yoga. Krishna teaches Arjuna about the journey of the soul, the importance of devotion, and the eternal nature of the self. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary9",
        message: "Chapter 9: Raja Vidya Raja Guhya Yoga. This chapter explores the concepts of devotion and the ultimate truth, emphasizing the importance of surrendering to the divine. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary10",
        message: "Chapter 10: Vibhuti Yoga. Krishna describes his divine manifestations and glories, demonstrating how he pervades the entire universe. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary11",
        message: "Chapter 11: Vishvarupa Darshana Yoga. Krishna reveals his cosmic form to Arjuna, showing him the infinite and wondrous aspects of the divine. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary12",
        message: "Chapter 12: Bhakti Yoga. Krishna discusses the path of devotion (bhakti) as a means to attain liberation and a closer relationship with the divine. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary13",
        message: "Chapter 13: Kshetra Kshetragna Vibhaga Yoga. Krishna explains the distinction between the physical body (the field) and the self (the knower of the field), and the importance of understanding this difference. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary14",
        message: "Chapter 14: Gunatraya Vibhaga Yoga. This chapter delves into the three gunas (modes of nature): sattva, rajas, and tamas. Krishna explains how these qualities affect individuals. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary15",
        message: "Chapter 15: Purushottama Yoga. Krishna describes the nature of the supreme self and the process of achieving union with the divine. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary16",
        message: "Chapter 16: Daivasura Sampad Vibhaga Yoga. This chapter contrasts the divine qualities with the demonic qualities and explains how each leads to different outcomes. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary17",
        message: "Chapter 17: Shraddhatraya Vibhaga Yoga. Krishna discusses the three types of faith and how they influence human behavior and spiritual progress. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "summary18",
        message: "Chapter 18: Moksha Sannyasa Yoga. The final chapter summarizes the teachings of the entire Gita and emphasizes the importance of surrendering to the divine to achieve liberation. Would you like to hear about another chapter?",
        trigger: "choose-chapter",
    },
    {
        id: "PP-reject",
        options: [
            { value: "main-menu", label: "Return to main menu", trigger: "contact-reasons" },
            { value: "No", label: "No", trigger: "goodbye" },
        ],
    },
    {
        id: "goodbye",
        message: "Thank you for chatting with me. Have a great day!",
        end: true,
    },
];

export default Chapters;
