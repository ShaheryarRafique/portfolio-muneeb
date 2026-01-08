// Central content configuration for the entire website
// Update this file to change all text across the site

export const siteConfig = {
  siteName: "Hafiz Muneeb - Qur'an Learning",
  tagline: "Learn Qur'an Recitation with Hafiz Muneeb",
  description: "Learn authentic Qur'an recitation with Tajwīd, Maqāmāt, and Adhān training from Hafiz Muneeb (Ustaaz Muneeb). Join students from around the world.",
  url: "https://your-domain.com", // UPDATE THIS
  email: "contact@example.com", // UPDATE THIS
  whatsapp: "+1234567890", // UPDATE THIS (format: +countrycode-number)
  whatsappLink: "https://wa.me/1234567890", // UPDATE THIS (numbers only after wa.me/)
  instagram: "https://instagram.com/hafizmuneeb", // UPDATE THIS
  googleFormUrl: "https://forms.gle/WnQ2tc7k5waHwcRC7",
  foundedYear: 2020, // UPDATE THIS
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Apply", href: "/apply" },
  { name: "Contact", href: "/contact" },
];

export const heroSection = {
  title: "Learn Qur'an Recitation with Hafiz Muneeb",
  subtitle: "Tajwīd • Maqāmāt • Adhān Training",
  description: "Master the art of Qur'an recitation with proper Tajwīd, beautiful Maqāmāt, and authentic Adhān training. Join students from around the world learning with sincerity and dedication.",
  primaryCta: "Apply to Learn",
  secondaryCta: "View Programs",
};

export const whatWeTeach = [
  {
    id: 1,
    title: "Tajwīd & Qirā'āt",
    description: "Learn the foundational rules of Tajwīd and explore the authentic modes of Qur'anic recitation. Master pronunciation, articulation points, and the classical rules that preserve the Qur'an's recitation.",
    icon: "📖",
  },
  {
    id: 2,
    title: "Art of Qur'an Recitation (Maqāmāt)",
    description: "Develop your voice with the melodic modes (Maqāmāt) that beautify Qur'anic recitation. Learn Bayātī, Ṣabā, Ḥijāz, Nahāwand, and other classical Arabic musical modes used in recitation.",
    icon: "🎵",
  },
  {
    id: 3,
    title: "Adhān Training",
    description: "Perfect your call to prayer with proper technique, tone, and reverence. Learn the traditional methods and melodic styles that make the Adhān beautiful and impactful.",
    icon: "🕌",
  },
];

export const expectations = {
  title: "What to Expect",
  items: [
    {
      title: "Tajwīd Comes First",
      description: "Before exploring Maqāmāt, students must have a solid foundation in Tajwīd. Correct recitation is the priority.",
    },
    {
      title: "Maqāmāt Supports Recitation",
      description: "The melodic modes (Maqāmāt) enhance and beautify proper recitation—they don't replace correct Tajwīd.",
    },
    {
      title: "Progress Requires Practice",
      description: "Consistent daily practice and sincere effort are essential. Learning Qur'an recitation is a long-term commitment.",
    },
    {
      title: "Respectful Learning Environment",
      description: "We maintain high standards of adab (etiquette), respect, and sincerity in all our learning interactions.",
    },
  ],
};

export const faqs = [
  {
    question: "How much time do I need to commit?",
    answer: "Students should be prepared for regular practice sessions. The exact schedule depends on the program and will be discussed during the application process. Expect to dedicate at least 30-60 minutes daily for practice and review.",
  },
  {
    question: "Do you accept students from all countries?",
    answer: "Yes, Alḥamdulillāh. We teach students globally via online sessions. As long as you have a stable internet connection and the necessary equipment, you're welcome to apply.",
  },
  {
    question: "What equipment or setup do I need?",
    answer: "You'll need a computer or tablet with a good microphone and camera, a stable internet connection, and a quiet space for lessons. A Muṣḥaf (physical copy of the Qur'an) is also required.",
  },
  {
    question: "How long does it take to get a response after applying?",
    answer: "Due to the volume of applications and teaching commitments, responses may take time. Only shortlisted candidates will be contacted. Please avoid sending follow-up messages or calling—we'll reach out In shā' Allāh if you're selected.",
  },
  {
    question: "Can I contact you directly via WhatsApp or phone?",
    answer: "No, please do not call or send direct messages. All applications must go through the official Google Form. Contact information is only for shortlisted students who have been accepted into the program.",
  },
  {
    question: "What if I'm a complete beginner?",
    answer: "We assess each student individually. Some foundational knowledge of Arabic letters and basic recitation is helpful, but we'll discuss your current level during the application review.",
  },
  {
    question: "Are there any fees?",
    answer: "Fee details and program costs will be shared with shortlisted candidates. We strive to keep learning accessible while maintaining quality instruction.",
  },
];

