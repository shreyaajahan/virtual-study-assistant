"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { LayoutDashboard,Shield, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Progress } from "@/components/ui/progress";


function SideBar() {
    const MenuList = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
        { name: 'Upgrade', icon: Shield, path: '/dashboard/upgrade' },
        { name: 'Profile', icon: UserCircle, path: '/dashboard/profile' },
    ]
    const path = usePathname();

    return (
        <div className='h-screen shadow-md p-5'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
                <h2 className="font-bold text-2xl">EndGenius</h2>
            </div>

            <div className='mt-10'>
                <Button className="w-full">+ Create New</Button>

                <div className='mt-6'>
                    {MenuList.map((menu, index) => (
                        <div key={index} className={`flex items-center gap-2 mt-4 cursor-pointer
             hover:bg-slate-200 p-2 rounded-lg
             ${path == menu.path && 'bg-slate-200'}`}>
                            <menu.icon />
                            <span>{menu.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[90%]'>
                <h2 className='text-lg mb-2'>Available Credits: 5</h2>

                <Progress value={30}/>

                <h2 className='text-sm'>1 Out of 5 Credits Used</h2>

                <Link href={'/dashboard/upgrade'} className='text-primary text-xs mt-3'>Upgrade to create more</Link>
            </div>

        </div>
    )
}

export default SideBar
