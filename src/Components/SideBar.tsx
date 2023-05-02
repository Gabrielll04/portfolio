import { TbBrandGithub, TbMenu2 } from 'react-icons/tb'
import { Menu, Transition } from '@headlessui/react'

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button><TbMenu2 className='flex text-3xl items-end'/></Menu.Button>

      {/* Use the `Transition` component. */}
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="flex flex-col w-32 origin-right absolute right-0 bg-zinc-100 ring-1 ring-zinc-200 p-1 rounded">
          <Menu.Item><span className='dropItem'>item</span></Menu.Item>
          <Menu.Item><span className='dropItem'>item</span></Menu.Item>
          <Menu.Item><span className='dropItem'>item</span></Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default function SideBar() {
  return (
    <div className='flex items-center justify-around w-full h-12 sm:h-20 z-10 sm:text-xl sm:px-0 px-3'>
      <span className='text-lg font-bold sm:font-bold sm:text-3xl'>gabriel.dev</span>
      <div className='flex sm:space-x-20'>
        <button className='navButton'>Portfolio</button>
        <button className='navButton'>Blogs</button>
        <button className='navButton'>items</button>
      </div>
      <button><TbBrandGithub className='text-5xl sm:hover:scale-110 transition invisible sm:visible'/></button>
      {/* <button className='' ><TbMenu2 className='text-2xl'/></button> */}
      {<div className='sm:hidden'>{ MyDropdown() }</div>}
    </div>
  )
} 