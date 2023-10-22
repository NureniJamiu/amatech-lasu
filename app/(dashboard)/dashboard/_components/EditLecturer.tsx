"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import toast, { Toaster } from "react-hot-toast"

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface EditLecturerProps {
  lecturer: {
    id: string,
    title: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: number
  };
}

const FormSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  image: z.string({
    required_error: "Please choose an image",
  }),
  email: z.string({
    required_error: "Please imput an email",
  }).email(),
  phone: z.number().min(11, {
    message: "Phone number must be at least characters.",
  }),
  title: z.string()
})


const EditLecturer: React.FC<EditLecturerProps> = ({ lecturer }) => {
  const [content, setContent] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: lecturer.title,
      firstname: lecturer.firstname,
      lastname: lecturer.lastname,
      email: lecturer.email,
      phone: lecturer.phone,
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(JSON.stringify(data, null, 2))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">

        <div className="flex justify-between gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-[80px] rounded">
                      <SelectValue placeholder="-Select-" />
                    </SelectTrigger>
                    <SelectContent className="bg-white"
                    >
                      <SelectGroup >
                        <SelectLabel>Title</SelectLabel>
                        <SelectItem value="mr.">Mr.</SelectItem>
                        <SelectItem value="mrs.">Mrs.</SelectItem>
                        <SelectItem value="miss.">Miss</SelectItem>
                        <SelectItem value="dr.">Dr.</SelectItem>
                        <SelectItem value="prof.">Prof.</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: John" {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            }}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: Doe" {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: example@gmail.com" {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: 09018729178" {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input className="rounded" type="file" {...field} />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <div className="flex justify-between gap-2 border border-zinc-800 rounded">
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                const content = editor.getData();
                setContent(content);
              }}
            />
          </div>
        </FormItem>

        <Button type="submit" className="btn-gradient rounded w-full mt-2">Submit</Button>
      </form>
      <Toaster />
    </Form>
  )
}

export default EditLecturer
