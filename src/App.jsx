import Card from "./Components/Card.jsx"
function App() {
  const jobs = [
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    posted: "5 days ago",
    position: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$120/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    company: "Google",
    posted: "2 days ago",
    position: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payment: "$95/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    company: "Microsoft",
    posted: "1 day ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    company: "Meta",
    posted: "3 days ago",
    position: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payment: "$80/hr",
    location: "Remote"
  },
  {
    logo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    company: "Netflix",
    posted: "6 days ago",
    position: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$150/hr",
    location: "Los Angeles, USA"
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    company: "Apple",
    posted: "4 days ago",
    position: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$145/hr",
    location: "California, USA"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/3840px-Spotify_logo_without_text.svg.png",
    company: "Spotify",
    posted: "7 days ago",
    position: "Product Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payment: "$75/hr",
    location: "Stockholm, Sweden"
  },
  {
    logo: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=750&format=png&optimize=medium",
    company: "Adobe",
    posted: "2 days ago",
    position: "UX Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$110/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
    company: "Uber",
    posted: "8 days ago",
    position: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payment: "$90/hr",
    location: "Pune, India"
  },
  {
    logo: "https://s.yimg.com/uu/api/res/1.2/Bz8iDlw16Zf6PVc.y33xdg--~B/aD0zOTA7dz02MTA7YXBwaWQ9eXRhY2h5b24-/http://globalfinance.zenfs.com/Finance/US_AHTTP_ENTREPRENEUR_H_NEW_LIVE/1405612741-airbnb-why-new-logo_original.jpg",
    company: "Airbnb",
    posted: "1 week ago",
    position: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$130/hr",
    location: "Remote"
  },
  {
    logo: "https://zonalogo.com/api/asset-preview?url=https%3A%2F%2Fassets.zonalogo.com%2Ftechnology%2Fsalesforce.com%2Flogo-dark-1778076809375-96702.svg&theme=dark&preset=hero&size=500&v=v3",
    company: "Salesforce",
    posted: "5 days ago",
    position: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$135/hr",
    location: "Singapore"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCOo9uz8qvLVn4cz7RI1PgGTPPgreRRfLpA&s",
    company: "Oracle",
    posted: "3 days ago",
    position: "Database Administrator",
    tag1: "Part Time",
    tag2: "Junior Level",
    payment: "$85/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://download.logo.wine/logo/Intel/Intel-Logo.wine.png",
    company: "Intel",
    posted: "2 weeks ago",
    position: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$125/hr",
    location: "Austin, USA"
  },
  {
    logo: "https://www.logoai.com/uploads/articles/2024/03/05/17096195246566834.jpg",
    company: "Tesla",
    posted: "4 days ago",
    position: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payment: "$160/hr",
    location: "Texas, USA"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjfiU7xpuCHpFF7gb4G0-t-Jsf5RdH2YRXQ&s",
    company: "Shopify",
    posted: "1 day ago",
    position: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payment: "$88/hr",
    location: "Toronto, Canada"
  }
];

  return <div className="parent">
    {jobs.map(function(ele,index){
      return <div key={index}>
        <Card logo={ele.logo} company={ele.company} posted={ele.posted} position={ele.position} tag1={ele.tag1} tag2={ele.tag2} payment={ele.payment} location={ele.location} />
      </div>
    })}
  </div>
}

export default App