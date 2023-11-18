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
import { generateImageUrl } from "@/helpers"
import axios from "axios"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { Paperclip } from "lucide-react"

interface EditPostProps {
  post: {
    _id: string,
    title: string,
    content: string,
    image: string,
    category: string,
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
  title: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  category: z.string(),
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


const EditPost: React.FC<EditPostProps> = ({ post }) => {

  const { user } = useUser();

  const [content, setContent] = useState(post.content)
  const [prevImage, setPrevImage] = useState(post.image || "")
  const [newImage, setNewImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false)


  const form = useForm<z.infer<typeof FormSchema>>({

    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: post.title,
      category: post.category,
      image: undefined
    }
  })

  async function onSubmit(formSchemaData: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)
    const toastId = toast.loading("Updating post, Please wait...")
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
        content,
        author: user?.fullName
      }

      const { data } = await axios.patch(`/api/posts/edit/${post?._id}`, values)

      toast.dismiss(toastId)
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

        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>Post Title</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: Why Project Managers should prioritize collaboration..." {...field} />
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
        </div>

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

        <Button type="submit" className="btn-gradient rounded w-full mt-2" disabled={isSubmitting}>Update Post</Button>
      </form>
      <Toaster />
    </Form>
  )
}

export default EditPost