export const programs = [
  {
    id: 1,
    title: "Tajwīd Mastery Program",
    whoItsFor: "Students who want to perfect their Qur'an recitation with authentic Tajwīd rules.",
    whatYouLearn: [
      "Complete Tajwīd rules (Makharij, Sifaat, Ahkaam)",
      "Correct articulation of all Arabic letters",
      "Rules of Noon Saakin, Meem Saakin, Madd, and more",
      "Practical application while reciting from the Muṣḥaf",
      "Common mistakes and how to avoid them",
    ],
    requirements: [
      "Ability to read Arabic letters (basic proficiency)",
      "Commitment to daily practice (minimum 30 minutes)",
      "Access to a Muṣḥaf (Qur'an)",
      "Stable internet connection for online sessions",
    ],
  },
  {
    id: 2,
    title: "Maqāmāt & Melodic Recitation",
    whoItsFor: "Students with solid Tajwīd foundation who want to beautify their recitation with authentic Maqāmāt.",
    whatYouLearn: [
      "Classical Arabic Maqāmāt (Bayātī, Ṣabā, Ḥijāz, Nahāwand, Rāst, Sīkāh, etc.)",
      "Transitioning between different Maqāmāt",
      "Voice control, breath support, and tone management",
      "Practical application in Qur'anic recitation",
      "Understanding when and how to use each Maqām",
    ],
    requirements: [
      "Strong foundation in Tajwīd (prerequisite)",
      "Ability to recite fluently with correct Tajwīd",
      "Commitment to daily vocal practice",
      "Patience—mastering Maqāmāt takes time",
    ],
  },
  {
    id: 3,
    title: "Adhān Training",
    whoItsFor: "Brothers who want to perfect their call to prayer with proper technique and reverence.",
    whatYouLearn: [
      "Authentic Adhān recitation methods",
      "Proper breathing and vocal projection",
      "Traditional melodic styles for different prayers",
      "Etiquette and spiritual dimensions of calling the Adhān",
      "Regional variations and classical approaches",
    ],
    requirements: [
      "Basic Tajwīd knowledge",
      "Clear voice and willingness to practice",
      "Understanding of Adhān's spiritual significance",
      "Regular practice commitment",
    ],
  },
];

export const aboutContent = {
  title: "About Hafiz Muneeb",
  subtitle: "Ustaaz Muneeb",
  intro: "Hafiz Muneeb (Ustaaz Muneeb) is dedicated to teaching the Qur'an with authenticity, sincerity, and proper adab. With years of experience in Tajwīd, Qirā'āt, and the art of melodic recitation (Maqāmāt), he has taught students from around the world.",
  mission: {
    title: "Our Mission",
    description: "To preserve and transmit the authentic recitation of the Qur'an, combining the precision of Tajwīd with the beauty of classical Maqāmāt. We aim to help students develop a deep, respectful connection with the Qur'an through proper recitation.",
  },
  approach: {
    title: "Teaching Approach",
    points: [
      "Tajwīd accuracy is the foundation—we never compromise on correctness",
      "Individual attention and personalized feedback for each student",
      "Emphasis on adab (etiquette), respect, and sincerity in learning",
      "Patient, supportive environment that encourages steady progress",
      "Integration of traditional methods with modern teaching tools",
    ],
  },
  values: [
    {
      title: "Sincerity (Ikhlāṣ)",
      description: "We seek to teach for the sake of Allāh, with pure intentions and humble hearts.",
    },
    {
      title: "Authenticity",
      description: "Our teaching is rooted in classical traditions and authentic chains of transmission.",
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in both Tajwīd accuracy and melodic beauty.",
    },
    {
      title: "Respect",
      description: "We maintain proper adab with the Qur'an, the teacher-student relationship, and the learning process.",
    },
  ],
};

