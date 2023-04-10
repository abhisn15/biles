import React from "react";
import Typewriter from "typewriter-effect";
import Footer from "../Components/Footer";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const Home = () => {
    // const typewriter = new Typewriter(app, {
    //     typeString("untuk Siswa / Siswi SMA")
    //     .pauseFor(1000)
    //     .deleteAll()
    //     .start()
    //   });
    const bprivate = [
        {
            id: 1,
            name: "Sri Wahyuningsih Am.d",
            dsc: "Beliau ini sangat cantik, dia adalah lulusan D3",
            harga: 10000000,
            img: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1661753020/attached_image/inilah-cara-merawat-anak-kucing-yang-tepat.jpg",
        },
        {
            id: 2,
            name: "Abhi Surya Nugroho Sp.d",
            dsc: "Beliau ini sangat ganteng, dia adalah lulusan S3",
            harga: 14000000,
            img: "https://asset.kompas.com/crops/tEvFrUMgNtabMiI03Ysy5IUhxOk=/0x0:1000x667/750x500/data/photo/2022/05/12/627c99e9be29a.jpg",
        },
        {
            id: 3,
            name: "Bu Guru",
            dsc: "Beliau ini sangat cantik, dia adalah lulusan S3",
            harga: 10000000,
            img: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1661753020/attached_image/inilah-cara-merawat-anak-kucing-yang-tepat.jpg",
        },
    ]

    const banner = [
        {
            id: 1,
            img: "https://www.brainacademy.id/hubfs/03%20-%20Homepage%20Brainacademy%202022/Revamp%20Homepage/aset-baon.png",
            judul: "Bimbel Online",
            dsc: "Bimbel online interaktif dengan kelas live teaching, dan soal yang bisa di akses oleh pelajar yang sudah berlangganan"
        },
        {
            id: 2,
            img: "https://www.shutterstock.com/shutterstock/videos/1063417675/thumb/1.jpg?ip=x480",
            judul: "Bimbel Private",
            dsc: "Bimbel private interaktif dengan kelas live teaching, dansoal yang bisa di akses oleh pelajar yang sudah berlangganan"
        }
    ]

    const list = [
        {
            label: "BiOnline",
            value: "dashboard",
            icon: Square3Stack3DIcon,
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "BiPrivate",
            value: "profile",
            icon: UserCircleIcon,
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        }
    ];

    return (
        <div className="banner h-[500px] w-full bg-bottom bg-cover bg-no-repeat bg-[url('https://2828691.fs1.hubspotusercontent-na1.net/hubfs/2828691/03%20-%20Homepage%20Brainacademy%202022/image%20251%20(1).png')]">
            <div className="containe mx-auto">
                <h1 className="judul-banner md:ml-10 pt-40 ml-2 md:pt-40">Bimbel online & Private<br></br>
                    <Typewriter
                        options={{
                            strings: "untuk Siswa / Siswi SMA",
                            loop: true,
                            autoStart: true,
                        }}
                    />
                </h1>
                <div className="flex justify-center flex-wrap max-[720px]:mx-5 mx-auto lg:flex pt-48 lg:justify-center lg:align-items lg:gap-20 max-[1024px]:gap-10 lg:pt-44">
                    {banner.map((banner, i) =>
                        <>
                            <Card className="max-[550px]:mt-12" sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={banner.img}
                                        alt="bimbel online"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" fontWeight="500">
                                            {banner.judul}
                                        </Typography>
                                        <Typography variant="body" color="text.secondary">
                                            {banner.dsc}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </>
                    )}
                </div>
                <h1 className="title text-[38px] font-bold text-center mt-14 mx-5 max-[1024px]:text-[20px]">Yukk Pelajari produk Biles yang tersedia<br/>sesuai dengan kebutuhan kamu</h1>
                <Tabs value="dashboard" className="mt-14">
                    <TabsHeader className="mb-10 rounded-lg bg-white shadow-lg mx-auto w-80" indicatorProps={{
                        className: "tab text-blue-500 max-[400px]:w-[140px] mx-auto",
                    }}> 
                        {list.map(({ label, value, icon }) => (
                            <Tab key={value} value={value} className="mx-auto">
                                <div className="flex items-center gap-2"
                                >
                                    {React.createElement(icon, { className: "w-5 h-5" })}
                                    {label}
                                </div>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <div className="flex justify-center">
                        <TabsBody className=" bg-white rounded-lg shadow-lg w-[1800px] mx-5 text-center">
                            {list.map(({ value, desc }) => (
                                <TabPanel className="font-medium" key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </div>
                </Tabs>
                {/* <div className="flex mt-36 gap-20 justify-center align-items">
                    {bprivate.map((bprivate, i) =>
                        <>
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                            >
                                <a href="#">
                                    <img className="p-0 rounded-t-lg" src={data.img} alt="product image" />
                                </a >
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl mt-6 font-semibold tracking-tight text-gray-900">{data.name}</h5>
                                    </a>
                                    <p className="text-base py-3 font-medium tracking-tight text-gray-900">{data.dsc}</p>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900">Rp. {data.harga}</span>
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    }
                </div> */}
            </div>
            <Footer />
        </div >
    )
}

export default Home;