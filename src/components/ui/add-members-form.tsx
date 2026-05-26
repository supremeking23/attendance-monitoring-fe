import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserPlus } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import {toast} from "sonner"
import { Loader2 } from "lucide-react"

import React from 'react'

export function AddMembersForm() {
    const [isAddModalOpen, setIsAddModalOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        // TODO: wire up actual submit logic here
        // STEP 1: I-trigger ang Loading Toast at i-store ang ID nito
        const toastId = toast.loading("Processing your request...")

        try {
        // Simulation ng server response (1.5 seconds)
        // Dito rin papasok yung Redux Dispatch mo later
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // STEP 2: I-update ang SAME toast gamit ang ID
        toast.success("Member added successfully", {
            id: toastId, // Ito ang secret sauce para hindi sila mag-overlap
            description: "The directory has been updated.",
        })
        
        // Close modal/sheet after success
        // setIsOpen(false)
        } catch (error) {
            toast.error("Something went wrong", { id: toastId })
        } finally {
            setIsLoading(false)
        }
        setIsAddModalOpen(false)
    }

    return (
    <Sheet open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <SheetTrigger asChild>
            <Button className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Add Member
            </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-lg p-6 overflow-y-auto">
            <SheetHeader className="mb-4 px-0 space-y-1 pb-0">
            <SheetTitle>Add New Member</SheetTitle>
            <SheetDescription>Fill in the details to add a new member to the directory.</SheetDescription>
            </SheetHeader>

            <form onSubmit={handleSubmit} className="space-y-6 py-2">
                <section className="rounded-xl border border-muted/30 bg-muted/10 p-4">
                    <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold">Personal Information</h2>
                    <span className="text-xs text-muted-foreground"></span>
                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="firstname">First Name <span className="text-destructive">*</span></Label>
                            <Input type="text" id="firstname" name="firstname" placeholder="Juan"  />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="middlename">Middle Name </Label>
                            <Input type="text" id="middlename" name="middlename" placeholder="Dela" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastname">Last Name <span className="text-destructive">*</span></Label>
                            <Input type="text" id="lastname" name="lastname" placeholder="Cruz"  />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="birthdate">Birthdate <span className="text-destructive">*</span></Label>
                            <Input type="text" id="birthdate" name="birthdate" placeholder="YYYY-MM-DD"  />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" placeholder="juan@example.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
                            <Input type="tel" id="phone" name="phone" placeholder="09xx xxx xxxx"  />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="gender">Gender</Label>
                            <Select name="gender">
                                <SelectTrigger id="gender">
                                    <SelectValue placeholder="Select a gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Gender</SelectLabel>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="marital_status">Marital Status</Label>
                            <Select name="marital_status">
                                <SelectTrigger id="marital_status">
                                    <SelectValue placeholder="Select a marital status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Marital Status</SelectLabel>
                                        <SelectItem value="single">Single</SelectItem>
                                        <SelectItem value="married">Married</SelectItem>
                                        <SelectItem value="divorced">Divorced</SelectItem>
                                        <SelectItem value="widowed">Widowed</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="occupation">Occupation</Label>
                            <Select name="occupation">
                                <SelectTrigger id="occupation">
                                    <SelectValue placeholder="Select an occupation" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {/* TODO: Populate with actual occupations. Data must come from database */}
                                        <SelectLabel>Occupation</SelectLabel>
                                        <SelectItem value="student">Student</SelectItem>
                                        <SelectItem value="teacher">Teacher</SelectItem>
                                        <SelectItem value="engineer">Engineer</SelectItem>
                                        <SelectItem value="doctor">Doctor</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="photo">Photo</Label>
                            {/* TODO: Implement photo upload functionality */}
                            <Input type="text" id="photo" placeholder="Photo URL" />
                        </div>
                    </div>
                   
                </section>

                <section className="rounded-xl border border-muted/30 bg-muted/10 p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold">Address</h2>
                        <span className="text-xs text-muted-foreground"></span>
                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="streetAddress">Street Address <span className="text-destructive">*</span></Label>
                            <Input type="text" id="streetAddress" name="streetAddress" placeholder="123 Main St"  />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="addressLine2">Address Line 2</Label>
                            <Input type="text" id="addressLine2" name="addressLine2" placeholder="Apt 4B" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="city">City <span className="text-destructive">*</span></Label>
                            <Input type="text" id="city" name="city" placeholder="New York"  />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="postalCode">Postal Code <span className="text-destructive">*</span></Label>
                            <Input type="text" id="postalCode" name="postalCode" placeholder="10001"  />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="region">Region/State</Label>
                            <Input type="text" id="region" name="region" placeholder="NY" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="country">Country <span className="text-destructive">*</span></Label>
                            <Select name="country" >
                                <SelectTrigger id="country">
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Country</SelectLabel>
                                        <SelectItem value="France">France</SelectItem>
                                        <SelectItem value="Germany">Germany</SelectItem>
                                        <SelectItem value="Spain">Spain</SelectItem>
                                        <SelectItem value="Italy">Italy</SelectItem>
                                        <SelectItem value="Netherlands">Netherlands</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </section>

                <section className="rounded-xl border border-muted/30 bg-muted/10 p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold">Church Related Information</h2>
                        <span className="text-xs text-muted-foreground"></span>
                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="date_joined">Date Joined</Label>
                            <Input type="text" id="date_joined" name="date_joined" placeholder="YYYY-MM-DD" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="role">Role</Label>
                            <Select name="role">
                                <SelectTrigger id="role">
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Roles</SelectLabel>
                                        <SelectItem value="member">Member</SelectItem>
                                        <SelectItem value="leader">Leader</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="member_status">Member Status</Label>
                            <Select name="member_status">
                                <SelectTrigger id="member_status">
                                    <SelectValue placeholder="Select a status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Member Status</SelectLabel>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="inactive">Inactive</SelectItem>
                                        {/* TODO -- data must come from database, other status could be banned */}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="ministry_involvement">Ministry Involvement</Label>
                            <Select name="ministry_involvement">
                                <SelectTrigger id="ministry_involvement">
                                    <SelectValue placeholder="Select involvement level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Ministry Involvement</SelectLabel>
                                        <SelectItem value="choir">choir</SelectItem>
                                        <SelectItem value="usher">usher</SelectItem>
                                        <SelectItem value="youth">youth</SelectItem>
                                        {/* TODO -- data must come from database */}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* TODO: Need to planned on how we include leader assigned/ mentor */}
                        <div className="grid gap-2">
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea id="notes" name="notes" placeholder="Additional information" />
                        </div>
                    </div>
                </section>
                <SheetFooter className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                    <SheetClose asChild>
                        <Button type="button" variant="outline" className="w-full sm:w-auto">
                            Cancel
                        </Button>
                    </SheetClose>
                    <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
                        Save member
                    </Button>
                </SheetFooter>
            </form>
        </SheetContent>
    </Sheet>
    );
}