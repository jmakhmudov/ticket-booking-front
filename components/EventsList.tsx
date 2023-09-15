"use client"

import { selectAllEvents, setEvents } from "@/features/events/eventsSlice";
import {
    MixIcon,
    PaperPlaneIcon,
    PersonIcon
} from "@radix-ui/react-icons";
import axios from 'axios';
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventSkeleton from "./EventSkeleton";
import Reserve from "./Reserve";
import { Badge } from "./ui/badge";

const EventsList = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const events = useSelector(selectAllEvents);
    const sortedEvents = events.slice().sort((a, b) => a.date.localeCompare(b.date));

    const handleClick = (key: number) => {
        
    }

    useEffect(() => {
        setTimeout(() => {
            axios.get("http://127.0.0.1:8000/events/all/").then((response) => {
                dispatch(setEvents(response.data))
            });
        }, 1000)
    }, [])

    const renderSkeletons = Array.from({ length: 4 }, (value, index) => (
        <div key={index}>
            <EventSkeleton />
        </div>
    ));

    const renderedEvents = sortedEvents.map((event) => (
        <article key={event.id} onClick={() => handleClick(event.id)} className="border-[1px] rounded-sm cursor-pointer">
            <img alt={event.name} className="h-72 w-full object-cover object-center rounded-sm" src={event.thumbnail} />

            <section className="p-5">
                <h1 className="text-2xl font-bold">{event.name}</h1>
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
                <p>{format(new Date(event.date), 'p, dd/MM/yyyy')}</p>

                <p className="truncate w-10/12 opacity-50">{event.description}</p>

                <div className="text-xl font-bold mt-5 flex justify-between items-center">
                    <Reserve event={event}/>
                    {
                        Number(event.ticket_price) == 0 ?
                            <p>Free</p>
                            : <p>{new Intl.NumberFormat().format(Number(event.ticket_price))} <span className="text-sm">{event.currency}</span></p>
                    }
                </div>
            </section>
        </article>
    ))

    return (
        <section className="p-5 lg:p-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {renderedEvents.length ? renderedEvents : renderSkeletons}
        </section>
    );
}

export default EventsList;
