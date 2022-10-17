import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'

const PlaysFilters = (props) => {
    return (
        <>
            <Disclosure>
                {
                    ({ open }) => (
                        <>
                            <Disclosure.Button className="py-2 flex items-center gap-3">
                                {open ? <BiChevronUp /> : <BiChevronDown />}
                                <span className={open ? "text-red-600" : "text-gray-700"}>{props.title}</span>
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500">
                                <div className='flex items-center gap-3 flex-wrap'>
                                    {props.tags.map((tag) => (
                                        <>
                                            <div>
                                                <div className='border-2 border-gray-200 px-3 py-1'>
                                                    <span className='text-red-600'>{tag}</span>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )
                }
            </Disclosure>
            <div className='my-2 w-10/12'>
                <hr />
            </div>
        </>
    )
}

export default PlaysFilters;