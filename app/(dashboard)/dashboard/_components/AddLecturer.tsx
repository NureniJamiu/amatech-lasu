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
import { Image as ImageIcon, Paperclip } from "lucide-react"

import Image from "next/image"


const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const FormSchema = z.object({
  title: z.string(),
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
  image: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
})


const AddLecturer = () => {
  const { user } = useUser();


  const [bio, setBio] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      image: undefined,
    },
  })

  async function onSubmit(formSchemaData: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)
    const toastId = toast.loading("Creating lecturer, Please wait...")

    try {
      let imageFile = await generateImageUrl(formSchemaData.image[0])

      const values = {
        ...formSchemaData,
        image: imageFile,
        bio,
        createdBy: user?.fullName
      }

      const { data } = await axios.post("/api/lecturer/create", values)

      toast.dismiss(toastId)
      if (data.status !== 201) {
        toast.error(data.message)
        setIsSubmitting(false)
      } else {
        toast.success(data.message)
        setIsSubmitting(false)
      }
    }
    catch (err) {
      // console.log(err)
      toast.dismiss(toastId)
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
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
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
                  <Input className="rounded" placeholder="e.g: John" {...field} disabled={isSubmitting} />
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
                  <Input className="rounded" placeholder="e.g: Doe" {...field} disabled={isSubmitting} />
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
                  <Input className="rounded" placeholder="e.g: example@gmail.com" {...field} disabled={isSubmitting} />
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
                  <Input className="rounded" placeholder="e.g: 09018729178" type="number" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

        </div>
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload image</FormLabel>
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
                        setSelectedImage(e.target.files?.[0] || null);
                      }}
                      ref={field.ref}
                    />
                    <label
                      htmlFor="fileInput"
                      className="bg-green-500 hover:bg-green-600 text-neutral-90 rounded-md cursor-pointer inline-flex items-center"
                    >
                      <Paperclip />
                      <span className="whitespace-nowrap">
                        choose your image
                      </span>
                    </label>
                  </Button>
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          {selectedImage ? (
            <div className="float-right">
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                width={150}
                height={150}
              />
            </div>
          ) : (
            <div className="inline-flex items-center justify-between float-right">
              <div className="p-3 bg-slate-200  justify-center items-center flex">
                <ImageIcon size={56} />
              </div>
            </div>
          )}
        </div>


        <FormItem>
          <FormLabel>Bio</FormLabel>
          <div className="flex justify-between gap-2 border border-zinc-800 rounded">
            <CKEditor
              editor={ClassicEditor}
              data={bio}
              disabled={isSubmitting}
              onChange={(event, editor) => {
                const bio = editor.getData();
                setBio(bio);
              }}
            />
          </div>
        </FormItem>

        <Button type="submit" className="btn-gradient rounded w-full mt-2" disabled={isSubmitting}>Create Lecturer</Button>
      </form>
    </Form>
  )
}

export default AddLecturer
