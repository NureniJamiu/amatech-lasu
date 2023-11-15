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
import { useUser } from "@clerk/nextjs"
import { generateImageUrl } from "@/helpers"
import axios from "axios"
import { Paperclip } from "lucide-react"
import Image from "next/image"

interface EditLecturerProps {
  lecturer: {
    _id: string,
    title: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: number
    bio: string
    image: string
  };
}

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const FormSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string({
    required_error: "Please imput an email",
  }).email(),
  phone: z.coerce.number().min(11, {
    message: "Phone number must be at least characters.",
  }),
  title: z.string(),
  image: z
    .any()
    .nullable()
    .refine((files) => files === undefined || files?.[0]?.size <= MAX_FILE_SIZE
    )
    .refine(
      (files) => files === undefined || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
})


const EditLecturer: React.FC<EditLecturerProps> = ({ lecturer }) => {

  const { user } = useUser();


  const [content, setContent] = useState(lecturer.bio)
  const [prevImage, setPrevImage] = useState(lecturer.image || "")
  const [newImage, setNewImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: lecturer.title,
      firstname: lecturer.firstname,
      lastname: lecturer.lastname,
      email: lecturer.email,
      phone: lecturer.phone,
      image: undefined
    }
  })

  async function onSubmit(formSchemaData: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)
    try {
      let imageFile

      if (newImage) {
        imageFile = await generateImageUrl(formSchemaData.image[0])
      } else {
        imageFile = prevImage
      }

      const values = {
        ...formSchemaData,
        image: imageFile,
        bio: content,
        author: user?.fullName
      }

      const { data } = await axios.patch(`/api/lecturer/edit/${lecturer?._id}`, values)

      if (data.status !== 200) {
        toast.error(data.message)
      } else {
        toast.success(data.message)
      }
      setIsSubmitting(false)
    }
    catch (err) {
      // console.log(err)
      setIsSubmitting(false)
      toast.error("something went wrong")
    }
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        <Image src={!newImage ? prevImage : URL.createObjectURL(newImage)} width={50} height={50} alt="post image" />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Button size="lg" type="button">
                  <Input
                    type="file"
                    className="hidden"
                    id="fileInput"
                    onBlur={field.onBlur}
                    name={field.name}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      field.onChange(e.target.files);
                      setNewImage(e.target.files?.[0] || null);
                    }}
                    ref={field.ref}
                  />
                  <div className="col-span-2">
                    <label
                      htmlFor="fileInput"
                      className="bg-green-400 hover:bg-green-500 text-neutral-90 px-2 rounded-md cursor-pointer flex items-center"
                    >
                      <Paperclip />
                      <span className="whitespace-nowrap">
                        change image
                      </span>
                    </label>
                  </div>
                </Button>
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

        <Button type="submit" className="btn-gradient rounded w-full mt-2" disabled={isSubmitting}>Submit</Button>
      </form>
      <Toaster />
    </Form>
  )
}

export default EditLecturer
