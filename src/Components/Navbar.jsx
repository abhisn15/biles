import * as React from 'react'
import { Link } from 'react-router-dom';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Navbar = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Disclosure as="nav" className="bg-white shadow-md">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/">
                                        <h1
                                            className="logo block relative text-2xl w-auto font-bold lg:hidden"
                                        ><span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'>BI</span>LES</h1>
                                    </Link>
                                    <Link to='/'>
                                        <h1
                                            className="logo hidden relative text-2xl w-auto font-bold lg:block"
                                        ><span className='bg-gradient-to-r from-gray-200 to-indigo-400 text-transparent bg-clip-text'>BI</span>LES</h1>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-[#35BBB9]' : 'text-gray-500 trantition duration-500 hover:text-[#35BBB9] hover:text-[#35BBB9]',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div class="flex justify-center space-x-2">
                                    <button
                                        type="button"
                                        data-te-animation-init
                                        data-te-ripple-color="light"
                                        class="inline-block rounded box-cover bg-[#35BBB9] px-8 pt-2.5 pb-2 text-xs font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] max-[600px]:px-4"
                                        onClick={() => setShowModal(true)}>
                                        MASUK
                                    </button>
                                    {showModal ? (
                                        <>
                                            <div
                                                className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 max-[600px]:right-4 left-2 max-[2040]:"
                                            >
                                                <div className="opacity-25 fixed inset-0 z-0 bg-black"></div>
                                                {/* <div className="relative w-auto my-6 mx-auto max-w-6xl">
                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full justify-between bg-white outline-none focus:outline-none">
                                                        <div className="flex items-center">
                                                            <button
                                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={() => setShowModal(false)}
                                                            ><span className='text-3xl'>
                                                                    X
                                                                </span>
                                                            </button>
                                                            <div className="relative p-6 flex-auto">
                                                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                                    I always felt like I could do anything. That’s the main
                                                                    thing people are controlled by! Thoughts- their perception
                                                                    of themselves! They're slowed down by their perception of
                                                                    themselves. If you're taught you can’t do anything, you
                                                                    won’t do anything. I was taught I could do everything.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start justify-between p-5">
                                                            <h3 className="text-3xl font-semibold">
                                                                MASUK
                                                            </h3>
                                                        </div>
                                                    <button
                                                        className="bg-[#35BBB9] text-white active:bg-[#35BBB9] font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(true)}
                                                    >
                                                        Masuk Sekarang
                                                    </button>
                                                    </div>
                                                </div> */}
                                                <div className='border rounded bg-white w-96 items-start gap-6 z-50 px-10 py-6 animate__fadeIn animate__delay-2s'>
                                                    <div className='ml-6 animate-fade-in'>
                                                        <button className='relative left-72 text-xl max-[2400px]:left-[270px] max-[600px]:left-65 max-[420px]:left-[250px] max-[360px]:left-[235px]'
                                                            type="button"
                                                            onClick={() => setShowModal(false)}>
                                                            X
                                                        </button>
                                                        {/* Tabs */}
                                                        <Box className="pt-1" sx={{ width: '100%' }}>
                                                            <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                                                                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
                                                                    style: {
                                                                        backgroundColor: "#35BBB9"
                                                                    }
                                                                }} sx={{
                                                                    "& .MuiTab-root.Mui-selected": { color: "#35BBB9", fontWeight: "bold" },
                                                                }}>
                                                                    <Tab sx={{ fontWeight: 500 }} label="Masuk" {...a11yProps(0)} />
                                                                    <Tab sx={{ fontWeight: 500 }} label="Daftar" {...a11yProps(1)} />
                                                                </Tabs>
                                                            </Box>
                                                            {/* FORM USER MASUK TABS  */}
                                                            <TabPanel className="relative right-8 pt-4 w-auto max-[600px]:ml-1.5" value={value} index={0}>
                                                                <span className='font-bold text-gray-500'>Nomor HP atau Email</span>
                                                                <Box
                                                                    component="form"
                                                                    sx={{
                                                                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                                                                    }}
                                                                    className=''
                                                                    noValidate
                                                                    autoComplete="off"
                                                                >
                                                                    <div className='relative right-2'>
                                                                        <TextField className='bg-gray-100 drop-shadow-md'
                                                                            id="outlined-multiline-flexible"
                                                                            maxRows={4}
                                                                        />
                                                                    </div>
                                                                    <Button sx={{ "&:hover": { backgroundColor: "#35BBB9" }, backgroundColor: "#35BBB9", paddingTop: "8px", paddingBottom: "8px", paddingRight: "90px", marginTop: "25px", }} variant="contained">
                                                                        <span className='relative left-9 w-40 text-gray-200 font-bold'>Masuk Sekarang</span>
                                                                    </Button>
                                                                    <div className='pt-3'>
                                                                        <Link to="/" className='relative left-[156px] h-full text-[15px] text-gray-600'>Butuh bantuan?</Link>
                                                                    </div>
                                                                    <div className='flex justify-center items-center pt-6'>
                                                                        <span className='w-[300px] text-[12px] text-gray-300'>
                                                                            Atau masuk dengan
                                                                        </span>
                                                                        <hr className='absolute left-[158px] bg-gray-300 h-[3px] w-[134px] ' />
                                                                    </div>
                                                                    <Button sx={{ "&:hover": { backgroundColor: "#EBF8F8" }, width: "262px", backgroundColor: "#EBF8F8", paddingTop: "6px", paddingBottom: "6px", paddingRight: "112px", marginTop: "25px" }} variant='contained'>
                                                                        <div className='flex relative justify-center items-center text-black left-11'>
                                                                            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className='mr-2 w-8' />
                                                                            <span className='normal-case font-[500] text-[16px]'>Google</span>
                                                                            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/arrow-2693162-2234845.png?f=avif&w=256" className="ml-2 w-7" />
                                                                        </div>
                                                                    </Button>
                                                                </Box>
                                                            </TabPanel>
                                                            {/* FORM USER DAFTAR TABS */}
                                                            <TabPanel className="relative right-9 pt-4 max-[600px]:ml-1.5" value={value} index={1}>
                                                                <span className='font-bold text-gray-500'>Nomor HP atau Email</span>
                                                                <Box
                                                                    component="form"
                                                                    sx={{
                                                                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                                                                    }}
                                                                    className=''
                                                                    noValidate
                                                                    autoComplete="off"
                                                                >
                                                                    <div className='relative right-2'>
                                                                        <TextField className='bg-gray-100 drop-shadow-md'
                                                                            id="outlined-multiline-flexible"
                                                                            maxRows={4}
                                                                        />
                                                                    </div>
                                                                    <div className='flex justify-center items-center pt-6'>
                                                                        <span className='w-[300px] text-[12px] text-gray-300'>
                                                                            Atau daftar dengan
                                                                        </span>
                                                                        <hr className='absolute left-[158px] bg-gray-300 h-[3px] w-[134px]' />
                                                                    </div>
                                                                    <Button sx={{ "&:hover": { backgroundColor: "#EBF8F8" }, width: "262px", backgroundColor: "#EBF8F8", paddingTop: "6px", paddingBottom: "6px", paddingRight: "112px", marginTop: "25px" }} variant='contained'>
                                                                        <div className='flex relative justify-center items-center text-black left-11'>
                                                                            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className='mr-2 w-8' />
                                                                            <span className='normal-case font-[500] text-[16px]'>Google</span>
                                                                            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/arrow-2693162-2234845.png?f=avif&w=256" className="ml-2 w-7" />
                                                                        </div>
                                                                    </Button>
                                                                    <Button sx={{ "&:hover": { backgroundColor: "#35BBB9" }, backgroundColor: "#35BBB9", paddingTop: "8px", paddingBottom: "8px", paddingRight: "90px", marginTop: "25px", }} variant="contained">
                                                                        <span className='relative top-[1.5px] left-9 w-40 text-gray-200 font-bold'>Daftar Sekarang</span>
                                                                    </Button>
                                                                    <div className='flex relative left-[15px] text-center justify-center items-center w-[240px] text-[12px] mt-4'>
                                                                        <h1>Dengan mendaftar saya telah menyetujui <Link to="/" className='text-[#35BBB9]'>Syarat</Link> dan <Link to="/" className='text-[#35BBB9]'>Ketentuan</Link> serta <Link to="/" className='text-[#35BBB9]'>Kebijakan Privasi</Link></h1>
                                                                    </div>
                                                                </Box>
                                                            </TabPanel>
                                                        </Box>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null}
                                    {/* <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        class="inline-block rounded ring-1 ring-[#35BBB9] px-8 pt-2 pb-2 text-xs font-bold uppercase leading-normal text-[#35BBB9] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] hidden relative lg:block">
                                        DAFTAR
                                    </button> */}
                                </div>
                                {/* Profile dropdown
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu> */}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}

export default Navbar;