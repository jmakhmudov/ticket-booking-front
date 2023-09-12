import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface EventInfo {
    id: number;
    name: string;
    topic: string;
    date: string;
    place: string;
    number_of_seats: number;
    ticket_price: string;
    currency: string;
    host: number;
    guests: any[];
    thumbnail: string;
    description: string;
}

const initialState: EventInfo[] = [];

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<EventInfo[]>) => {
            return action.payload;
        },
        addEvent: (state, action: PayloadAction<EventInfo>) => {
            state.push(action.payload);
        },

        removeEvent: (state, action: PayloadAction<number>) => {
            return state.filter(event => event.id !== action.payload);
        },
    }
})

export const selectAllEvents = (state: RootState) => state.events;

export const { addEvent, removeEvent, setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;