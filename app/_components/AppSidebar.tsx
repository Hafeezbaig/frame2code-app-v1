import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, CircleDollarSign, HelpCircle, Home, Inbox, Search, Settings, Github, Link, Bug, ImageIcon } from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const items = [
    {
        title: "Workspace",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Github Code",
        url: "https://github.com/Hafeezbaig/frame2code-app-v1",
        icon: Github,
    },
    {
        title: "Portfolio",
        url: "https://hafeezbaig.in",
        icon: Link,
    },
    {
        title: "Bugs Report / Feedback",
        url: "https://hafeezbaig.in/#contact",
        icon: Bug,
    },
    {
        title: "Example Wireframe",
        url: "/wireframe-example-1.jpg",
        icon: ImageIcon,
    },
]

export function AppSidebar() {
    const path = usePathname()
    
    return (
        <Sidebar>
            <SidebarHeader>
                <div className='p-4'>
                    <Image src={'./logo2.svg'} alt='logo' width={120} height={120}
                        className='w-full h-full' />
                    <h2 className='text-sm text-gray-400 text-center'>Build & Deploy</h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu className='mt-5'>
                            {items.map((item, index) => (
                                // <SidebarMenuItem key={item.title} className='p-2'>
                                //     <SidebarMenuButton asChild className=''>
                                <a href={item.url} key={index} className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg 
                                 ${path==item.url&&'bg-gray-200'}
                                 
                                 `}>
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </a>
                                //     </SidebarMenuButton>
                                // </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <h2 className='p-2 text-gray-400 text-sm'>Release v1.0</h2>
            </SidebarFooter>
        </Sidebar>
    )
}