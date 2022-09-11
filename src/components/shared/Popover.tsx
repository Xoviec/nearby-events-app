import { Popover } from '@headlessui/react'
import { Props } from '@headlessui/react/dist/types'
import { trpc } from '../../utils/trpc'

export function Form() {

  const addYourEventMutation = trpc.useMutation(["yourEvent.add",])

  function addYourEvent(event){
    // event.preventDefault()
  //   console.log(event.target.name.value)
    const yourEvent = {
      organizer: event.target.organizer.value,
      date: event.target.date.value,
      place: event.target.place.value,
      description: event.target.description.value
    }
    addYourEventMutation.mutate({...yourEvent})
    

  }

return (
  <form onSubmit={addYourEvent}>
    <label>Name</label>
    <input type="text" name="organizer" required />

    <label>Rating</label>
    <input type="text" name="date" required />
{/* 
    <label>Address</label>
    <input type="text"  name="place" required /> */}

    <select name="place" id="">
      <option>Dupa</option>
      <option>CHuja</option>
    </select>

    <label>Description</label>
    <input type="text" name="description" required />

    <button type="submit">Submit</button>
  </form>
)
}

export type PopoverProps = {
  title: string,

}

export default function MyPopover({title}: PopoverProps) {


  return (
    <Popover className="relative">
      <Popover.Button>{title}</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col bg-danger-rgb">
          <Form/>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  )
}