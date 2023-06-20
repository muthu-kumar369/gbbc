import bannerImage from '../assets/HeroImage.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import twitter from '../assets/Social Media/Twitter.png';
import linkedIn from '../assets/Social Media/Linkedin.png';
import youtube from '../assets/Social Media/youtube.png';
import BlueLogo from '../assets//Logo/Blue.png';
import WhiteLogo from '../assets/Logo/White.png';
import HomeBanner from '@/component/banner';
import TopTwoColumn from '@/component/topTwoColumn';
import Footer from '@/component/footer';
const bannerData = {
  logo:WhiteLogo,
  bannerImage: bannerImage,
  socialIcons: [twitter,youtube,linkedIn],
  contact: {
    text: "Contact us",
    email: "info@bc100plus.org"
  },
  content: {
    title: "Empowering Blockchain for Global Sustainability",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es",
    button: "Sign The Manifesto"
  }
};

const TopTwoColumnData = {
  title: "The Manifesto ",
  subtitle: "The Manifesto represents the vision and values of the BC100+ members",
  contents: [
    "Trust in public institutions is eroding all over the world, private interests have never been so powerful, and public interest has never been so crucial, particularly in the light of the climate and biodiversity emergency. Peer-to-peer governance structures supported by innovation in technology offer an unprecedented field of exploration for achieving the Sustainable Development Goals (SDGs) and the 2030 Agenda. ",
    "In this perspective, and in light of the 2023 SDG Summit and the 2024 Summit of the Future, we formed BC100+, an initiative that brings together a diverse range of organisations to raise awareness about the potential of blockchain technologies for meeting the 2030 Agenda and realising the UN Charter Values.",
    "Our vision is to have an open, evidence-based debate focused on improving and expanding the role of blockchain technologies to serve common interest at scale. BC100+ aims to contribute to the common good with a supportive plan that leverages blockchain technologies to help nations and international organisations to address global sustainability challenges and accelerate their responses to the SDGs.",
    "Blockchain technologies serve as an enabler of changes, as well as a backbone to scale up collective response to sustainability challenges. Due to their profoundly innovative nature, blockchain technologies also contribute to unravelling a deeply embedded and interlinking set of complex crises.",
    "We recognize that a divide has emerged with blockchain technologies between its contribution to common good and adverse usages of this technology. The stakeholders of BC100+ share the belief that building on existing applications of blockchain technologies serving the SDGs is the best way to further expand its use towards the shared values of the initiative.",
    "We believe that blockchain technologies have shown themselves as a relevant tool that, across a variety of cases, helps address systemic issues by rebuilding trust, empowering communities and re-distributing value on the global level. Therefore, we are working to contribute with implementation scenarios to answer global sustainability challenges, connecting and building partnerships to advance successful experiences with blockchain technologies where its applications are in line with UN Charter Values and the 2030 Agenda.",
    "We, signatories of BC100+, aim to involve concerned stakeholders from all areas in the debate, collate ideas, explore pathways and opportunities to address global and local challenges, and advocate for transparent rapid pilot implementations to remove barriers and unlock global solutions at scale.",
    "By building on BC100+ signatories’ network, we will deepen and extend the range and scale of situations where technologies support solutions that help solve long-term systemic issues for our society."
  ],
  images:[
    {
      image:[image1]
    },
    {
      image:[image2,image3]
    },
    {
      image:[image4,image5]
    }
  ],
  buttons:[
    {
      text:"Sign The Manifesto",
      design:"background-true"
    },
    {
      text:"Download Press Release",
      design:"border-true"
    }
  ]
};

const footerData={
  logo:BlueLogo,
  copyright:"© 2023 BC100+",
  footerMenu:[
    "Contact Us",
    "Privacy Policy"
  ],
  email: "info@bc100plus.org"
}
export default function Home() {
  return (
    <>
      <HomeBanner data={bannerData}/>
      <TopTwoColumn data={TopTwoColumnData} />
      <Footer data={footerData}/>
    </>
  )
}
