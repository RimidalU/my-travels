'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { LogOut, User } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'

export function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-px rounded-full self-center h-8 w-8"
        >
          <Avatar className="h-18 w-18">
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2 ">
        <DropdownMenuLabel>
          <p>My account</p>
          <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
            RimidalU
          </p>
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/profile/RimidalU`}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={false}
            onClick={() => console.log('Click!')}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>LogOut</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