export const applyPageContent = {
  title: "Apply to Learn",
  subtitle: "Join Our Qur'an Learning Program",
  intro: "We're honored by your interest in learning Qur'an recitation. Please read the information below carefully before applying.",
  checklistTitle: "Read Before Applying",
  checklist: [
    {
      title: "Tajwīd Comes First",
      description: "Before learning Maqāmāt, you must have—or be willing to build—a strong foundation in Tajwīd.",
    },
    {
      title: "This Is a Long-Term Process",
      description: "Mastering Qur'an recitation takes months or years, not weeks. Be prepared for a sustained commitment.",
    },
    {
      title: "Daily Practice Is Required",
      description: "You'll need to dedicate time every day for practice, review, and assignments.",
    },
    {
      title: "Only Shortlisted Students Will Be Contacted",
      description: "Due to high demand, we can only accept a limited number of students. If selected, we'll reach out In shā' Allāh.",
    },
    {
      title: "No Calls or Direct Messages",
      description: "Please do not call or send follow-up messages. All communication happens through official channels after shortlisting.",
    },
  ],
  confirmationMessage: {
    title: "After You Apply",
    points: [
      "Your application will be reviewed carefully",
      "Due to teaching workload, responses may be delayed",
      "Only shortlisted candidates will be contacted In shā' Allāh",
      "Please do not follow up with calls or direct messages",
      "If selected, we'll reach out with next steps",
    ],
  },
  ctaButton: "Open Application Form",
  note: "The form will open in a new window. Please fill it out completely and honestly.",
};

export const contactInfo = {
  title: "Contact Information",
  subtitle: "Get in Touch",
  note: "Please note: Contact details are for shortlisted students and important inquiries only. For program applications, use the official application form.",
  email: siteConfig.email,
  whatsapp: siteConfig.whatsapp,
  whatsappLink: siteConfig.whatsappLink,
  warningMessage: "Do not call or send direct messages for application status. Only shortlisted candidates will be contacted.",
  officeHours: "Response times may vary due to teaching commitments. Please be patient.",
};

export const footerContent = {
  tagline: "Teaching the Qur'an with sincerity, authenticity, and excellence.",
  disclaimer: "May Allāh accept our efforts and grant us sincerity. All good is from Allāh, and any mistakes are from ourselves.",
  copyright: `© ${new Date().getFullYear()} Hafiz Muneeb. All rights reserved.`,
  quickLinks: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "January 2026",
  sections: [
    {
      title: "Information We Collect",
      content: "When you apply to our programs, we collect personal information including your name, email address, WhatsApp number, location, current Qur'an recitation level, and learning goals. This information is collected through our Google Form application process.",
    },
    {
      title: "How We Use Your Information",
      content: "We use your information solely to evaluate your application, communicate with shortlisted candidates, and manage the teaching process for accepted students. Your data helps us understand your background and learning needs.",
    },
    {
      title: "Data Storage and Retention",
      content: "Your information is stored securely and retained for the duration of the application review process. For accepted students, data is kept throughout the learning period and for record-keeping purposes. We do not sell or share your personal information with third parties.",
    },
    {
      title: "Communication",
      content: "We will only contact you if you are shortlisted for the program. We do not send marketing emails or share your contact information with others.",
    },
    {
      title: "Your Rights",
      content: "You have the right to request access to your personal data, request corrections, or request deletion of your information. Contact us using the email provided on our contact page.",
    },
    {
      title: "Third-Party Services",
      content: "We use Google Forms for application collection. Please review Google's privacy policy for information on how they handle data.",
    },
  ],
};

export const termsOfService = {
  title: "Terms of Service",
  lastUpdated: "January 2026",
  sections: [
    {
      title: "Acceptance of Terms",
      content: "By applying to our programs and using this website, you agree to these terms of service. If you do not agree, please do not apply or use our services.",
    },
    {
      title: "Application Process",
      content: "Submitting an application does not guarantee acceptance into any program. We review all applications carefully and only contact shortlisted candidates. The decision to accept or reject an application is at our sole discretion.",
    },
    {
      title: "Student Responsibilities",
      content: "Accepted students are expected to: maintain proper adab (etiquette), attend scheduled sessions punctually, complete assigned practice and homework, communicate respectfully, and inform us of any schedule conflicts in advance.",
    },
    {
      title: "Payment Terms",
      content: "Fee details are shared with shortlisted candidates. Payment terms, schedules, and refund policies will be communicated directly to accepted students.",
    },
    {
      title: "Code of Conduct",
      content: "We maintain a respectful, Islamic learning environment. Students must show proper respect for the Qur'an, the teacher, and fellow students. Any behavior that disrupts the learning environment may result in removal from the program.",
    },
    {
      title: "Intellectual Property",
      content: "All teaching materials, recordings, and content provided during the course are for personal use only. Sharing, distributing, or publishing course materials without permission is prohibited.",
    },
    {
      title: "Limitation of Liability",
      content: "While we strive to provide the best instruction possible, we make no guarantees about specific outcomes or progress speed. Each student's progress depends on their individual effort, practice, and natural ability.",
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.",
    },
  ],
};
