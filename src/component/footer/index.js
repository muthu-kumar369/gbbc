import Image from "next/image";
import Link from "next/link";

export default function Footer({data}){
    return (
        <>
        <section className="footer-section">
        <div className="footer p-3">
                    <div className="footer-logo">
                        <Image src={data?.logo} alt="footer logo"></Image>
                    </div>
                    <div className="copy-right">
                        <p>{data?.copyright}</p>
                        <div className="menu">
                            {data?.footerMenu ? data?.footerMenu.map((item, i) => {
                                return (
                                    <div className="menu-item" key={i}>
                                        <Link href={`${item == 'Contact Us' ? `mailto:${data?.email}` :"#"}`} key={i}>{item}</Link>
                                    </div>
                                )
                            }) : ""}
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}