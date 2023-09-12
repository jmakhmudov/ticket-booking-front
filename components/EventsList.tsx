"use client"

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setEvents, selectAllEvents } from "@/features/events/eventsSlice";
import { useEffect } from "react";
import axios from 'axios';

const EventsList = () => {
    const dispatch = useDispatch();
    const events = useSelector(selectAllEvents);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/events/all/").then((response) => {
            dispatch(setEvents(response.data))
        });
    }, [])

    const renderedEvents = events.map((event) => (
        <h1 key={event.id}>{event.name}</h1>
    ))

    return (
        <section>
            {renderedEvents}
        </section>
    );
}

export default EventsList;
