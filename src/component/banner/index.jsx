import Image from "next/image"
import Link from "next/link";

export default function HomeBanner({ data }) {
    return (
        <>
            <section className="home-banner-section">
                <div className="banner-image">
                    <Image src={data?.bannerImage}></Image>
                </div>
                <div className="banner-content">
                    <div className="logo-social-icon mx-auto">
                        <div className="company-logo">
                            <Image src={data.logo}></Image>
                        </div>
                        <div className="right-icons">
                            <div className="social-icons">
                                {data?.socialIcons ? data?.socialIcons.map((item, index) => {
                                    return (
                                        <div className="icon" key={index}>
                                            <Image src={item}></Image>
                                        </div>
                                    )
                                }) : ""}
                            </div>
                            <div className="contact ">
                                <p className="contact-us-text">{data?.contact?.text}</p>
                                <Link href={`mailto:${data?.contact?.email}`}>{data?.contact?.email}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="signin-manifesto mx-auto w-11/12 xl:w-3/5 lg:mt-24">
                        <h2 className="title text-xl md:text-3xl lg:text-4xl xl:text-6xl leading-9">{data?.content?.title}</h2>
                        <p className="content text-xs sm:text-sm lg:text-base">{data?.content?.content}</p>
                        <div className="sign-button mt-6 xl:mt-12">
                            <div className="button">
                            <Link href={'#'} >{data?.content?.button}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}