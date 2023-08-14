"use client";
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';

import { manufacturers } from '@/constants';



const SearchManufacturer = ({selected, 
    setSelected}: SearchManufacturerProps) => {

        const [query, setQuery] = useState('')

        const filteredManufacturers = 
        query === "" ?  //if query was empty return unfiltered data otherwise filtered data
        manufacturers : manufacturers.filter((item) =>( 
            item.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g,""))  //replace empty spaces with empty string 
            //if user enters uppercase value or put empty spaces in between
            //this is going to work in every situation 
        ));

  return (
    <div className='search-manufacturer'>
        <Combobox value={selected} onChange=
        {setSelected}>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    className='ml-4'
                    alt='Car Logo'
                    />
                </Combobox.Button>

                <Combobox.Input 
                    className="search-manufacturer__input"
                    placeholder='volkswagen'
                    displayValue={(manufacturer:string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Transition
                 as={Fragment}
                 leave="transition ease-in duration-100"
                 leaveFrom="opacity-100"
                 leaveTo="opacity-0"
                 afterLeave={() => setQuery('')}
                 >
                    <Combobox.Options >
                       
                            {filteredManufacturers.map((items) => ( 
                            <Combobox.Option
                                key={items}
                                className={({ active}) => `
                                relative search-manufacturer__option
                                ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                `}
                                value={items}
                            >
                               {({selected,active}) => (
                                    <>
                                        <span className={`block truncate ${
                                            selected ? 'font-medium ' :'font-normal'
                                        }`}>
                                            {items}
                                        </span>
                                        {selected ? (
                                            <span
                                                className={`absolute
                                                inset-y-0 left-0 flex
                                                items-center pl-3 ${
                                                    active ? 'text-white' : 'text-teal-600'
                                                }`}
                                                >

                                                </span>
                                        ) : null}
                                    </>
                               )}
                            </Combobox.Option>
                            )
                        )}

                    </Combobox.Options>

                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer