"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
// import { useState } from "react"

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
import { useState } from "react"
import Image from "next/image"
import { Image as ImageIcon, Paperclip } from "lucide-react"

import axios from "axios";
import { useUser } from "@clerk/nextjs"
import { generateImageUrl } from "@/helpers"

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  category: z.string(),
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


const AddPost = () => {

  const { user } = useUser();


  const [content, setContent] = useState('')
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
    const toastId = toast.loading("Creating post, Please wait...")
    try {

      let imageFile = await generateImageUrl(formSchemaData.image[0])
      const values = {
        ...formSchemaData,
        image: imageFile,
        content,
        author: user?.fullName
      }

      const { data } = await axios.post("/api/posts/create", values)

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
      setIsSubmitting(false)
      toast.error("something went wrong")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">

        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>Post Title</FormLabel>
                <FormControl>
                  <Input
                    className="rounded"
                    disabled={isSubmitting}
                    placeholder="e.g: Why Project Managers should prioritize collaboration..." {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            }}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="rounded">
                      <SelectValue placeholder="-Select Category-" />
                    </SelectTrigger>
                    <SelectContent className="bg-white"
                    >
                      <SelectGroup >
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="social">Social</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="welfare">Welfare</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <div className="">
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
                        className="bg-blue-500 hover:bg-blue-600 text-neutral-90  rounded-md cursor-pointer inline-flex items-center"
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
          </div>
          {selectedImage ? (
            <div className="">
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                width={150}
                height={150}
              />
            </div>
          ) : (
            <div className="inline-flex items-center justify-between">
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
              disabled={isSubmitting}
              data={content}
              onChange={(event, editor) => {
                const content = editor.getData();
                setContent(content);
              }}
            />
          </div>
        </FormItem>

        <Button type="submit" className="btn-gradient rounded w-full mt-2" disabled={isSubmitting}>Create Post</Button>
      </form>
    </Form>
  )
}

export default AddPost
