export interface ExecutiveReference {
  name: string;
  initials: string;
  title: string;
  organization: string;
  phone: string;
  email: string;
  emailAlt?: string;
  quote: string;
}

export const executiveReferences: ExecutiveReference[] = [
  {
    name: "Khun Deepak Ohri",
    initials: "DO",
    title: "Ex. Chief Executive Officer",
    organization: "Lebua Hotels and Resorts Bangkok",
    phone: "+66 99 441 9999",
    email: "Deepak@deepakohri.com",
    emailAlt: "deepak@lamhasia.com",
    quote: "Chef Chandra brings exceptional dedication, strong discipline, and authentic Indian culinary mastery that consistently delights international luxury guests."
  },
  {
    name: "Chef Vikas Shrivastava",
    initials: "VS",
    title: "Executive Pastry Chef",
    organization: "International Hospitality Group",
    phone: "+91 98115 50564",
    email: "chef_vikas@yahoo.co.uk",
    quote: "A distinguished culinary professional whose technical training from ITDC to 5-star hotel banquet leadership ensures flawless execution across kitchen operations."
  }
];
