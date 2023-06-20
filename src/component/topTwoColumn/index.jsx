import Image from "next/image";
import Link from "next/link";

export default function TopTwoColumn({ data }) {
    return (
        <>
            <section className="top-two-column-section">
                <div className="top-box">
                    <div className="header">
                        <h2 className="title  md:text-2xl lg:text-3xl  xl:text-4xl">{data?.title}</h2>
                        <p className="subtitle mt-4 text-sm md:text-base">{data?.subtitle}</p>
                    </div>
                    <div className="top-two-column ">
                        <div className=" lg:flex">
                            <div className="contents">
                                {data?.contents ? data?.contents.map((item, index) => {
                                    return (
                                        <div className="content" key={index}>
                                            <p>{item}</p>
                                        </div>
                                    )
                                }) : ""}
                            </div>
                            <div className="grid-images">
                                {data?.images ? data?.images.map((items, index) => {
                                    return (
                                        <div className={`column-image column-image${index}`} key={index}>
                                            {items?.image.map((item, i) => {
                                                return (
                                                    <div className="image-item">
                                                        <Image src={item} key={i} width={"100%"} height={"100%"}></Image>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                }) : ""}

                            </div>
                        </div>
                        <div className="content-buttons lg:flex">
                            {data?.buttons ? data?.buttons.map((item, index) => {
                                return (
                                    <>
                                        <div className={`${item?.design} mt-4 md:mt-10 w-`} key={index} >
                                            <Link href={"#"}  >{item?.text}</Link>
                                        </div>
                                    </>
                                )
                            }) : ""}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}