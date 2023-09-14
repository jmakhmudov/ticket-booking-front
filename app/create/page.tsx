"use client"

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { Label } from "@/components/ui/label";


const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Invalid email.",
    }),
    topic: z.string().min(8, {
        message: "Invalid",
    }),
    date: z.string().min(8, {
        message: "Invalid",
    }),
    place: z.string().min(2, {
        message: "Invalid",
    }),
    number_of_seats: z.number().min(0, {
        message: "Invalid",
    }),
    ticket_price: z.string().min(8, {
        message: "Invalid",
    }),
    currency: z.string().min(3, {
        message: "Invalid",
    }),
    thumbnail: z.string().min(8, {
        message: "Invalid",
    }),
    description: z.string().min(8, {
        message: "Invalid",
    }),
})

const Create = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: {
            name: "",
            topic: "",
            date: "",
            place: "",
            number_of_seats: 0,
            ticket_price: "",
            thumbnail: "",
            description: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {

    }

    return (
        <main>
            <Navbar />
            <h1 className="pl-5 mt-5 text-2xl font-semibold">Create Event</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-5 max-w-lg">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Topic</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <Input type="datetime-local" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="place"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Place</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="number_of_seats"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number of seats</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ticket_price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ticket price</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Currency</FormLabel>
                                <section className="flex space-x-5">
                                    <div className="flex flex-col justify-center items-center">
                                        <FormControl>
                                            <Input type="radio" value="USD" className="w-4" />
                                        </FormControl>
                                        <Label>USD</Label>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <FormControl>
                                            <Input type="radio" value="UZS" className="w-4" />
                                        </FormControl>
                                        <Label>UZS</Label>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <FormControl>
                                            <Input type="radio" value="PLN" className="w-4" />
                                        </FormControl>
                                        <Label>PLN</Label>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <FormControl>
                                            <Input type="radio" value="RUB" className="w-4" />
                                        </FormControl>
                                        <Label>RUB</Label>
                                    </div>
                                </section>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="thumbnail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Thumbnail</FormLabel>
                                <FormControl>
                                    <Input type="file" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </main>
    );
}

export default Create;