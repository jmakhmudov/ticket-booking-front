'use client'

import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { selectAllEvents } from '@/features/events/eventsSlice';
import { MixIcon, PaperPlaneIcon, PersonIcon } from '@radix-ui/react-icons';
import format from 'date-fns/format';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

const EventInfo = () => {
    const router = useParams()
    const events = useSelector(selectAllEvents);

    const event = events.find(e => e.id === Number(router.id))

    return (
        <main>
            <Navbar />
            <section className='p-5 sm:px-10 space-y-5 '>
                <img className="w-full h-60 object-cover rounded-sm" src={event?.thumbnail} alt={event.name} />

                <section className='space-y-4'>
                    <p className='opacity-50'>{format(new Date(event.date), 'p, dd/MM/yyyy')}</p>
                    <h1 className="font-bold text-3xl">{event?.name}</h1>

                    <div className="text-sm my-2 space-x-2">
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

                    <p className='max-w-lg'>{event?.description}</p>
                </section>
            </section>

        </main>
    )
}

export default EventInfo;