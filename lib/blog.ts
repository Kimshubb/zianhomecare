export interface BlogSection {
  type: "paragraph" | "tip" | "quote" | "image";
  heading?: string;
  body?: string;
  image?: string;
  alt?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  published: string;
  readTime: string;
  author?: string;
  featured?: boolean;
  category: {
    slug: string;
    title: string;
  }

  sections: BlogSection[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: {
    slug: string;
    title: string;
  }

  featured?: boolean;
  guide?: boolean;

  author: string;
  readTime: string;
  published: string;

  content: string[];
}

export interface FeaturedPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: {
    slug: string;
    title: string;
  }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "when-loved-one-needs-home-care",
    title: "10 Signs Your Loved One May Need Home Care",
    excerpt:
      "Recognising the early signs can help your loved one remain safe, comfortable and independent.",
    image: "/services/home-care.png",
    category: {
      slug: "home-care",
      title: "Home Care",
    },
    published: "2026-06-18",
    readTime: "5 min read",
    author: "Zian SafeHarbour Care Team",
    featured: true,
    sections: [
      {
        type: "paragraph",
        heading: "Why early signs matter",
        body: "Deciding when a loved one requires elderly home support is rarely a single, sudden moment; it is usually a gradual process. Recognising the need for professional home care early is crucial for maintaining their independence and preventing crises, such as a severe fall or a medical emergency. By proactively observing changes in their daily routine, families can put compassionate, tailored support in place before minor struggles become major health and safety risks. Early intervention ensures smoother transitions and a higher quality of life.",
      },
      {
        type: "paragraph",
        heading: "Common signs to watch for",
        body: "Changes often manifest in physical, cognitive, and emotional ways. Physically, you might notice unexplained weight loss, difficulties with mobility, or a decline in personal hygiene and grooming. Cognitively, warning signs include frequently missed medications, unpaid bills, missed appointments, or getting lost in familiar places. Emotionally, a noticeable withdrawal from social activities, loss of interest in lifelong hobbies, or sudden mood swings can indicate they are feeling overwhelmed by daily tasks. Additionally, take a close look at their environment: a previously neat home that is now cluttered, spoiled food in the fridge, or unexplained dents in their car are strong indicators that independent living is becoming a daily struggle.",
      },
      {
        type: "tip",
        body: "During your next visit, casually check the refrigerator for expired food and glance at their medication organisers. These are often the first two areas where seniors begin to silently struggle without asking for help.",
      },
      {
        type: "paragraph",
        heading: "What to do next",
        body: "If these signs sound familiar, the best next step is an open, empathetic conversation. Approach the topic not as a loss of independence, but as a way to enhance their comfort. Contact the Zian SafeHarbour Care Team to schedule a comprehensive, no-obligation home care assessment to explore flexible support options.",
      },
    ],
  },
  {
    slug: "healthy-meal-ideas-for-older-adults",
    title: "Healthy Meal Ideas for Older Adults",
    excerpt: "Simple nutritious meals that promote wellbeing and recovery.",
    image: "/services/meals.png",
    category: {
      slug: "nutrition",
      title: "Nutrition",
    },
    published: "2026-06-10",
    readTime: "4 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "Nutrition needs change with age",
        body: "As we age, our bodies undergo metabolic changes that make senior nutrition a critical pillar of healthy ageing. Older adults typically require fewer calories due to a natural slowing of metabolism and decreased physical activity, but their need for essential nutrients—such as calcium, vitamin D, B12, and high-quality protein—actually increases. Poor nutrition in the elderly can lead to weakened immune systems, muscle loss, and an increased risk of falls. Furthermore, a diminished sense of taste or side effects from medications can reduce appetite, making it vital to prepare senior-friendly meals that are not only highly nutritious but also visually appealing and easy to digest.",
      },
      {
        type: "image",
        image: "/services/meal-prep.png",
        alt: "A healthy, senior-friendly meal plated at home",
      },
      {
        type: "paragraph",
        heading: "Easy, nutrient-dense meal ideas",
        body: "Creating a healthy meal plan for seniors doesn't have to be complicated. Start the day with a bowl of warm porridge topped with antioxidant-rich berries, chopped walnuts, and a splash of milk for calcium. For lunch, focus on hydration and protein with a hearty vegetable and lentil soup, served with whole-grain bread; this is gentle on digestion while providing necessary fibre. Dinner should be nutrient-dense but light—consider baked salmon rich in Omega-3 fatty acids to support brain health, paired with steamed asparagus and a small portion of quinoa. Snacking should also be purposeful; Greek yoghurt or sliced apples with almond butter are excellent for maintaining energy levels. Finally, never overlook hydration, as older adults naturally lose their sense of thirst. Encourage drinking water, herbal teas, or broths throughout the day to prevent dehydration and support overall wellbeing.",
      },
    ],
  },
  {
    slug: "recovering-after-surgery",
    title: "Recovering Comfortably After Surgery at Home",
    excerpt: "Helpful tips for a smoother recovery in familiar surroundings.",
    image: "/services/discharge-care.png",
    category: {
      slug: "recovery",
      title: "Recovery",
    },
    published: "2026-05-30",
    readTime: "6 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "Why home recovery can be beneficial",
        body: "Healing in the comfort of your own home offers profound benefits for post-operative care. Research shows that patients recovering from surgery at home often experience lower stress levels, better sleep quality, and a reduced risk of hospital-acquired infections. Being surrounded by familiar sights, sounds, and loved ones significantly boosts morale, which is intrinsically linked to physical healing. However, successful elderly post-operative care requires careful planning to ensure the home environment actively supports rest and rehabilitation, rather than presenting unnecessary obstacles.",
      },
      {
        type: "paragraph",
        heading: "Preparing the home before discharge",
        body: "A safe home recovery begins before leaving the hospital. First, eliminate trip hazards by removing loose rugs and taping down electrical cords to clear wide pathways for walkers or mobility aids. If stairs are an issue, consider temporarily moving the primary living space and bed to the ground floor. Stock the pantry with easily prepared, nutritious meals and ensure that vital items—like medications, TV remotes, water bottles, and a phone—are within arm's reach of the recovery bed or chair. Installing temporary grab bars in the bathroom can also drastically improve safety during those crucial first few weeks.",
      },
      {
        type: "quote",
        body: "Having a professional caregiver step in for just a few hours a day allowed me to actually be a daughter to my father during his recovery, rather than just his nurse. The peace of mind was invaluable.",
      },
      {
        type: "paragraph",
        heading: "Signs recovery isn't going to plan",
        body: "While home recovery is ideal, it is vital to monitor for complications. Watch closely for signs of infection such as a sudden fever, increased redness or swelling at the surgical site, or sudden, severe pain that medication does not relieve. If you observe lethargy, confusion, or breathing difficulties, contact your healthcare provider immediately. Professional post-surgery home care services can help monitor these vital signs effectively.",
      },
    ],
  },
  {
    slug: "fall-prevention",
    title: "Preventing Falls Around the Home",
    excerpt: "Practical adjustments that greatly improve safety.",
    image: "/services/falls.jpg",
    category: {
      slug: "safety",
      title: "Safety",
    },
    published: "2026-06-03",
    readTime: "7 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "Why falls are a serious risk for seniors",
        body: "Falls are a leading cause of injury among older adults, often resulting in fractures, hospitalisation, and a significant loss of independence. Beyond the physical trauma, experiencing a fall can create a profound fear of falling again, which paradoxically causes seniors to limit their activities. This decrease in mobility leads to muscle weakness and stiff joints, further increasing the fall risk. Effective fall prevention for seniors is about proactively adapting the home environment to eliminate hazards, ensuring that older adults can navigate their personal spaces with confidence and security.",
      },
      {
        type: "paragraph",
        heading: "Room-by-room safety checklist",
        body: "Making a home safe for the elderly requires a systematic approach. In the living room, remove loose throw rugs, declutter walkways, and ensure lighting is bright and accessible from the doorway. In the bathroom—the most common site for slips—install sturdy grab bars near the toilet and shower, apply non-slip decals to the tub floor, and consider a raised toilet seat or shower chair. For the bedroom, place a lamp and telephone securely on the nightstand, and consider installing motion-sensor nightlights to illuminate the path to the bathroom during the night. In the kitchen, move frequently used items to lower shelves to eliminate the dangerous need for step stools or reaching overhead.",
      },
      {
        type: "tip",
        body: "Ditch the traditional loose slippers. Encourage your loved one to wear well-fitting, supportive shoes with non-skid soles indoors, or specialised grip socks, to drastically reduce the risk of slipping on hard floors.",
      },
      {
        type: "paragraph",
        heading: "When to consider additional support",
        body: "Even with a perfectly modified home, some individuals require physical assistance. If your loved one struggles to stand from a seated position, experiences frequent dizziness, or is recovering from an illness, it may be time to introduce a professional home care aide. They can provide essential standby assistance for bathing, dressing, and mobility.",
      },
    ],
  },
  {
    slug: "why-companionship-matters",
    title: "Why Companionship Matters for Seniors",
    excerpt: "Emotional wellbeing is just as important as physical care.",
    image: "/services/company.jpg",
    category: {
      slug: "wellbeing",
      title: "Wellbeing",
    },
    published: "2026-06-01",
    readTime: "5 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "The link between isolation and health",
        body: "When discussing senior care, physical health and medical needs often dominate the conversation, but emotional wellbeing is equally critical. Senior isolation and loneliness are hidden epidemics that carry severe health consequences. Studies consistently show that prolonged loneliness in older adults is linked to a higher risk of cognitive decline, depression, anxiety, and even cardiovascular disease. The health risks of prolonged isolation are often compared to smoking 15 cigarettes a day. As seniors lose mobility, stop driving, or experience the loss of friends and spouses, their social circles naturally shrink. This makes proactive companionship care services an absolute necessity rather than a luxury, serving as a vital intervention to preserve both mental and physical health in later life.",
      },
      {
        type: "paragraph",
        heading: "How companionship care helps",
        body: "Companionship for seniors goes far beyond simply having someone sit in the same room; it is about fostering genuine, meaningful human connection. A professional companion care worker provides social stimulation through engaging conversation, playing memory-enhancing games, or assisting with beloved hobbies like gardening or baking. Furthermore, they can help seniors safely leave the house, providing escort services to local community events, religious services, or simple trips to the café. This consistent social interaction sharpens cognitive function, restores a sense of purpose, and brings joy back into daily routines. For families balancing work and their own lives, having a dedicated companion for their ageing loved one brings immense peace of mind, knowing they are emotionally supported and socially engaged.",
      },
    ],
  },
  {
    slug: "supporting-a-loved-one-with-dementia",
    title: "Supporting a Loved One Living with Dementia",
    excerpt: "Compassionate approaches that make everyday life easier.",
    image: "/services/personal-care.png",
    category: {
      slug: "dementia",
      title: "Dementia",
    },
    published: "2026-05-28",
    readTime: "8 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "Understanding the journey",
        body: "Caring for a loved one with dementia is a deeply emotional journey that requires profound empathy and adaptability. Dementia is not merely memory loss; it is a progressive change in how a person processes the world around them. Understanding this helps caregivers shift their perspective. Instead of correcting a loved one when they are confused about the time or place, successful dementia home care focuses on joining them in their current reality. This compassionate approach, often called validation therapy, reduces frustration and anxiety for both the individual and the caregiver, fostering a sense of safety and trust.",
      },
      {
        type: "paragraph",
        heading: "Practical daily approaches",
        body: "Routine is the cornerstone of effective dementia care. Establishing a predictable daily schedule for waking, eating, and activities helps anchor your loved one and reduces confusion. When communicating, use a calm, gentle tone, maintain eye contact, and ask simple, easily answerable questions—avoiding overwhelming open-ended choices. For example, instead of asking 'What do you want to wear?', simply hold up two shirts and ask them to pick one. Modify the home to be a calming environment: reduce harsh glares, minimise background noise like a blaring television, and use contrasting colours for plates and cups to make meal times easier to navigate visually.",
      },
      {
        type: "quote",
        body: "The biggest breakthrough was learning to stop arguing with my mother's reality. When she asked for her long-passed sister, we stopped saying 'she's gone' and started saying 'tell me about your favourite memory with her.' It changed everything.",
      },
      {
        type: "paragraph",
        heading: "Supporting the family, too",
        body: "Dementia caregiving is a marathon, not a sprint, and caregiver burnout is a very real risk. It is vital for families to recognise that seeking help is not a failure. Utilising professional respite care or specialised dementia home care services gives families the essential time needed to rest, recharge, and return to their caregiving role with renewed patience and energy.",
      },
    ],
  },
];