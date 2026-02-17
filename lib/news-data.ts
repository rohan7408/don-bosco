export interface NewsArticle {
  slug: string;
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "annual-design-awards-2026",
    image: "/images/placeholder.webp",
    date: "February 10, 2026",
    category: "Events",
    title: "Annual Design Awards Celebrate Student Excellence",
    excerpt:
      "This year's ceremony honored outstanding work across all programs, with over 200 submissions reviewed by an external panel of industry professionals. The evening culminated in the prestigious Don Bosco school Gold Award.",
    content: `
      <p>The annual Don Bosco School Design Awards ceremony took place on February 10th, bringing together students, faculty, and industry professionals to celebrate exceptional creative work from the past academic year.</p>
      
      <p>This year's event saw over 200 submissions across multiple categories including graphic design, UX/UI design, photography, motion graphics, and brand strategy. Each submission was carefully reviewed by an external panel of distinguished industry professionals who brought decades of combined experience to the judging process.</p>
      
      <h3>Award Categories</h3>
      <p>Winners were announced in the following categories:</p>
      <ul>
        <li>Best Graphic Design Project</li>
        <li>Outstanding UX/UI Innovation</li>
        <li>Excellence in Photography</li>
        <li>Motion Graphics Achievement</li>
        <li>Brand Strategy Leadership</li>
      </ul>
      
      <p>The evening culminated with the presentation of the prestigious Don Bosco School Gold Award, the highest honor bestowed upon a student project that demonstrates exceptional creativity, technical skill, and real-world impact.</p>
      
      <p>We congratulate all participants and winners for their dedication and creative excellence. These projects represent the future of design and innovation.</p>
    `,
    author: "Academic Affairs",
  },
  {
    slug: "ux-workshop-series-spring-2026",
    image: "/images/placeholder.webp",
    date: "January 28, 2026",
    category: "Announcements",
    title: "New UX Workshop Series Launches This Spring",
    excerpt:
      "Industry leaders from top tech companies will join Don Bosco school for a six-week hands-on workshop series exploring the latest methodologies in user experience design and research.",
    content: `
      <p>Don Bosco School is proud to announce the launch of an exciting new UX Workshop Series starting this spring. This intensive six-week program will bring industry leaders from top tech companies directly to our campus.</p>
      
      <h3>Workshop Overview</h3>
      <p>The series will cover cutting-edge topics in user experience design and research, including:</p>
      <ul>
        <li>Design Thinking and User-Centered Design</li>
        <li>Advanced Prototyping Techniques</li>
        <li>User Research and Testing Methodologies</li>
        <li>Accessibility and Inclusive Design</li>
        <li>Designing for Emerging Technologies</li>
        <li>Portfolio Development and Career Guidance</li>
      </ul>
      
      <h3>Guest Speakers</h3>
      <p>We're honored to host UX professionals from leading companies who will share their insights and experiences. Each session will combine theoretical knowledge with practical, hands-on exercises.</p>
      
      <p>The workshops are open to all students with advance registration. Spaces are limited, so we encourage interested students to register early.</p>
      
      <p>For more information and registration details, please contact the Student Services office.</p>
    `,
    author: "Department of Design",
  },
  {
    slug: "spring-open-day-2026",
    image: "/images/placeholder.webp",
    date: "January 15, 2026",
    category: "Events",
    title: "Spring Open Day: Experience Campus Life",
    excerpt:
      "Prospective students and families are invited to explore our state-of-the-art facilities, attend demo classes, meet faculty, and discover what makes Don Bosco school a unique creative community.",
    content: `
      <p>Join us for Spring Open Day on March 15th, 2026! This is your opportunity to experience life at Don Bosco School firsthand and discover what makes our creative community special.</p>
      
      <h3>Event Highlights</h3>
      <p>Our Spring Open Day offers a comprehensive look at everything our school has to offer:</p>
      <ul>
        <li>Campus tours led by current students</li>
        <li>Demo classes across all programs</li>
        <li>Meet and greet with faculty members</li>
        <li>Portfolio review sessions</li>
        <li>Information sessions on admissions and financial aid</li>
        <li>Student work exhibitions</li>
        <li>Refreshments and networking opportunities</li>
      </ul>
      
      <h3>Schedule</h3>
      <p>The event runs from 9:00 AM to 4:00 PM, with multiple sessions throughout the day. You're welcome to attend as many sessions as you'd like, though we recommend arriving early to make the most of your visit.</p>
      
      <h3>Registration</h3>
      <p>While walk-ins are welcome, we encourage you to register in advance to help us plan accordingly and ensure you get the most out of your visit.</p>
      
      <p>We look forward to welcoming you to our campus and sharing our passion for creative education!</p>
    `,
    author: "Admissions Office",
  },
  {
    slug: "student-showcase-2025",
    image: "/images/placeholder.webp",
    date: "December 20, 2025",
    category: "Student Spotlights",
    title: "Student Showcase: Best of 2025",
    excerpt:
      "A curated collection of the year's most compelling student projects spanning graphic design, UX/UI, photography, and motion graphics — proof of the talent within our community.",
    content: `
      <p>As we close out 2025, we're thrilled to present a curated showcase of the most outstanding student work from the past year. This collection represents the incredible talent, dedication, and creativity of our student community.</p>
      
      <h3>Featured Projects</h3>
      <p>The showcase includes exceptional work across multiple disciplines:</p>
      
      <h4>Graphic Design</h4>
      <p>From bold typography experiments to comprehensive brand identity systems, our graphic design students have pushed creative boundaries while maintaining professional standards.</p>
      
      <h4>UX/UI Design</h4>
      <p>Innovative app concepts, website redesigns, and interactive experiences demonstrate our students' ability to combine aesthetic sensibility with user-centered thinking.</p>
      
      <h4>Photography</h4>
      <p>Stunning portrait series, documentary projects, and experimental photography work showcase technical mastery and artistic vision.</p>
      
      <h4>Motion Graphics</h4>
      <p>Dynamic animations, explainer videos, and kinetic typography projects bring ideas to life through movement and storytelling.</p>
      
      <p>These projects are not just academic exercises—many have been featured in competitions, published in design journals, or implemented by real clients. They represent the caliber of work our students are capable of producing.</p>
      
      <p>Congratulations to all featured students, and here's to an even more creative 2026!</p>
    `,
    author: "Faculty Review Board",
  },
  {
    slug: "campus-lab-expansion-2025",
    image: "/images/placeholder.webp",
    date: "December 5, 2025",
    category: "Announcements",
    title: "Campus Lab Expansion Complete",
    excerpt:
      "Our newly renovated digital design lab now features 60 high-performance workstations, a dedicated 3D printing corner, and a collaborative ideation space for group projects.",
    content: `
      <p>We're excited to announce the completion of our digital design lab expansion—a major milestone in our ongoing commitment to providing world-class facilities for our students.</p>
      
      <h3>New Facilities</h3>
      <p>The expanded lab includes significant upgrades and new features:</p>
      
      <h4>High-Performance Workstations</h4>
      <p>60 state-of-the-art computer workstations equipped with the latest design software including Adobe Creative Suite, Figma, Sketch, Blender, and industry-standard tools. Each workstation features powerful processors, professional-grade graphics cards, and color-calibrated displays.</p>
      
      <h4>3D Printing Corner</h4>
      <p>A dedicated makerspace with multiple 3D printers, allowing students to bring their digital designs into physical reality. This space supports prototyping, model making, and experimental design projects.</p>
      
      <h4>Collaborative Ideation Space</h4>
      <p>A flexible area designed for group projects and brainstorming sessions, featuring modular furniture, large-format displays, and writable wall surfaces to encourage collaboration and creative thinking.</p>
      
      <h3>Access and Hours</h3>
      <p>The lab is open to all enrolled students with extended hours during project deadlines. Student tech support staff are available during operating hours to assist with software and hardware questions.</p>
      
      <p>We invite all students to explore the new facilities and take advantage of these enhanced resources for their creative work.</p>
    `,
    author: "Facilities Management",
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return newsArticles.map((article) => article.slug);
}
