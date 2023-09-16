'use client'

import Navbar from '@/components/Navbar';
import Reserve from '@/components/Reserve';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { EventInfo } from '@/features/events/eventsSlice';
import { MixIcon, PaperPlaneIcon, PersonIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import format from 'date-fns/format';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const EventInfo = () => {
    const [event, setEvent] = useState<EventInfo>();
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/events/all/").then((response) => {
            console.log(response.data)
            setEvent(response.data.find((e: EventInfo) => e.id === Number(id)))
        });
    }, [])
    console.log(event)

    return (
        <main className='pb-10'>
            <Navbar />
            {
                event ?
                    <section className='p-5 sm:px-10 space-y-5 '>
                        <img className="w-full h-60 object-cover rounded-sm object-center" src={event.thumbnail} alt={event.name} />

                        <section className='space-y-4 md:flex md:justify-between md:items-center'>
                            <div className='space-y-4'>
                                <p className='opacity-50 text-sm'>{format(new Date(event.date), 'p, dd/MM/yyyy')}</p>
                                <h1 className="font-bold text-3xl">{event.name}</h1>

                                <div className="text-sm my-2 space-x-2 md:mb-5">
                                    <Badge >
                                        <PaperPlaneIcon className="w-3 mr-1" />
                                        {event.place}
                                    </Badge>
                                    <Badge>
                                        <MixIcon className="w-3 mr-1" />
                                        {event.topic}
                                    </Badge>
                                    <Badge variant={Number(event.number_of_seats) < 10 ? "destructive" : "default"}>
                                        <PersonIcon className="w-3 mr-1" />
                                        {event.number_of_seats} left
                                    </Badge>
                                </div>
                                <Reserve event={event} />
                            </div>
                            <p className='max-w-lg'>{event.description}</p>
                        </section>
                    </section>
                    :
                    <div className='p-5 sm:px-10 space-y-5 '>
                        <Skeleton className="h-72 w-full rounded-sm" />
                        <div className="p-5 space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    </div>
            }
        </main>
    )
}

export default EventInfo;