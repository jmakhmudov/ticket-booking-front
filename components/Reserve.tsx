import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { EventInfo } from "@/features/events/eventsSlice";
import axios from "axios";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface ReservationProps {
    event: EventInfo
}

const Reserve = ({ event }: ReservationProps) => {
    const [seats, setSeats] = useState(1);

    const handlePayment = () => {
        axios.post("http://127.0.0.1:8000/reservations/create/", {
            event: event.id,
            number_of_tickets: seats
        })
            .then((res) => axios.patch(`http://127.0.0.1:8000/reservations/${res.data.id}/pay/`))
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={event.number_of_seats ? false : true} variant="secondary">Reserve</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] flex flex-col items-center justify-center">
                <DialogHeader>
                    <DialogTitle>Reservation</DialogTitle>
                    <DialogDescription>
                        Make reservation to <span className="italic font-bold">{event.name}</span> event here.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="seats" className="text-right">
                            Seats
                        </Label>
                        <Input
                            id="seats"
                            value={seats}
                            onChange={(e) => setSeats(Number(e.target.value))}
                            min="1"
                            max={event.number_of_seats}
                            className="col-span-3 w-32"
                            type="number"
                        />
                    </div>
                </div>
                <DialogDescription>Overall: <span className="text-lg font-semibold">{new Intl.NumberFormat().format(seats * Number(event.ticket_price))} {event.currency}</span></DialogDescription>
                <DialogFooter>
                    <Button type="submit" className="w-80" onClick={handlePayment}>Pay</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Reserve;