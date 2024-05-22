// components/Navbar.js
'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
// import Contactusform from './Contactus';

const Disclosure = dynamic(() => import('@headlessui/react').then((mod) => mod.Disclosure), { ssr: false });

const navigation = [
  { name: 'Services', href: '/services', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Blog', href: '/blogs', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center justify-between">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="text-2xl sm:text-4xl font-semibold text-black">
                  Sidharth
                </Link>
              </div>

              {/* LINKS */}
              <div className="hidden lg:flex items-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                        'px-3 py-4 rounded-md text-lg font-normal'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* <Contactusform /> */}
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon className="block h-6 w-6 cursor-pointer" aria-hidden="true" onClick={() => setIsOpen(true)} />
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
