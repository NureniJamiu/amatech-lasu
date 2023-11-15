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

interface EditMemberProps {
  member: {
    id: string
    firstname: string
    lastname: string
    membership: string
    role: string
    email: string
    phone: number
    level: string
    linkedin: string
    twitter: string
    bio: string
    image: string
  };
}

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
  image: z.string({
    required_error: "Please choose an image",
  }),
  email: z.string({
    required_error: "Please imput an email",
  }).email(),
  phone: z.number().min(11, {
    message: "Phone number must be at least characters.",
  }),
  membership: z.string(),
  level: z.string(),
  role: z.string(),
  linkedin: z.string().url(),
  twitter: z.string().url(),
})


const EditMember: React.FC<EditMemberProps> = ({ member }) => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: member.firstname,
      lastname: member.lastname,
      membership: member.membership,
      email: member.email,
      phone: member.phone,
      level: member.level,
      role: member.role,
      linkedin: member.linkedin,
      twitter: member.twitter,
      bio: member.bio,
      // image: member.image
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
                  <Select {...field}>
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
                  <Select {...field}>
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
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input className="rounded" placeholder="e.g: 08012345678" {...field} />
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
                  <Select {...field}>
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
                    <Input className="rounded" type="file" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="btn-gradient rounded w-full mt-2">Submit</Button>
      </form>
      <Toaster />
    </Form>
  )
}

export default EditMember
