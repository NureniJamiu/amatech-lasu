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
import { generateImageUrl } from "@/helpers"
import axios from "axios"
import { useUser } from "@clerk/nextjs"
// import { Paperclip } from "lucide-react"
import Image from "next/image"

import { Image as ImageIcon, Paperclip } from "lucide-react"


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
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
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
  email: z.string({
    required_error: "Please input an email",
  }).email(),
  phone: z.coerce.number().min(11, {
    message: "Phone number must be at least characters.",
  }),
  membership: z.string(),
  level: z.string(),
  role: z.string(),
  linkedin: z.string().url(),
  twitter: z.string().url(),
  // createdBy: z.string(),
})


const AddMember = () => {

  const { user } = useUser();

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
    try {
      let imageFile = await generateImageUrl(formSchemaData.image[0])
      const values = {
        ...formSchemaData,
        image: imageFile,
        createdBy: user?.fullName
      }

      const { data } = await axios.post("/api/members/create", values)

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

        <div className="grid grid-cols-2 gap-1">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>Firstname</FormLabel>
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
                <FormLabel>Surname</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: Doe" {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="membership"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Membership</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="rounded">
                      <SelectValue placeholder="--Membership--" />
                    </SelectTrigger>
                    <SelectContent className="bg-white"
                    >
                      <SelectGroup >
                        <SelectLabel>Membership</SelectLabel>
                        <SelectItem value="executive">Executive</SelectItem>
                        <SelectItem value="legislative">Legislative</SelectItem>
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
            name="email"
            render={({ field }) => (
              <FormItem>
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
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="rounded">
                      <SelectValue placeholder="--Level--" />
                    </SelectTrigger>
                    <SelectContent className="bg-white"
                    >
                      <SelectGroup >
                        <SelectLabel>Level</SelectLabel>
                        <SelectItem value="100L">100L</SelectItem>
                        <SelectItem value="200L">200L</SelectItem>
                        <SelectItem value="300L">300L</SelectItem>
                        <SelectItem value="400L">400L</SelectItem>
                        <SelectItem value="500L">500L</SelectItem>
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input className="rounded" type="number" placeholder="e.g: 08012345678" {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="rounded">
                      <SelectValue placeholder="--Role--" />
                    </SelectTrigger>
                    <SelectContent className="bg-white"
                    >
                      <SelectGroup >
                        <SelectLabel>Role</SelectLabel>
                        <SelectItem value="president">President</SelectItem>
                        <SelectItem value="v. president">Vice President</SelectItem>
                        <SelectItem value="gen-sec.">Gen-Sec.</SelectItem>
                        <SelectItem value="ass. gen-sec.">Ass. Gen-Sec.</SelectItem>
                        <SelectItem value="fin-sec.">Fin-Sec.</SelectItem>
                        <SelectItem value="treasurer">Treasurer</SelectItem>
                        <SelectItem value="social dir.">Social Dir.</SelectItem>
                        <SelectItem value="sports dir.">Sports Dir.</SelectItem>
                        <SelectItem value="welfare dir.">Welfare Dir.</SelectItem>
                        <SelectItem value="p.r.o">P.R.O</SelectItem>
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
            name="linkedin"
            render={({ field }) => {
              return <FormItem>
                <FormLabel>Linkedin</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: https://linkedin/in/..." {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            }}
          />
          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: https://twitter/..." {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: Software Engineer with a passion for..." {...field} />
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
                    <Button size="lg" type="button">
                      <Input
                        type="file"
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
                    </Button>
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

        </div>


        <Button type="submit" className="btn-gradient rounded w-full mt-2" disabled={isSubmitting}>Submit</Button>
      </form>
      <Toaster />
    </Form>
  )
}

export default AddMember
