
import { Post } from "@/types/posts";

const posts: Post[] = [
  {
    id: "1",
    title: "The Rise of Artificial Intelligence",
    body: "Artificial Intelligence (AI) is revolutionizing various industries...",
    author: "John Doe",
    date: "2024-05-02",
    comments: [
      { id: "1", text: "Great introduction!", username: "Jane" },
      {
        id: "2",
        text: "Looking forward to more posts on this topic.",
        username: "Alex",
      },
    ],
  },
  {
    id: "2",
    title: "Exploring the Depths of the Ocean",
    body: "The ocean remains one of the least explored frontiers on Earth, offering mysteries at every turn...",
    author: "Alice Smith",
    date: "2024-05-03",
    comments: [
      { id: "1", text: "Fascinating read!", username: "Bob" },
      {
        id: "2",
        text: "I never knew the ocean held so many secrets.",
        username: "Charlie",
      },
    ],
  },
  {
    id: "3",
    title: "Advances in Renewable Energy Technologies",
    body: "Renewable energy is seeing rapid innovation, leading to more efficient solar panels and wind turbines...",
    author: "David Lee",
    date: "2024-05-04",
    comments: [
      { id: "1", text: "The future of energy is bright!", username: "Eve" },
    ],
  },
  {
    id: "4",
    title: "The Impact of Social Media on Society",
    body: "Social media platforms have dramatically changed the way we communicate and share information...",
    author: "Maria Gonzalez",
    date: "2024-05-05",
    comments: [
      { id: "1", text: "Very insightful article.", username: "Frank" },
      { id: "2", text: "I appreciate the balanced view.", username: "Grace" },
    ],
  },
  {
    id: "5",
    title: "Discovering the Secrets of the Universe",
    body: "Cosmologists are uncovering mysteries of the cosmos that were once thought unsolvable...",
    author: "Michael Chen",
    date: "2024-05-06",
    comments: [{ id: "1", text: "Mind-blowing concepts!", username: "Hannah" }],
  },
  {
    id: "6",
    title: "A Journey Through Time: The History of Art",
    body: "Art has evolved over centuries, reflecting the changing cultures and values of society...",
    author: "Samantha Reed",
    date: "2024-05-07",
    comments: [
      { id: "1", text: "Beautifully written!", username: "Ian" },
      {
        id: "2",
        text: "Gives me a new perspective on art history.",
        username: "Julia",
      },
    ],
  },
  {
    id: "7",
    title: "The Future of Space Exploration",
    body: "With new technologies, humanity is closer than ever to making interplanetary travel a reality...",
    author: "Robert Brown",
    date: "2024-05-08",
    comments: [
      { id: "1", text: "Exciting times ahead!", username: "Kevin" },
      {
        id: "2",
        text: "Can't wait to see what's next in space travel.",
        username: "Laura",
      },
    ],
  },
  {
    id: "8",
    title: "The Evolution of Quantum Computing",
    body: "Quantum computing is set to revolutionize the way we solve complex problems...",
    author: "Nina Patel",
    date: "2024-05-09",
    comments: [
      { id: "1", text: "Quantum leap in technology!", username: "Oscar" },
      {
        id: "2",
        text: "Can't wait to see its applications.",
        username: "Paul",
      },
    ],
  },
  {
    id: "9",
    title: "Understanding Climate Change",
    body: "Climate change is one of the most pressing issues of our time...",
    author: "Liam Johnson",
    date: "2024-05-10",
    comments: [
      { id: "1", text: "Important topic!", username: "Quinn" },
      {
        id: "2",
        text: "We need more awareness on this.",
        username: "Rachel",
      },
    ],
  },
  {
    id: "10",
    title: "The Art of Mindfulness",
    body: "Mindfulness practices can greatly enhance mental well-being...",
    author: "Sophia Turner",
    date: "2024-05-11",
    comments: [
      { id: "1", text: "Very calming read.", username: "Sam" },
      {
        id: "2",
        text: "Mindfulness has changed my life.",
        username: "Tina",
      },
    ],
  },
];

export default posts;
