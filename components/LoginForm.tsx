"use client"

import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const FormSchema = z.object({
    email: z.string().min(2, {
        message: "Invalid email.",
    }),
    password: z.string().min(8, {
        message: "Invalid",
    }),
})

export default function LoginForm() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [message, setMessage] = useState("");

    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        axios.post("http://127.0.0.1:8000/user/login/", {
            username: data.email,
            password: data.password,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
            
        })
            .then((response) => {
                setMessage(response.data.detail)
                setIsAuthenticated(true);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 flex flex-col justify-center items-center">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <Button type="submit">Submit</Button>
            </form>
            <p>{message}</p>
        </Form>
    );
}
