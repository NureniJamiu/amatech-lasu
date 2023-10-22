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

interface EditPostProps {
  post: {
    id: string,
    title: string,
    content: string,
    image: string,
    category: string,
  };
}

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  category: z.string(),
  content: z.string().min(150, {
    message: "Post content must be at least 2 characters.",
  }),
  image: z.string({
    required_error: "Please choose an image",
  }),
})


const EditPost: React.FC<EditPostProps> = ({ post }) => {
  const [content, setContent] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: post.title,
      category: post.category,
      content: post.content,
      // image: post.image 
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(JSON.stringify(data, null, 2))
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
                  <Select {...field}>
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
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload image</FormLabel>
                  <FormControl>
                    <Input className="rounded" type="file" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
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

        <Button type="submit" className="btn-gradient rounded w-full mt-2">Submit</Button>
      </form>
      <Toaster />
    </Form>
  )
}

export default EditPost
